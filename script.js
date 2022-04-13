L.mapquest.key = 'xkfw8P6hDxk2wqhAHkP2tL36WHGqEvuG';

// 'map' refers to a <div> element with the ID map
const map = L.mapquest.map('map', {
  center: [33.6220, 72.9822],
  layers: L.mapquest.tileLayer('map'),
  zoom: 12
});

map.addControl(L.mapquest.control({position: 'bottomright'}));
map.addControl(L.mapquest.trafficControl());
L.marker([53.480759, -2.242631], {
  icon: L.mapquest.icons.marker({
    primaryColor: '#22407F',
    secondaryColor: '#3B5998',
    shadow: true,
    size: 'md',
    symbol: 'A'
  })
})
.bindPopup('This is Manchester!')
.addTo(map);