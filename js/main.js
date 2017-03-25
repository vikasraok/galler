$( document ).ready(function() {
    function checkCookie(){
        cookie = $.cookie('token')
        var url = window.location.pathname;
        var filename = url.substring(url.lastIndexOf('/')+1);
        if (typeof cookie == "undefined" && filename != "login.html"){
            window.location = window.location.origin + '/galler/login.html'
        }
    }
    checkCookie();
$("#loginButton").click(function(){
    var username = $("#user").val();
    var password = $("#pass").val();
    password = $.md5(password);
    var data = {'username': username, 'password': password}
    $.ajax({
        url: window.location.origin + "/galler/user/login/",
        method: "POST",
        data: data,
        success: function(data){
            $.cookie('token',data.token)
            window.location = window.location.origin + '/galler/index.html'
        },
        error: function (textStatus, errorThrown){
            alert('Invalid Username/Password')
        }
    });
});    
});