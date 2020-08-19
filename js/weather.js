import template from './template.js';

const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = '617748615c576eaf1faca6ddba9f3e67';

const currentWeather = async (latitude, longitude) => {
  try {
    let response = await fetch(
      `${BASE_URL}?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`,
    );
    let data = await response.json();

    return template.weatherTemplate(data);
  } catch (error) {
    console.log(error);
  }
};

export default {
  currentWeather,
};
