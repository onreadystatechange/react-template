// @flow
import Service from '../landrover/business/service/base.service'

export default class MALLService extends Service {

  constructor() {
    // 初始化行为
    super()
    this.baseUrl = this.getBaseUrl()
  }

  setup() {
    // 启动行为
    return super.setup()
  }

  getBaseUrl() {
    const url = {
      dev: 'http://106.15.81.48/admin/',
      gqc: 'http://106.15.81.48/admin/',
      prd: 'http://106.15.81.48/admin/'
    }
    return url
  }
  // 业务接口务按照下列方法来书写
  //
  // /**
  //  * 实例接口
  //
  //  * @param {string} exampleParam1
  //  * @param {number} exampleParam2
  //  * @returns {Promise<exampleResponse>}
  //  * @memberof SAASService
  //  */
  // exampleRequest(exampleParam1: string, exampleParam2: number): Promise<exampleResponse> {
  //   return this.request(
  //     'cgi/examplePath',
  //     'GET',
  //     {
  //       exampleParam1,
  //       exampleParam2
  //     }
  //   )
  // }

  /**
   * 获取banenr列表.
   * @param {string} pageIndex
   * @param {string} pageSize
   */
  getBannerListRequest(
    pageIndex,
    pageSize = 10
  ){
    return this.request(
      'banner/page',
      'GET',
      {
        pageIndex,
        pageSize
      }
    )
  }
}
