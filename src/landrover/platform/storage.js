// @flow
export default class Storage {
  setItem(key, value) {
    return Promise.reject(new Error('该方法目前不支持'));
  }

  setItemSync(key, value) {
    try {
      window.localStorage.setItem(key, value);
      console.log('成功设置' + key + '' + value);
      return true;
    } catch (e) {
      console.error(e);
      console.log('失败移除' + key);
      return false;
    }
  }

  getItem(key) {
    return Promise.reject(new Error('该方法目前不支持'));
  }

  getItemSync(key) {
    try {
      return window.localStorage.getItem(key);
    } catch (e) {
      console.error(e);
      return null;
    }
  }

  removeItem(key) {
    return Promise.reject(new Error('该方法目前不支持'));
  }

  removeItemSync(key) {
    try {
      window.localStorage.removeItem(key);
      console.log('成功移除' + key);
      return true;
    } catch (e) {
      console.error(e);
      console.log('失败移除' + key);
      return false;
    }
  }

  clear() {
    return Promise.reject(new Error('该方法目前不支持'));
  }

  clearSync() {
    try {
      window.localStorage.clear();
      return true;
    } catch (e) {
      console.error(e);
      return false;
    }
  }
}
