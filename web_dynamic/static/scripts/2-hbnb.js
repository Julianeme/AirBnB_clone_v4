$(function ()
{
    $.get("http://0.0.0.0:5001/api/v1/status/", function (data, textStatus)
    {
        if (textStatus === 'success'){
            $('#api_status').addClass('available');
        }
        else {
            $('#api_status').removeClass('available');
        }
    });
});

$(document).ready(function () {
    let amty_id = {};
    if ($("input[type='checkbox']").prop(":checked")) {
        amty_id[$(this).data('id')] = $(this).data('name');
        console.log(amty_id)
    } else {
        delete amty_id[$(this).data('id')];
    }
    $('div.amenities > h4').text(Object.values(amty_id).join(', '));

});

