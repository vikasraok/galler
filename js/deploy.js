/**
 * Created by vikas on 25-Mar-17.
 */
(
    function () {
        $(document).on('ready', function () {
            $.ajax({
                url: window.location.origin + '/galler/xml/list?type=rtu',
                headers: {
                    'TOKEN': $.cookie('token')
                },
                method: 'GET',
                success: function (data) {
                    var d = '';
                    for (var i = 0; i < data.list.length; i++) {
                        $("#rtu-select").append($('<option>', {
                            value: data.list[i],
                            text: data.list[i]
                        }))
                    }
                },
                error: function (textStatus, errorThrown) {
                    alert('couldn\'t get rtus, check logs!');
                }
            });
            $.ajax({
                url: window.location.origin + '/galler/xml/list?type=xml',
                headers: {
                    'TOKEN': $.cookie('token')
                },
                method: 'GET',
                success: function (data) {
                    var d = '';
                    for (var i = 0; i < data.list.length; i++) {
                        $("#xml-select").append($('<option>', {
                            value: data.list[i],
                            text: data.list[i]
                        }))
                    }
                },
                error: function (textStatus, errorThrown) {
                    alert('couldn\'t get rtus, check logs!');
                }
            });
            $('#deploy').click(
                function (event) {
                    event.preventDefault();
                    $.ajax({
                        url: window.location.origin + '/galler/event/',
                        headers: {
                            'TOKEN': $.cookie('token')
                        },
                        method: 'POST',
                        data: {
                            rtu_name: $('#rtu-select').val(),
                            file_name: $('#xml-select').val()
                        },
                        success: function (data) {
                            alert('Xml Deployed. See logs')
                        },
                        error: function (textStatus, errorThrown) {
                            alert('couldn\'t get rtus, check logs!');
                        }
                    })
                }
            )
        })
    })();