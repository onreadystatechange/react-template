// @flow
import { config, container, request, ui, storage } from '../index';

export default class Service {
  constructor() {
    this.responsePackFormat = 'new';
    this.baseUrl = {};
  }

  setup() {
    return Promise.resolve();
  }

  url(path) {
    return `${this.baseUrl['dev']}${path}`;
  }

  request(path, method, data, header, formData, loading = 'show') {
    const SystemCode = 60;

    const defaultHeader = {
      SystemCode
    };
    const finalData = Object.assign({}, data);
    const finalHeader = Object.assign(defaultHeader, header);

    Object.keys(finalData).forEach(
      key => finalData[key] == null && delete finalData[key]
    );
    Object.keys(finalHeader).forEach(
      key => finalHeader[key] == null && delete finalHeader[key]
    );

    const url = this.url(path);
    if (loading === 'show') {
      ui.showLoading();
    }
    const promise = request.request(
      url,
      method,
      finalData,
      finalHeader,
      formData
    );
    return this.unpackResponse(promise);
  }

  unpackResponse(promise) {
    return promise
      .then(res => {
        const wx_data = res.data;
        const wx_statusCode = res.statusCode;
        const wx_header = res.header;
        const wx_errMsg = res.errMsg;
        ui.hideLoading();
        if (wx_statusCode < 400) {
          return wx_data;
        } else {
          // 4XX, 5XX 失败
          const error = wx_data.error;
          if (error != null) {
            const errorMessage = error.message;
            return Promise.reject(errorMessage);
          } else {
            return Promise.reject(new Error('404 or other error'));
          }
        }
      })
      .catch(err => {
        ui.hideLoading();
        return Promise.reject(err);
      });
  }

  unpackResponseInLegacyFormat(promise) {
    return new Promise((resolve, reject) => {});
  }
}
