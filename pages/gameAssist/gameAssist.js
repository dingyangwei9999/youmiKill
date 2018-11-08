// pages/gameAssist/gameAssist.js
var app = getApp();
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
      { value: 'X', name: 'X' },
    ],
    gameStatus: [
      { value: '1', name: '生存', checked: 'true' },
      { value: '0', name:'死亡' },
    ],
    godRoles: ['预言家', '女巫', '猎人', '守卫', '白痴', 'X'],
    playerNumber: null,
    randomNumber: 0,
  },
  initPlayerData() {
    this.setData({
      playerNumber: Number(app.globalData.playerNumber),
    });
    let arr = [];
    for (let i = 1; i <= this.data.playerNumber; i++) {
      arr.push({
        idx: i,
        role: '',
        status: '1',
      });
    }
    this.setData({
      player: arr
    })
  },
  openDetail(event) {
    this.setData({
      detailHidden: !this.data.detailHidden,
      currentIdx: event.currentTarget.dataset['index'],
    })
    this.initPlayerInfo();
  },
  initPlayerInfo() {
    var playerobj = this.data.player[this.data.currentIdx];
    var gameroles = this.data.gameRoles;
    var gameStatus = this.data.gameStatus;
    var idx = gameroles.findIndex((obj) => (obj.value === playerobj.role))
    var idx2 = gameStatus.findIndex((obj) => (obj.value === playerobj.status))
    var defaultRole = [
      { value: '', name: '无' },
      { value: '狼人', name: '狼人' },
      { value: '预言家', name: '预言家' },
      { value: '女巫', name: '女巫' },
      { value: '猎人', name: '猎人' },
      { value: '守卫', name: '守卫' },
      { value: '白痴', name: '白痴' },
      { value: 'X', name: 'X' },
    ];
    var defaultStatus = [
      { value: '1', name: '生存' },
      { value: '0', name: '死亡' },
    ];
    defaultRole[idx].checked = 'true';
    defaultStatus[idx2].checked = 'true';
    this.setData({
      gameRoles: defaultRole,
      gameStatus: defaultStatus,
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
  statusChange(e) {
    let arr = this.data.player;
    arr[this.data.currentIdx]['status'] = e.detail.value;
    this.setData({
      player: arr,
    })
  },
  getRandomNumber() {
    this.setData({
      randomNumber: Math.ceil(Math.random() * Number(this.data.playerNumber)),
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