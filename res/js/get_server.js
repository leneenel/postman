form_submit();

function form_submit(){
    var express = require('express');
    var app = express();
    var bodyParser = require('body-parser');
    var get_demo = require('./get_demo');
    var result = '';

    var urlencodedParser = bodyParser.urlencoded({ extended: false })

    app.use(express.static('../res/module'));

    app.post('/', urlencodedParser, function (req, res) {
        get_demo.my_get(req.body.url);
        res.setHeader("Access-Control-Allow-Origin","*");
        res.setHeader("Access-Control-Allow-Methods","GET,POST");
        res.send("hello");
        res.end();

    });

    var server = app.listen(8887, function () {  //监听
        var host = server.address().address
        var port = server.address().port
        console.log("应用实例，访问地址为 http://%s:%s", host, port)
    })

}