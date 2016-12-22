var express = require('express')
var rewrite = require('express-urlrewrite')
var path = require('path')
var app = express()
var logger = require('morgan');
var fs=require("fs");

var onFinished = require('on-finished')
app.use(logger('dev'));
app.use(function(req, res, next){
    // // console.log('服务器重写:', req.url );
    // // 能夠重写成功
    // if(req.url.indexOf('.')===-1 && req.url.indexOf('__webpack_hmr')===-1){
    //     req.url = '/index.html'
    // }
    next();
});

app.use(express.static(path.join(__dirname, '../build')))


app.listen(3001, function () {
  console.log('Server listening on http://localhost:3001, Ctrl+C to stop')
})

