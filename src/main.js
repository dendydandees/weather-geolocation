import 'regenerator-runtime/runtime'
import geoLocation from './js/geoLocation.js';
import darkMode from './js/darkMode.js';

const init = () => {
  darkMode.dark();
  geoLocation.currentPosition();
};

document.addEventListener('DOMContentLoaded', init);
