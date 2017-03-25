//Loads the correct sidebar on window load,
//collapses the sidebar on window resize.
// Sets the min-height of #page-wrapper to window size
$(function () {

    $("#xml_editor").xmlEditor({
        schema: '../asset/galler.json',
        ajaxOptions: {
            xmlUploadPath: window.location.origin + "/galler/xml"
        },
        submitResponseHandler: function (data) {

        },
        onSubmit: function () {
            console.log('submit called');
        }
    });
});
