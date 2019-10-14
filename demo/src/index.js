import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import './style.css';

import Example from '../../src';

class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        { name: 'Chrome 78 Beta 发布', createTime: '09/23 07:55' },
        { name: 'Chrome 77 发布：启用全新欢迎界面、引入全局媒体控件和新的配色主题', createTime: ' 09/16 07:45' },
        { name: 'Chrome 76 稳定版发布：禁用 Flash、监听扩展等等', createTime: '07/31 07:33' },
        { name: 'Chrome v75.0.3770.90 稳定版发布', createTime: '06/14 11:50' },
        { name: 'Chrome 75 首个稳定版发布，新增实验性的阅读模式', createTime: '06/07 07:50' },
        { name: 'Chrome 正式版 74.0.3729.157 发布', createTime: '05/17 11:21' },
        { name: 'Chrome 浏览器将不再允许网站劫持后退按钮', createTime: '05/12 08:16' },
      ],
    };

    this.renderRow = this.renderRow.bind(this);
  }

  renderRow(item) {
    return (
      <Fragment>
        <div className="winnings-des">
          {item.name}
        </div>
        <div className="winnings-date">
          {item.createTime}
        </div>
      </Fragment>
    );
  }

  render() {
    return (
      <div>
        <h1>数据滚动demo</h1>
        <Example list={this.state.list} renderRow={this.renderRow} />
      </div>
    );
  }
}

render(<Demo />, document.querySelector('#demo'));
