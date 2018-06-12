var cheerio=require("cheerio");
var http=require("http");

var options="http://www.sysu.edu.cn/2012/cn/jgsz/yx/index.htm";
var htmlData=""
var req=http.request(options,function(res){
    res.on("data",function(chunk){
        htmlData+=chunk;
        // console.log(chunk);
    });
    res.on("end",function(){
        var $=cheerio.load(htmlData);
        var textcontent=$("tr").text();
        console.log(textcontent);
    });
});
req.end();
