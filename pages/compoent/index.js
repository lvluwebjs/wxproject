// pages/compoent/index.js
Page({
  /**
     * 页面的初始数据
     */
  data: {
    tabList: [{
      id: 0,
      name: '首页',
      isActive: true
    }, {
      id: 1,
      name: '原创',
      isActive: false
    }, {
      id: 2,
      name: '分类',
      isActive: false
    }, {
      id: 3,
      name: '关于',
      isActive: false
    },],
    current: 0
  },
  myevent(e) {
    var { params } = e.detail
    this.setData({
      current: params
    })
  }
})