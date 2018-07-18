import initMap from './map';

// Fixed quotes, should use single quotes in JS

ymaps.ready(() => {
  initMap(ymaps, 'map');
  console.log('inited');
});
