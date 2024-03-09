import { getWeather } from './fetchWeather.js';
import {
  searchSubmitBtn,
  form,
  searchErrorText,
  searchInput,
} from './searchValidate.js';
import {
  getDateRelativeToToday,
  getDayFormat,
  getMonthFormat,
  getWeatherDateFormat,
} from './getDate.js';
import { displayLoading, hideLoading } from './loading.js';

const cardContainer = document.querySelector('#weather-card-container');

let weatherInfo;
async function createWeatherCard(location, day) {
  weatherInfo = await getWeather(location);

  const weatherDetailContainer = document.createElement('div');
  const weatherDate = document.createElement('div');
  const cityName = document.createElement('div');
  const weatherInfoLeft = document.createElement('div');
  const weatherInfoRight = document.createElement('div');
  const weatherInfoWrapper = document.createElement('div');
  const weatherImg = document.createElement('img');
  const weatherImgWrapper = document.createElement('div');
  const weatherAvgTemperature = document.createElement('div');
  const weatherCondition = document.createElement('div');
  const weatherImgTemperatureWrapper = document.createElement('div');
  const humidityWrapper = document.createElement('div');
  const humidityText = document.createElement('div');
  const humidityNum = document.createElement('div');
  const rainChanceWrapper = document.createElement('div');
  const rainChanceText = document.createElement('div');
  const rainChanceNum = document.createElement('div');
  const snowChanceWrapper = document.createElement('div');
  const snowChanceText = document.createElement('div');
  const snowChanceNum = document.createElement('div');

  weatherDetailContainer.classList.add('weather-detail-container');
  weatherDate.classList.add('weather-date');
  cityName.classList.add('city-name');
  weatherImg.classList.add('weather-img');
  weatherAvgTemperature.classList.add('avg-temperature', 'cel');
  weatherCondition.classList.add('weather-condition');
  weatherInfoWrapper.classList.add('weather-info-wrapper');
  weatherInfoLeft.classList.add('weather-info-left');
  weatherInfoRight.classList.add('weather-info-right');
  weatherImgTemperatureWrapper.classList.add('weather-img-temperature-wrapper');
  humidityWrapper.classList.add('humidity-wrapper');
  humidityText.classList.add('snow-chance-text');
  snowChanceNum.classList.add('snow-chance-num');

  weatherDate.textContent = `${getWeatherDateFormat(
    getDateRelativeToToday(day)
  )}`;
  cityName.textContent = `${weatherInfo.location.name}`;
  weatherImg.src = `${weatherInfo.forecast.forecastday[day].day.condition.icon}`;
  weatherImg.alt = `${weatherInfo.forecast.forecastday[day].day.condition.text}`;
  weatherAvgTemperature.textContent = `${weatherInfo.forecast.forecastday[day].day.avgtemp_c}°C`;
  weatherCondition.textContent = `${weatherInfo.forecast.forecastday[day].day.condition.text}`;
  humidityText.textContent = 'Humidity';
  rainChanceText.textContent = 'Rain Chance';
  snowChanceText.textContent = 'Snow Chance';

  humidityNum.textContent = `${weatherInfo.forecast.forecastday[day].day.avghumidity}%`;
  rainChanceNum.textContent = `${weatherInfo.forecast.forecastday[day].day.daily_chance_of_rain}%`;
  snowChanceNum.textContent = `${weatherInfo.forecast.forecastday[day].day.daily_chance_of_snow}%`;
  humidityWrapper.appendChild(humidityText);
  humidityWrapper.appendChild(humidityNum);
  rainChanceWrapper.appendChild(rainChanceText);
  rainChanceWrapper.appendChild(rainChanceNum);
  snowChanceWrapper.appendChild(snowChanceText);
  snowChanceWrapper.appendChild(snowChanceNum);
  weatherInfoRight.appendChild(humidityWrapper);
  weatherInfoRight.appendChild(rainChanceWrapper);
  weatherInfoRight.appendChild(snowChanceWrapper);

  weatherDetailContainer.appendChild(weatherDate);
  weatherDetailContainer.appendChild(cityName);
  weatherImgWrapper.appendChild(weatherImg);

  weatherImgTemperatureWrapper.appendChild(weatherImgWrapper);
  weatherImgTemperatureWrapper.appendChild(weatherAvgTemperature);
  weatherInfoLeft.appendChild(weatherImgTemperatureWrapper);
  weatherInfoLeft.appendChild(weatherCondition);

  weatherInfoWrapper.appendChild(weatherInfoLeft);
  weatherInfoWrapper.appendChild(weatherInfoRight);
  weatherDetailContainer.appendChild(weatherInfoWrapper);
  cardContainer.appendChild(weatherDetailContainer);

  hideLoading();
}

function clearWeatherContainer() {
  while (cardContainer.firstChild) {
    cardContainer.removeChild(cardContainer.firstChild);
  }
}

async function loopWeatherCard(iteration) {
  for (let index = 0; index < iteration; index++) {
    createWeatherCard(searchInput.value, index);
  }
}

searchSubmitBtn.addEventListener('click', (event) => {
  event.preventDefault();
  event.stopPropagation();
  if (!form.checkValidity()) {
    searchErrorText.textContent = 'Please enter this field';
    return;
  } else {
    searchErrorText.textContent = '';
  }
  displayLoading();
  clearWeatherContainer();
  loopWeatherCard(3);
});
