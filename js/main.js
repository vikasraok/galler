$(document).ready(function () {
    function checkCookie() {
        cookie = $.cookie('token')
        var url = window.location.pathname;
        var filename = url.substring(url.lastIndexOf('/') + 1);
        if (typeof cookie == "undefined" && filename != "login.html") {
            window.location = window.location.origin + '/galler/pages/login.html'
        }
    }

    checkCookie();
    $("#loginForm").submit(function (event) {
        event.preventDefault();
        var username = $("#user").val();
        var password = $("#pass").val();
        password = $.md5(password);
        var data = {'username': username, 'password': password};
        $.ajax({
            url: window.location.origin + "/galler/user/login/",
            method: "POST",
            data: data,
            success: function (data) {
                $.cookie('token', data.token);
                window.location = window.location.origin + '/galler/pages/index.html'
            },
            error: function (textStatus, errorThrown) {
                alert('Invalid Username/Password')
            }
        });
    });
});
$(function () {
    $('#side-menu').metisMenu();
});

//Loads the correct sidebar on window load,
//collapses the sidebar on window resize.
// Sets the min-height of #page-wrapper to window size
$(function () {
    $(window).bind("load resize", function () {
        var topOffset = 50;
        var width = (
        this.window.innerWidth > 0) ? this.window.innerWidth : this.screen.width;
        if (width < 768) {
            $('div.navbar-collapse').addClass('collapse');
            topOffset = 100; // 2-row-menu
        } else {
            $('div.navbar-collapse').removeClass('collapse');
        }

        var height = (
                (
                this.window.innerHeight > 0) ? this.window.innerHeight : this.screen.height) - 1;
        height = height - topOffset;
        if (height < 1) height = 1;
        if (height > topOffset) {
            $("#page-wrapper").css("min-height", (
                    height) + "px");
        }
    });

    var url = window.location;
    // var element = $('ul.nav a').filter(function() {
    //     return this.href == url;
    // }).addClass('active').parent().parent().addClass('in').parent();
    var element = $('ul.nav a').filter(function () {
        return this.href == url;
    }).addClass('active').parent();

    while (true) {
        if (element.is('li')) {
            element = element.parent().addClass('in').parent();
        } else {
            break;
        }
    }
});
