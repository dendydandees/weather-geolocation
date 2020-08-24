import geoLocation from './geoLocation.js';
import darkMode from './darkMode.js';

const init = () => {
  darkMode.dark();
  geoLocation.currentPosition();
};

document.addEventListener('DOMContentLoaded', init);
