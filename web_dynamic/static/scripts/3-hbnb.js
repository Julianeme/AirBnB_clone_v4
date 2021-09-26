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

  $.ajax({
    url: "http://0.0.0.0:5001/api/v1/places_search",
    data: {},
    type: "POST",
    dataType: "json",
    ContentType: 'application/json'
    })
    .done(function (data) {
      let index = 0;
      for (index = 0; index < data.length(); index++) {
        let place = data[index];
        $('.places ').append('<article><h2>' + place.name + '</h2><div class="price_by_night"><p>$' + place.price_by_night + '</p></div><div class="information"><div class="max_guest"><div class="guest_image"></div><p>' + place.max_guest + '</p></div><div class="number_rooms"><div class="bed_image"></div><p>' + place.number_rooms + '</p></div><div class="number_bathrooms"><div class="bath_image"></div><p>' + place.number_bathrooms + '</p></div></div><div class="description"><p>' + place.description + '</p></div></article>');
      }
    });
});
