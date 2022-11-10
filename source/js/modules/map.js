
const mapSection = document.querySelector('.contacts');

mapSection.classList.remove('contacts--no-js');

const map = window.L.map('map')
    .setView({
      lat: 59.937003,
      lng: 30.322372,
    }, 16);

window.L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }
).addTo(map);


const mainPinIcon = window.L.icon({
  iconUrl: './img/svg/map-marker-icon.svg',
  iconSize: [20, 24],
  iconAnchor: [26, 52],
});

const mainPinMarker = window.L.marker(
    {
      lat: 59.937003,
      lng: 30.322372,
    },
    {
      draggable: false,
      icon: mainPinIcon,
    }
);

export {mainPinMarker, map};
