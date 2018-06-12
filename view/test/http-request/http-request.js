
// function getHome() {
//     var url = 'http://www.baidu.com';
//     var data = {};
//     $.ajax({
//         type: "GET",
//         url: url,
//         dataType: 'jsonp',
//         jsonp: 'jsoncallback',
//         crossDomain: true,
//         success: function (json) {
//         },
//         error: function (xhr) {
//
//         }
//     });
// }

$(function(){
    function success_jsonpCallback (data) {
        console.info("调用showData");
        var result = JSON.stringify(data);
        $("#text").val(result);
    }

    var home = $(".nav_sub");
    home.click(function () {
        var ajaxurl = 'http://www.baidu.com';
        var data = {};
        $.ajax({
            type: "GET",
            url: ajaxurl,
            dataType: 'jsonp',
            jsonp: 'callback',
            jsonpCallback:"success_jsonpCallback",
            // crossDomain: true,
            // async:true,
            success: function(data) {
                var result = JSON.stringify(data);
                $("#text").val(result);
            }
        });
        return false;
    });
});
