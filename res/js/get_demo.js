exports.my_get = function(url){
    var http = require('http');
    var querystring = require('querystring');

    var options={
        hostname:"127.0.0.1",
        port:3001,
        path:"/",
        method:"GET",
        headers:{
            "Accept":"text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
            "Upgrade-Insecure-Requests":"1",
            "User-Agent":"Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.79 Safari/537.36",
            // "Referer":"http://10.98.2.79:8080/setting/policy/whiteexportmanage",
            "Accept-Encoding":"gzip, deflate, br",
            "Accept-Language":"zh-CN,zh;q=0.9",
            // "Cookie":"YII_CSRF_TOKEN=7956b009afd1370d73c3f985fa5156440d2dc3f9s%3A40%3A%22a0037754853c513fded0259696717df534ccbe89%22%3B; SKYLAR56a747d2d425ba1c8ea14f50ad=uein70qicvut2p8vlstju59fj6"
        }
    }

    var req=http.request(options,function(res){
        res.setEncoding("utf-8");
        res.on("data",function(chunk){
            console.log(chunk.toString())
        });
        // console.log(res.statusCode);
    });
    req.on("error",function(err){
        console.log(err.message);
    });
    req.end();
}


