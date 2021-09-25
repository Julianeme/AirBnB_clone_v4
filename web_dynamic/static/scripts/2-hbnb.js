$(document).ready(function () {
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


  let ampty_id = {}
  $('input[type=checkbox]').change(function () {
    if ($(this).is(':checked')) {
      ampty_id[$(this).data('id')] = $(this).data('name');
    } else {
      delete ampty_id[$(this).data('id')];
    }
      $('.amenities h4').text(Object.values(ampty_id).join(', '));
  });
});
