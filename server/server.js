/*
后台启动服务器的入口模块
1. 引入express
2. 生成应用对象(执行express函数)
3. 注册根路由(使用app的use())
4. 启动服务器(使用app监听指定端口)
 */
const  express =require('express');
// 2. 生成应用对象(执行express函数)
const app = express()

// 3. 注册根路由(使用app的use())
app.use('/', function (req, res) {
  res.send('hello server!')
})

// 4. 启动服务器(使用app监听指定端口)
app.listen('3000', () => {
  console.log('start server at port 3000')
})


