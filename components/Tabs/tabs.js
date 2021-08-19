// components/Tabs/tabs.js
Component({
  /**
   * 组件定义时启用多slot(具名)插槽支持
   */
  options: {
    multipleSlots: true
  },
  /**
   * 组件的属性列表，接收父组件传递的数据
   * 
   */
  properties: {
    tabList: {
      type: Array,
      value: []
    },
    tabListh: {
      type: Array,
      value: []
    },
    current: {
      type: Number,
      value: 0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    itemChange(e) {
      var { index } = e.target.dataset;
      this.triggerEvent('myevent', { params: index })
    },
    itemChangeh(e) {
      var { index } = e.target.dataset;
      this.triggerEvent('myeventh', { params: index })
    }
  }
})
