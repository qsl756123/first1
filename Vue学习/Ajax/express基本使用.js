//1、先引入express
const express = require('express');
//2、创建应用对象
const app = express();
//3、创建路由规则
//request是对请求报文的封装
//response是对响应报文的封装
app.get('/',(request,response)=>{
    //设置响应
    response.send('Hollo Express')
});
//4、监听端口启动服务
app.lister(8080,()=>{
    console.log("服务已启动，8000 端口监听中......");
})