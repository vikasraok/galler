/**
 * Created by vikas on 25-Mar-17.
 */
(function(){
$(document).on('ready',function(){
    $.ajax({
        url : window.location.origin+'/galler/xml/list?type=rtu',
        headers : {
            'TOKEN' : $.cookie('token')
        },
        method : 'GET',
        success: function (data) {
            var d = ''
            for (var i = 0; i < data.list.length; i++){
                d += "<tr><td>" + data.list[i] + "</td></tr>"
            }
            $("#rtu-table").html(d)
        },
        error: function (textStatus, errorThrown) {
            alert('couldn\'t get rtus, check logs!');
        }
    });
    $.ajax({
        url : window.location.origin+'/galler/xml/list?type=xml',
        headers : {
            'TOKEN' : $.cookie('token')
        },
        method : 'GET',
        success: function (data) {
            var d = ''
            for (var i = 0; i < data.list.length; i++){
                d += "<tr><td>" + data.list[i] + "</td></tr>"
            }
            $("#xml-table").html(d)
        },
        error: function (textStatus, errorThrown) {
            alert('couldn\'t get rtus, check logs!');
        }
    })
})
})();