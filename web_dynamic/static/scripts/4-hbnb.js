$(document).ready(function () {

  $.get("http://0.0.0.0:5001/api/v1/status/", function (data) {
    if (data.status === "OK") {
      $('#api_status').addClass('available');
    }
    else {
      $('#api_status').removeClass('available');
    }
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

$('.filters > button').click(function () {
    $.ajax({
        type: 'POST',
        url: 'http://0.0.0.0:5001/api/v1/places_search',
        data: JSON.stringify({'amenities': Object.keys(ampty_id)}),
        dataType: 'json',
        contentType: 'application/json',
        success: function (data) {
        let i = 0;
        for (i = 0; i < data.length; i++) {
            let place = data[i];
            $('.places ').append('<article><h2>' + place.name + '</h2><div class="price_by_night"><p>$' + place.price_by_night + '</p></div><div class="information"><div class="max_guest"><div class="guest_image"></div><p>' + place.max_guest + '</p></div><div class="number_rooms"><div class="bed_image"></div><p>' + place.number_rooms + '</p></div><div class="number_bathrooms"><div class="bath_image"></div><p>' + place.number_bathrooms + '</p></div></div><div class="description"><p>' + place.description + '</p></div></article>');
            }
        }
        });
    });
});
