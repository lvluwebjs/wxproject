// pages/radio/index.js
Page({
  data: {
    gender: '',
    list: [
      {
        id: 0,
        name: "苹果",
        value: "apple"
      },
      {
        id: 1,
        name: "葡萄",
        value: "grape"
      }, {
        id: 2,
        name: "香蕉",
        value: "bananer"
      }
    ],
    checkList: []
  },
  handlechange(e) {
    if (e.detail.value === 'male') {
      this.setData({
        gender: '男'
      })
    } else {
      this.setData({
        gender: '女'
      })
    }
    // console.log(e);
  },
  handlecheck(e) {
    var { value } = e.detail;
    this.setData({
      checkList: value
    })
  }
})