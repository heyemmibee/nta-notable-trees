// let map; 
// document.addEventListener('DOMContentLoaded', () => {
//     let s = document.createElement('script');
//     document.head.appendChild(s);
//     s.addEventListener('load', () => {
//         console.log('did you see me load?');
//         map = new google.maps.Map(document.getElementById('tree-map'), {
//         center: {
//             lat:115, 
//             lng:-213
//         },
//         zoom: 15,
//         mapTypeId: google.maps.mapTypeId.ROADMAP
//     });
//         s.src = `https://maps.googleapis.com/maps/apis/js?key=${APIKEY}&callback=initMap`;
//     });
// })

function initMap() {
    // The location of Uluru
    var uluru = {lat: -25.344, lng: 131.036};
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('tree-map'), {zoom: 4, center: uluru});
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: uluru, map: map});
  }; 