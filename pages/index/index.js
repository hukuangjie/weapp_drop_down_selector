//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    options: [{
      id: '0',
      name: '全部'
    }, {
      id: '1',
      name: '一号'
    }, {
      id: '2',
      name: '二号'
    }, {
      id: '3',
      name: '三号'
    }],
    selected: {},
  },
  change(e) {
    this.setData({
      selected: {
        ...e.detail
      }
    })
    console.log(e.detail.index);
    console.log(e.detail.name);
  },
  close() {
    // 关闭select
    this.selectComponent('#select').close()
  },
  onLoad: function () {},
})