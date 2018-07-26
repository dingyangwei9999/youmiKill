// pages/gameAssist/gameAssist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // gameRoles: ['无', '狼人', '预言家', '女巫', '猎人', '守卫', '白痴', '禁言长老'],
    player: [],
    detailHidden: true,
    currentIdx: null,
    gameRoles: [
      { value: '', name:'无', checked: 'true' },
      { value: '狼人', name: '狼人' },
      { value: '预言家', name: '预言家' },
      { value: '女巫', name: '女巫' },
      { value: '猎人', name: '猎人' },
      { value: '守卫', name: '守卫' },
      { value: '白痴', name: '白痴' },
      { value: '禁言', name: '禁言' },
    ],
  },
  initPlayerData() {
    let arr = [];
    for (let i = 1; i <= 12; i++) {
      arr.push({
        idx: i,
        role: '',
        status: 1,
      });
    }
    this.setData({
      player: arr
    })
  },
  openDetail(event) {
    this.setData({
      detailHidden: false,
      currentIdx: event.currentTarget.dataset['index'],
    })
    this.initPlayerInfo();
  },
  initPlayerInfo() {
    var playerobj = this.data.player[this.data.currentIdx];
    var gameroles = this.data.gameRoles;
    var idx = gameroles.findIndex((obj) => (obj.value === playerobj.role))
    var defalutarr = [
      { value: '', name: '无' },
      { value: '狼人', name: '狼人' },
      { value: '预言家', name: '预言家' },
      { value: '女巫', name: '女巫' },
      { value: '猎人', name: '猎人' },
      { value: '守卫', name: '守卫' },
      { value: '白痴', name: '白痴' },
      { value: '禁言', name: '禁言' },
    ];
    defalutarr[idx].checked = 'true';
    this.setData({
      gameRoles: defalutarr,
    })
  },
  switchDetailMenu() {
    this.setData({
      detailHidden: !this.data.detailHidden,
    })
  },
  roleChange(e) {
    let arr = this.data.player;
    arr[this.data.currentIdx]['role'] = e.detail.value;
    this.setData({
      player: arr,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.initPlayerData();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})