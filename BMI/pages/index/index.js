//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    bmi: '???',
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function() {

  },

  formSubmit: function(e) {
    console.log(e.detail.value);
    var heigh  = e.detail.value.heigh / 100;
    var weight = e.detail.value.weight;
    this.setData({
      bmi: weight / (heigh * heigh)
    })
  }

})