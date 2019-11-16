// 引入模块
const express=require("express");
const mysql=require("mysql");
const cors=require("cors");//引用跨域模块
const session=require("express-session");
const bodyParser = require('body-parser');
// p配置数据库连接池
var pool=mysql.createPool({
    host:"127.0.0.1",
    user:"root",
    password:"",
    database:"elm",
    port:3306,
    connectionLimit:20
})
// 创建web服务
var server=express();
// 配置跨域
server.use(cors({
    origin:["http://127.0.0.1:8080","http://localhost:8080"],
    credentials:true
}))
// 配置session环境
server.use(session({
    secret:"128位安全字符串",
    resave:true,
    saveUninitialized:true
}))
// 配置静态目录 pubic
server.use(express.static("public"))
// 配置post请求中间件
server.use(bodyParser.urlencoded({
    extended: false
}))
//监听端口号
server.listen(4040);

//登录
server.get("/login",(req,res)=>{
    var uname=req.query
    var upwd=req.query
   
    var  sql="SELECT id FROM elm_login WHERE uname = ? AND upwd = md5(?) "
    pool.query(sql,[uname,upwd],(err,result)=>{
        if(err) throw err;
        if(result.length==0){
            res.send({code:-1,msg:"用户名或密码错误"})
        }else{
            var uid=result[0].id;
            req.session.uid=uid;
            res.send({code:1,msg:"登录成功"})
        }
    })
})

//注册
server.post("/reg",(req,res)=>{
    // console.log(uname)
    var u=req.body.uname.params;
    var p=req.body.upwd.params;
    console.log(u)
    var sql="INSERT INTO elm_login VALUES(null,? ,?)";
    pool.acquireConnection(sql,[u,p],(err,result)=>{
    if (err)throw err 
    if(result.affecteRows>0){
        res.send("成功")
    }else{
        res.send("失败")
    }
})
})