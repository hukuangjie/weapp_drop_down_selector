Component({
  properties: {
    options: {
      type: Array,
      value: []
    },
  },
  data: {
    options: [],
    shows: false, //控制下拉列表的显示隐藏，false隐藏、true显示
    indexs: 0, //选择的下拉列 表下标,
  },
  methods: {
    optionTaps(e) {
      let Indexs = e.currentTarget.dataset.index; //获取点击的下拉列表的下标
      let name = e.currentTarget.dataset.name; //获取点击的下拉列表的name
      this.setData({
        indexs: Indexs,
        shows: !this.data.shows
      });
      // 调用父组件方法，并传参
      this.triggerEvent("change", {
        'index': Indexs,
        'name': name
      })
    },
    // 点击下拉显示框
    selectTaps() {
      this.setData({
        shows: !this.data.shows,
      });
    },

    // 此方法供父组件调用
    close() {
      this.setData({
        shows: false
      })
    }
  },
})