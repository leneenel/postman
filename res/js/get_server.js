form_submit();

function form_submit(){
    var express = require('express');
    var app = express();
    var bodyParser = require('body-parser');
    var get_demo = require('./get_demo');

    var urlencodedParser = bodyParser.urlencoded({ extended: false })

    app.use(express.static('../res/module'));

    app.get('/postman.html',function(req,res){
        res.sendFile(__dirname+"/"+"postman.html");
    })

    app.post('/get_demo', urlencodedParser, function (req, res) {
        var response = {
            "url":req.body.url
        };

        get_demo.my_get(req.body.url);  //数据库方法，加入了两个参数，是提交的数据
        // console.log(response);
        res.send("hello"); //返回的数据，这里根据情况写
        res.end();

    })

    var server = app.listen(8887, function () {  //监听
        var host = server.address().address
        var port = server.address().port
        console.log("应用实例，访问地址为 http://%s:%s", host, port)
    })

}