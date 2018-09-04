// @flow

export default class UI {
  constructor() {
    this.doc = document;
    this.win = window;
    this.body = this.doc.body;
  }

  /**
   * showToast.
   * {
   *  @content {string} 内容
   *  @duration {number} 时间
   * }
   */
  showToast(options) {
    const _toast = $(
      [
        '<div class="toast">',
        '  <div class="weui-mask_transparent"></div>',
        '  <div class="weui-toast fadeToast">',
        '     <p class="weui-toast__content">' + options.content + '</p>',
        '  </div>',
        '</div>'
      ].join('')
    );

    _toast.appendTo(this.body);
    setTimeout(() => {
      _toast.remove();
    }, options.duration);
  }

  showLoading(title) {
    const _loading = $(
      [
        '<div id="loading" class="loading">',
        '        <div class="weui-mask_transparent"></div>',
        '        <div class="weui-toast">',
        '            <i class="weui-loading weui-icon_toast"></i>',
        '            <p class="weui-toast__content">数据加载中</p>',
        '        </div>',
        '</div>'
      ].join('')
    );
    _loading.appendTo(this.body);
  }

  hideLoading() {
    const loading = document.getElementById('loading');
    if (loading) {
      loading.remove();
    }
  }

  /**
   * showModal.
   * @title {string}   标题
   * @content {string} 内容
   * @showCancel {boolean}  是否显示取消按钮.
   * @cancelText {string}  取消按钮的文字，默认为"取消"，最多 4 个字符.
   * @confirmText {string}  确定按钮的文字，默认为"确定"，最多 4 个字符.
   * @success {Function}  接口调用成功的回调函数.
   * @fail {Function}  接口调用失败的回调函数.
   */

  showModal(objs) {
    const obj = Object.assign(
      {
        showCancel: true,
        cancelText: '取消',
        confirmText: '确定'
      },
      objs
    );
    const cancelBtn = obj.showCancel
      ? [
          `<a href="javascript:;"
                          id="modalCancel"
                          class="weui-dialog__btn weui-dialog__btn_default dialog-btn"
                          >${obj.cancelText}</a>`
        ].join('')
      : '';
    const confirmBtn = [
      `<a
                          href="javascript:;"
                          id="modalConfirm" class="weui-dialog__btn weui-dialog__btn_primary dialog-btn_confirm"
                          >${obj.confirmText}</a>`
    ].join('');

    const $showModalHtml = $(
      [
        '<div class="js_dialog">',
        '            <div class="weui-mask"></div>',
        '            <div class="weui-dialog dialog">',
        '<div class="weui-dialog__hd">',
        `<strong class="weui-dialog__title">${obj.title}</strong>`,
        '<i id="closePopupModal" class="dialog__close"></i>',
        '</div>',
        `<div class="weui-dialog__bd dialog_bd">${obj.content}</div>`,
        '                <div class="weui-dialog__ft">',
        cancelBtn,
        confirmBtn,
        '                </div>',
        '            </div>',
        '        </div>'
      ].join('')
    );

    $showModalHtml.appendTo(this.body);

    /**
     * 关闭弹窗事件绑定.
     * @addEventListener
     */
    this.doc.getElementById('closePopupModal').addEventListener('click', () => {
      $showModalHtml.remove();
    });

    /**
     * 取消，确定事件绑定.
     * @addEventListener
     */

    if (cancelBtn) {
      this.doc.getElementById('modalCancel').addEventListener('click', () => {
        if (obj.success && typeof obj.success === 'function') {
          obj.success({ value: 'cancel' });
        }
        $showModalHtml.remove();
      });
    }

    this.doc.getElementById('modalConfirm').addEventListener('click', () => {
      if (obj.success && typeof obj.success === 'function') {
        obj.success({ value: 'confirm' });
        $showModalHtml.remove();
      }
      console.log('confirm');
    });

    return Promise.resolve({ value: 'cancel' });
  }
}
