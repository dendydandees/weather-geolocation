const weatherTemplate = (data) => {
  console.log(data);

  let header = '';
  header += `
  <h1 class="d-inline-block font-weight-bold">${
    data.name
  }</h1><span class="badge rounded-pill bg-info ml-2 align-top">${
    data.sys.country
  }</span>
  <p class="font-weight-light">${moment().format('MMMM D, YYYY | h:mm A')}</p>
  `;

  let tempCard = '';
  tempCard += `
  <div class="d-inline-flex" id="temp">
    <img src="http://openweathermap.org/img/wn/${
      data.weather[0]['icon']
    }@2x.png" alt="weather icon">
    <h1 class="m-0">${Math.round(
      data.main.temp,
    )}<span class="align-top degree">&deg</span></h1>
  </div>
  <div class="mx-2 d-flex flex-column justify-content-end align-items-start flex-grow-1">
    <h6 style="text-transform: capitalize; font-weight: bold;">${
      data.weather[0]['description']
    }</h6>
    <div class="d-flex">
      <div id="max-temp" class="mr-2">
        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-up" fill="white" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M8 3.5a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z"/>
          <path fill-rule="evenodd" d="M7.646 2.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8 3.707 5.354 6.354a.5.5 0 1 1-.708-.708l3-3z"/>
        </svg>
        <span class="small" title="Maximum Temperature">${Math.round(
          data.main.temp_max,
        )} &deg</span>
      </div>
      <div id="min-temp">
        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-down" fill="white" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M4.646 9.646a.5.5 0 0 1 .708 0L8 12.293l2.646-2.647a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 0-.708z"/>
          <path fill-rule="evenodd" d="M8 2.5a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-1 0V3a.5.5 0 0 1 .5-.5z"/>
        </svg>
        <span class="small" title="Mininimum Temperature">${Math.round(
          data.main.temp_min,
        )} &deg</span>
      </div>
    </div>
  </div>
  `;

  let tempOpt = '';
  tempOpt += `
  <div class="row">
    <div class="col py-2">
      <p class="small">Feels like</p>
      <p class="small"><strong>${Math.round(
        data.main.feels_like,
      )} &deg</strong></p>
    </div>
    <div class="col py-2">
      <p class="small">Wind</p>
      <p class="small"><strong>${Math.round(data.wind.speed * 3.6)} km/h | ${
    data.wind.deg
  } &deg</strong></p>
    </div>
    <div class="col py-2">
      <p class="small">Humidity</p>
      <p class="small"><strong>${Math.round(data.main.humidity)} %</strong></p>
    </div>
  </div>
  <div class="row">
    <div class="col py-2">
      <p class="small">Visibility</p>
      <p class="small"><strong>${
        Math.round(data.visibility) / 1000
      } km</strong></p>
    </div>
    <div class="col py-2">
      <p class="small">Pressure</p>
      <p class="small"><strong>${data.main.pressure} hPa</strong></p>
    </div>
    <div class="col py-2">
      <p class="small">Lat | Long</p>
      <p class="small"><strong>${data.coord.lat} | ${
    data.coord.lon
  }</strong></p>
    </div>
  </div>
  `;

  document.querySelector('#header').innerHTML = header;
  document.querySelector('#temp-card').innerHTML = tempCard;
  document.querySelector('#temp-opt').innerHTML = tempOpt;
};

export default {
  weatherTemplate,
};
