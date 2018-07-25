// pages/signup/signup.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  },
  testLogin: function () {
    wx.login({
      success: function (res) {
        if (res.code) {
          // console.log('登录成功', res.code);
          wx.request({
            url: 'https://www.luoxj.club/login',
            // method: 'POST',
            data: {
              code: res.code,
              appid: 'wx270e69e69c9a2028',
              secret: '75a4c95e5b953054ba8e32a2385d990b',
            },
            header: {
              'content-type': 'application/json' // 默认值
            },
            success: function (d) {
              console.log('登录成功', d.data)
            }
          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    });
  },
  testAuthorize() {
    wx.getSetting({
      success(res) {
        if (!res.authSetting['scope.record']) {
          wx.authorize({
            scope: 'scope.record',
            success() {
              wx.startRecord()
            }
          })
        }
      }
    })
  },
  getUserInfo(data) {
    console.log(data);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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