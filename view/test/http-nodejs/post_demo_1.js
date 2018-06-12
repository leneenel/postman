var http=require("http");
var querystring=require("querystring");

var postData=querystring.stringify({
    "YII_CSRF_TOKEN":"3131fb63e46022186ffd1254fa69c6d55c7cd3ce",
    "detail":"",
    "name":"test6"
});

var options={
    hostname:"10.98.2.79",
    port:8080,
    path:"/setting/audit/add",
    method:"PUT",
    headers:{
        "Accept":"*/*",
        "Origin":"http://10.98.2.79:8080",
        "X-Requested-With":"XMLHttpRequest",
        "User-Agent":"Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.119 Safari/537.36",
        "Content-Type":"application/x-www-form-urlencoded",
        "Referer":"http://10.98.2.79:8080/host/audit/index",
        "Accept-Encoding":"gzip, deflate",
        "Accept-Language":"zh-CN,zh;q=0.9",
        "Cookie":"YII_CSRF_TOKEN=5a6e3ad90aad1e9778dc99aac5a91fb27a6ca4f9s%3A40%3A%223131fb63e46022186ffd1254fa69c6d55c7cd3ce%22%3B; SKYLAR56a747d2d425ba1c8ea14f50ad=cbib9oausj8b1s0l8ucb59avm6"
    }
}

var req=http.request(options,function(res){
    res.on("data",function(chunk){
        console.log(chunk.toString());
    });
    res.on("end",function(){
        console.log("post succeed");
    });
    console.log(res.statusCode);
});

req.on("error",function(err){
    console.log(err.message);
})
req.write(postData);
req.end();