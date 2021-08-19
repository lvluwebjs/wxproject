// pages/compoent/index.js
Page({
  /**
     * 页面的初始数据
     */
  data: {
    tabListh: [{
      id: 0,
      name: '鞋柜',
      isActive: true
    }, {
      id: 1,
      name: '手机',
      isActive: false
    }, {
      id: 2,
      name: '手表',
      isActive: false
    }, {
      id: 3,
      name: '包包',
      isActive: false
    },],
    current: 0
  },
  myeventh(e) {
    var { params } = e.detail
    this.setData({
      current: params
    })
  }
})