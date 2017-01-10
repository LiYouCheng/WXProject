//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: '事在人为、永不放弃',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    console.log("点击跳转")
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('页面加载')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },
  onReady: function () {
    console.log("初次渲染完成")
  },
  onShow: function () {
    console.log("页面显示")
  },
  onHide: function () {
    console.log("页面隐藏")
  },
  onUnload: function () {
    console.log("页面卸载")
  },
  onPullDownRefresh: function () {
    console.log("用户下拉操作")
  },
  onReachBottom: function () {
    console.log("上拉触底事件")
  },
  onShareAppMessage: function () {
    console.log("点击分享")
    return {
      title:'自定义分享标题',
      desc:'自定义分享描述',
      path:'/page/user?id=123'
    }
  }
})
