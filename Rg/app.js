//app.js
App({
  
  onLaunch: function () {
    var that=this
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    wx.getStorage({
      key: 'zhuyi',
      success(res){
        that.globalData.zhuyi = res.data
      }
    })
    wx.getStorage({
      key: 'jishi',
      success(res){
        that.globalData.jishi = res.data
      }
    })
    wx.getStorage({
      key: 'jihua',
      success(res){
        that.globalData.jihua = res.data
      }
    })
    wx.getStorage({
      key: 'tongshi',
      success(res){
        that.globalData.tongshi = res.data
      }
    })
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null,
    tongshi:0,
    jishi:0,
    jihua:0,
    zhuyi:0,
    Schulte_Grid_Time:0
  }
})