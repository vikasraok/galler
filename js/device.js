/**
 * Created by vikas on 25-Mar-17.
 */
$(function () {
    $('#deviceAdd').submit(
        function (event) {
            event.preventDefault();
            var values = {};
            $.each($('#deviceAdd').serializeArray(), function (i, field) {
                values[field.name] = field.value;
            });
            $.ajax({
                url: window.location.origin + "/galler/rtu/",
                method: "POST",
                headers : {
                    TOKEN : $.cookie('token')
                },
                data: values,
                success: function (data) {
                    alert('device added successfully!');
                    $("#deviceAdd")[0].reset();
                },
                error: function (textStatus, errorThrown) {
                    alert('device not added, check logs!');
                }
            });
            console.log(values);
        }
    );
});