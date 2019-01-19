const mongoose = require('mongoose');
const mongoConf = require('./config');

/**
 * 连接数据库
 */
mongoose.connect(mongoConf.mongoUrl, {useNewUrlParser: true});

/**
 * 连接成功
 */
mongoose.connection.on('connected', function () {    
    console.log('Mongoose connection open to ' + mongoConf.mongoUrl);  
});    

/**
* 连接异常
*/
mongoose.connection.on('error',function (err) {    
    console.log('Mongoose connection error: ' + err);  
});    

/**
* 连接断开
*/
mongoose.connection.on('disconnected', function () {    
    console.log('Mongoose connection disconnected');  
});  

module.exports = mongoose