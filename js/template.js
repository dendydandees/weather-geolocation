const weatherTemplate = (data) => {
  console.log(data);

  let header = '';
  header += `
  <h2 class="d-inline-block">${
    data.name
  }</h2><span class="badge rounded-pill bg-info ml-2 align-top">${
    data.sys.country
  }</span>
  <p class="text-muted">${moment().format('MMMM D, YYYY | h:mm A')}</p>
  `;

  let tempCard =  ''
  tempCard += `
  <div class="d-inline-flex" id="temp">
    <h1 class="m-0">${Math.round(data.main.temp)}<span class="align-top degree">&deg</span></h1>
  </div>
  <div class="mx-2 d-flex flex-column justify-content-end align-items-start flex-grow-1">
    <h6 style="text-transform: capitalize; font-weight: bold;">${data.weather[0]['description']}</h6>
    <div class="d-flex">
      <div id="max-temp" class="mr-2">
        <img src="./img/arrow-up.svg" alt="max temp">
        <span title="Maximum Temperature">${Math.round(data.main.temp_max)} &deg</span>
      </div>
      <div id="min-temp">
        <img src="./img/arrow-down.svg" alt="min temp">
        <span title="Mininimum Temperature">${Math.round(data.main.temp_min)} &deg</span>
      </div>
    </div>
  </div>
  `;

  let tempOpt = ''
  tempOpt += `
  <div class="row">
    <div class="col border py-2">
      <p class="small">Feels like</p>
      <p><strong>${Math.round(data.main.feels_like)} &deg</strong></p>
    </div>
    <div class="col border py-2">
      <p class="small">Wind</p>
      <p><strong>${Math.round(data.wind.speed * 3.6)} km/h | ${
    data.wind.deg
  } &deg</strong></p>
    </div>
    <div class="col border py-2">
      <p class="small">Humidity</p>
      <p><strong>${Math.round(data.main.humidity)} %</strong></p>
    </div>
  </div>
  <div class="row">
    <div class="col border py-2">
      <p class="small">Visibility</p>
      <p><strong>${Math.round(data.visibility) / 1000} km</strong></p>
    </div>
    <div class="col border py-2">
      <p class="small">Pressure</p>
      <p><strong>${data.main.pressure} hPa</strong></p>
    </div>
    <div class="col border py-2">
      <p class="small">Lat | Long</p>
      <p><strong>${data.coord.lat} | ${data.coord.lon}</strong></p>
    </div>
  </div>
  `;

  document.querySelector('#header').innerHTML = header;
  document.querySelector('#temp-card').innerHTML = tempCard
  document.querySelector('#temp-opt').innerHTML = tempOpt
};

export default {
  weatherTemplate,
};
