function request(url,callback){
  wx.request({
    url: url,
    success(res){
      callback(res.data)
    }
  })
}

function requestMove(url,key,title,callback){
  wx.request({
    url: url,
    success(res){
      callback(res.data,key,title)
    }
  })
}
module.exports = {
  request,
  requestMove
}