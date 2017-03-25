$(function() {
    $('#side-menu').metisMenu();
});

//Loads the correct sidebar on window load,
//collapses the sidebar on window resize.
// Sets the min-height of #page-wrapper to window size
$(function() {
    $(window).bind("load resize", function() {
        var topOffset = 50;
        var width = (this.window.innerWidth > 0) ? this.window.innerWidth : this.screen.width;
        if (width < 768) {
            $('div.navbar-collapse').addClass('collapse');
            topOffset = 100; // 2-row-menu
        } else {
            $('div.navbar-collapse').removeClass('collapse');
        }

        var height = ((this.window.innerHeight > 0) ? this.window.innerHeight : this.screen.height) - 1;
        height = height - topOffset;
        if (height < 1) height = 1;
        if (height > topOffset) {
            $("#page-wrapper").css("min-height", (height) + "px");
        }
    });

    var url = window.location;
    // var element = $('ul.nav a').filter(function() {
    //     return this.href == url;
    // }).addClass('active').parent().parent().addClass('in').parent();
    var element = $('ul.nav a').filter(function() {
        return this.href == url;
    }).addClass('active').parent();

    while (true) {
        if (element.is('li')) {
            element = element.parent().addClass('in').parent();
        } else {
            break;
        }
    }
    $('#deviceAdd').submit(
        function (event) {
            event.preventDefault();
            var values = {};
            $.each($('#deviceAdd').serializeArray(), function(i, field) {
                values[field.name] = field.value;
            });
            $.ajax({
                url: window.location.origin + "/galler/rtu/",
                method: "POST",
                data: values,
                success: function(data){
                   alert('device added successfully!');
                    $("#deviceAdd")[0].reset();
                },
                error: function (textStatus, errorThrown){
                    alert('device not added, check logs!');
                }
            });
            console.log(values);
        }
    );
});
