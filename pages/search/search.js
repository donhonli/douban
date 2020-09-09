// pages/search/search.js
let app = getApp();
let http = require('../../utils/http')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    url:app.globalData.url,
    search:app.globalData.search,
    list:[]

  },
  inputValue(e){
    let val = e.detail.value;
    http.request(this.data.url+this.data.search+'?q='+val+'',this.getSearch)
    
  },
  getSearch(res){
    console.log(res)
    this.setData({
      list:res.subjects
    })
  },
  toDetails(e){ //进入详情页
    // console.log(e)
    let id = e.currentTarget.dataset.id;
    console.log(id)
    wx.navigateTo({
      url: '/pages/details/details?id='+id+'',
    })
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