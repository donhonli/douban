// pages/home/home.js
let app = getApp();
let http = require('../../utils/http')
const util = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
      list:{
        soon:{},
        theaters:{},
        top:{}

      },
     
  },
  toDetails(e){ //进入详情页
    // console.log(e)
    let id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/pages/details/details?id='+id+'',
    })
  },
  toMore(e){//查看更多
    let title = e.currentTarget.dataset.title;  
    wx.navigateTo({
      url: '/pages/more/more?title='+title+'',
    })
  },
  toSearch(){
    wx.navigateTo({
      url: '/pages/search/search',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      let global = app.globalData;
      let url = global.url;
      let soon = global.soon;
      let theaters = global.theaters;
      let top = global.top;
      // console.log(url + soon)
      http.requestMove(url + soon + "?start=0&count=10",'soon','影院热映',this.getHttp);
      http.requestMove(url + theaters + "?start=0&count=10",'theaters','热门',this.getHttp);
      http.requestMove(url + top + "?start=0&count=10",'top','排行榜',this.getHttp);
      console.log(this.data);
      
     
  },
  getHttp(res,key,title){
    
    this.data.list[key] = {
      title:title,
      movie:res.subjects
    };
    this.setData({
      list:this.data.list
    })
   
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
  toFav(){
    wx.navigateTo({
      url: '../fav/fav',
    })
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