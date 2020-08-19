import geoLocation from './geoLocation.js';

const init = () => {
  geoLocation.currentPosition();
};

document.addEventListener('DOMContentLoaded', init);
