window.onload=function(){
    var li = document.getElementsByClassName("nav-li");
    var content_right = document.getElementsByClassName("content-right");

    for(var i=0;i<li.length;i++){
        li[i].onclick = function(){
            content_right.style.display = "block";
            // alert("hello")
        }
    }

    var request_url = document.getElementById("request-url");
    var send = document.getElementById("send");
    var reps = document.getElementById("reps");
    send.onclick = function () {
        var url = request_url.value;
        // console.log(url);
        $.post("http://127.0.0.1:8887/get_demo", {
            url: url
        }, function(data,status) {
            alert(data+"\n"+status);
        });

    }


}