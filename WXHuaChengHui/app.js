//app.js
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    console.log("小程序初始化")
  },
  onShow: function () {
    console.log("小程序显示")

    // var appInstance = getApp();
    console.log(this.globalTest)
  },
  onHide: function () {
    console.log("小程序隐藏")
  },
  onError: function (msg) {
    console.log("小程序错误" + msg)
  },
  globalTest:"I am global data",
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{

      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  globalData:{
    userInfo:null
  }
})