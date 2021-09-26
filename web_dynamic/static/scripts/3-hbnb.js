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

  // The URL for the request
  url: "http://0.0.0.0:5001/api/v1/places_search",

  // The data to send (will be converted to a query string)
  data: {},

  // Whether this is a POST or GET request
  type: "POST",

  // The type of data we expect back
  dataType: "json",
  ContentType: 'application/json'
})
  // Code to run if the request succeeds (is done);
  // The response is passed to the function
  .done(function (data) {

    for recorriendo las clases segun el esquema del html siguiente:


          <article></article>
        <div class="title_box">
          <h2>{{ place.name }}</h2>
          <div class="price_by_night">${{ place.price_by_night }}</div>
        </div>
        <div class="information">
          <div class="max_guest">{{ place.max_guest }} Guest{% if place.max_guest != 1 %}s{% endif %}</div>
          <div class="number_rooms">{{ place.number_rooms }} Bedroom{% if place.number_rooms != 1 %}s{% endif
            %}</div>
          <div class="number_bathrooms">{{ place.number_bathrooms }} Bathroom{% if place.number_bathrooms != 1
            %}s{% endif %}</div>
        </div>
        <div class="user">
          <b>Owner:</b> {{ place.user.first_name }} {{ place.user.last_name }}
        </div>
        <div class="description">
          {{ place.description | safe }}
        </div>
      </article >
  })
  // Code to run if the request fails; the raw request and
  // status codes are passed to the function
  .fail(function (xhr, status, errorThrown) {
  ????? como tratar el error

});