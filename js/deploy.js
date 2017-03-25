/**
 * Created by vikas on 25-Mar-17.
 */
(function(){
$(document).on('ready',function(){
    $.ajax({
        url : window.location.origin+'/galler/xml/list?type=rtu',
        headers : {
            TOKEN : $.cookie('token')
        },
        method : 'GET',
        success: function (data) {
            $.each(JSON.parse(data.list), function(i, item) {
                var $tr = $('<tr>').append(
                    $('<td>').text(item)
                );
                $tr.appendTo('#rtu-table');
            });
        },
        error: function (textStatus, errorThrown) {
            alert('couldn\'t get rtus, check logs!');
        }
    });
    $.ajax({
        url : window.location.origin+'/galler/xml/list?type=xml',
        headers : {
            TOKEN : $.cookie('token')
        },
        method : 'GET',
        success: function (data) {
            $.each(JSON.parse(data.list), function(i, item) {
                var $tr = $('<tr>').append(
                    $('<td>').text(item)
                );
                $tr.appendTo('#xml-table');
            });
        },
        error: function (textStatus, errorThrown) {
            alert('couldn\'t get rtus, check logs!');
        }
    })
})
})();