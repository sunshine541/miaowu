// pages/index/topBar/index.js
Component({
  options: {
    addGlobalClass: true,
  },
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    tagList: [{
      key: 'all',
      value: '全部关注',
    }, {
      key: 'tag1',
      value: '简友圈',
    }, {
      key: 'tag2',
      value: '专题',
    }, {
      key: 'tag3',
      value: '作者',
    }, {
      key: 'tag4',
      value: '连载',
    }, {
      key: 'tag5',
      value: '文章',
    }, {
      key: 'tag6',
      value: '推送更新'
    }],
    activeTag: 'all',
  },

  /**
   * 组件的方法列表
   */
  methods: {
    changeTag: function(e) {
      const { dataset: { id } } = e.target;
      this.setData({
        activeTag: id,
      })
    }
  }
})
