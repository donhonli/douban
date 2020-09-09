// pages/more/more.js
let app = getApp();
let http = require('../../utils/http')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    totalCount:0,
    request:20,
    urlHttp:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let global = app.globalData;
    let url = global.url;
    let urlhttp = '';
    
    
    let title = options.title;
    switch(title){
      case '影院热映':
        let soon = global.soon;
        urlhttp = url + soon;
        break;
      case '热门':
        let theaters = global.theaters;
        urlhttp = url + theaters;
        break;
      case '排行榜':
        let top = global.top;
        urlhttp = url + top;
        break;
    }
    this.setData({
      urlHttp:urlhttp
    });
    http.request(urlhttp,this.getMore)
    wx.setNavigationBarTitle({
      title: title,
    })
  

  },
  toDetails(e){ //进入详情页
    // console.log(e)
    let id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/pages/details/details?id='+id+'',
    })
  },
getMore(res){
  let tplMore = {};
  if( this.data.totalCount > 0 ){
    tplMore = this.data.list.concat(res.subjects);
  }else{
    tplMore = res.subjects;
  }
  this.data.totalCount += this.data.request;
  this.setData({
    list:tplMore
  })
},
loadMore(){
  let url = this.data.urlHttp + '?start='+this.data.totalCount+'&count='+this.data.request+''
  http.request(url,this.getMore)
  console.log(this.data.list)
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