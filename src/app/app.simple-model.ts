export const dataModel = {
  baseLayers: [{
    attribution: '© OpenStreetMap & Contributors',
    url: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    name: 'OpenStreetMap',
    active: true,
  }, {
    attribution: '© OpenStreetMap & Contributors',
    url: 'http://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
    name: 'OpenTopoMap',
  }],
  locationPicker: {
    lat: 51,
    lng: 7,
    draggable: true,
    radius: 1000, // 1km
  }
};
