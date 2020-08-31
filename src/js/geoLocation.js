import weather from './weather.js';

const currentPosition = () => {
  const status = document.querySelector('#status');
  const loading = document.querySelector('#loading');
  const spinner = document.querySelector('#spinner');
  const main = document.querySelector('main');

  const success = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    loading.remove();

    weather.currentWeather(latitude, longitude);
    main.style.visibility = 'visible';
  };

  const error = () => {
    spinner.remove();
    status.textContent = 'Tidak dapat menemukan lokasi';
  };

  const options = {
    enableHighAccuracy: true,
    timeout: 1000 * 30, //30 detik
    maximumAge: 1000 * 60 * 10, //10 menit
  };

  if (navigator.geolocation) {
    main.style.visibility = 'hidden';
    status.textContent = 'Mencari lokasi ...';
    navigator.geolocation.watchPosition(success, error, options);
  } else {
    spinner.remove();
    status.textContent = 'Geolocation tidak di support di browser ini';
  }
};

export default {
  currentPosition,
};
