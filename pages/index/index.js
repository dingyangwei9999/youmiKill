//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
  },
  //事件处理函数
  goSignupPage: function() {
    wx.navigateTo({
      url: '../signup/signup'
    })
  },
  goIntroducePage: function () {
    wx.navigateTo({
      url: '../introduce/introduce'
    })
  },
  goGameSettingPage: function () {
    wx.navigateTo({
      url: '../gameSetting/gamesetting'
    })
  },
  onLoad: function () {
  }
})
