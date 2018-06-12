var http=require("http");
var querystring=require("querystring");

var postData = JSON.stringify(
    {
        "logdata":[
            {
                "business":["audit"],
                "collectpoint":"as.dc.rp.file",
                "dest_device_type":"3",
                "file_access_time":"2018-05-14 16:16:17",
                "file_create_time":"2018-05-14 16:16:17",
                "file_md5":"8A96D942AB70B994146569A162B66C61",
                "file_old_path":"C:\\Users\\dairongqian.ESG\\Desktop\\邮箱密码.txt",
                "file_path":"C:\\Users\\dairongqian.ESG\\AppData\\Local\\Microsoft\\Windows\\Burn\\Burn\\邮箱密码.txt",
                "file_type":"txt",
                "file_update_time":"2018-04-13 22:18:33",
                "login_account":"ESG\\dairongqian",
                "operate":"copy",
                "process_name":"Explorer.EXE",
                "process_path":"C:\\Windows\\Explorer.EXE",
                "src_device_type":"1",
                "time_event":"2018-06-08 11:16:17"
            }],
        "module":"file_rp",
        "version":"2.0"
    }
);

var options={
    hostname:"10.98.2.79",
    port:80,
    path:"/api/upload_client_log.json?mid=474a630a87d84cb3ae90169dc3b44275&ver=1.0",//?mid=474a630a87d84cb3ae90169dc3b44275&ver=1.0
    method:"POST",
    headers:{
        "Content-Type":"application/json"
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