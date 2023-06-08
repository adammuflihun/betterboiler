import { greetUser } from '$utils/greet';

window.Webflow ||= [];
window.Webflow.push(() => {
  // const name = 'John Doe';
  // greetUser(name);
  console.log('Error occurred. Error code: ');

  // form location
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        var lat = position.coords.latitude;
        var lng = position.coords.longitude;

        var geocoder = new google.maps.Geocoder();
        var latlng = new google.maps.LatLng(lat, lng);

        geocoder.geocode(
          {
            latLng: latlng,
          },
          function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
              if (results[0]) {
                for (var i = 0; i < results[0].address_components.length; i++) {
                  var types = results[0].address_components[i].types;
                  if (types.indexOf('postal_code') != -1) {
                    var postalCode = results[0].address_components[i].short_name;
                    console.log(postalCode);

                    // Get the first element with a class of "address"
                    const element = document.querySelector('.address');

                    // Set its text content to the new address
                    element.textContent = postalCode;

                    break;
                  }
                }
              }
            } else {
              console.log('Geocoder failed due to: ' + status);
            }
          }
        );
      },
      function (error) {
        console.log('Error occurred. Error code: ' + error.code);
      }
    );
  }
  // form location closing
});
