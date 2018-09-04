/**
 * @Author: pandali
 * @Date: 2018-01-10 15:58:58
 * @Last Modified by: pandali
 * @Last Modified time: 2018-02-28 11:41:34
 * @param Home
 */

import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { container, config } from '../../landrover/business/index';
import MallService from '../../service/mall.service';
import s from './Home.scss';

class Home extends React.Component {
  constructor(props, context) {
    super(props, context);

    /**
     * 初始data.
     */
    this.state = {
      page: {
        pageIndex: 0
      },
      exampleData: [1, 2, 3]
    };
  }

  /**
   * 生命周期函数--监听页面（组件）渲染完成.
   */
  componentDidMount() {
    // do something.
    console.log(container);
    this.reloadAllData();
    // ui.showToast('组件加载完成');
  }

  /**
   * 生命周期函数--监听页面（组件）卸载.
   */
  componentWillUnmount() {
    // do something.
  }
  /**
   * 加载页面所有数据.
   */
  reloadAllData() {
    const promise1 = this.getBannerListRequest(this.state.page.pageIndex);

    const promise = Promise.race([promise1]);
    return promise;
  }

  getBannerListRequest(pageIndex) {
    return container.mallService
      .getBannerListRequest(pageIndex)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        // err.
        console.log(err);
      });
  }
  render() {
    return (
      <div className="viewsFramework-body content">
        <div className="panel">欢迎使用React.</div>
      </div>
    );
  }
}
export default Home;
