const mysql = require("mysql");
const config = require("../config");


var express = require('express');
var router = express.Router();
var moment=require('moment');
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

/* GET users listing. */

//没啥子用的初始api
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


//添加文章的API。
router.post("/addArticle",function(req,res,next){
  var payload = req.body;
  var author=payload.Author;
  var content=payload.Content;
  var h1=payload.H1;
  var h2=payload.H2;
  var h3=payload.H3;
  var coverpage=payload.coverpage;
  console.log("看一下创造文章的payload长啥呀");
  console.log(payload);
  var connection = mysql.createConnection(config.options);
  sql="INSERT INTO article (Author,Content,H1,H2,H3,coverpage) VALUES (?,?,?,?,?,?)";
  connection.query(sql, [author,content,h1,h2,h3,coverpage], function (err, results) {
    if (err) throw err;
    console.log('成功执行一条插入新表格数据的记录，信息如下：')
    console.log(results);
    // 之后再写一个返回用户账号名的查询，现在先懒着。
    res.json(results);
  });
  connection.end();
})


//修改文章的api
router.post("/changeArticle",function(req,res,next){
  var payload = req.body;
  var author=payload.Author;
  var content=payload.Content;
  var h1=payload.H1;
  var h2=payload.H2;
  var h3=payload.H3;
  var coverpage=payload.coverpage;
  var articleID=payload.ArticleID;
  var editor=payload.editor;
  var connection = mysql.createConnection(config.options);
  console.log("看一下json长啥呀：");
  console.log(payload);
  sql0="SELECT Content from article where ArticleID=?";
  var beforeContent;
  connection.query(sql0,[articleID],function(err,results){
    if(err){
      console.log(err);
      throw err;
    }
      console.log("结果为:");
      console.log(results);
      beforeContent=results[0].Content;
      console.log("看一下放进来了没哈");
      console.log(beforeContent);
  })

  sql="UPDATE article SET Author=?,Content=?,H1=?,H2=?,H3=?,coverpage=? where ArticleID= ?";
  //这边有个回调函数执行先后的问题。
  connection.query(sql, [author,content,h1,h2,h3,coverpage,articleID], function (err, results) {
    if (err){
      throw err;
      res.status(400).json("err");
    }
    console.log('成功执行一条插入新表格数据的记录，信息如下：')
    console.log(results);
    // 之后再写一个返回用户账号名的查询，现在先懒着。
    console.log("执行修改记录的插入");
    res.json("Ok!")

  });
  //这边想做一个更新记录时插入修改前后记录的保存，涉及到异步先后调用数据库，没做完，只是做了修改记录，没法回档。

  // sql2="INSERT INTO edithistory (Aid,Editor,Time,Before,After) VALUES (?,?,?,?,?)";
  // var ts=moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
  // console.log("再瞅瞅beforeContent");
  // console.log(beforeContent);
  // connection.query(sql2,[articleID,editor,ts,JSON.stringify(beforeContent),content]),function(err,results){
  //   if(err){
  //     console.log(err);
  //     throw err;
  //   }
  //   console.log("插入结果为:");
  //   console.log(results);
  //   //只由最内层发送。
  //   res.json(results);
  // }
  // res.json("fail to be back.");
  connection.end();
})


//获取所有文章的api。
router.get("/articles",function(req,res,next){

  var connection = mysql.createConnection(config.options);
  sql="select * from article";
  connection.query(sql, [], function (err, results) {
    if (err) throw err;
    console.log('获取信息的请求一条：')
    // 之后再写一个返回用户账号名的查询，现在先懒着。
    res.json(results);
  });
  connection.end();
})


module.exports = router;
