import { searchErrorText } from './searchValidate.js';
async function getWeather(location) {
  searchErrorText.textContent = '';
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=b8af07a7f42c41bd94980624240403&q=${location}&days=3&aqi=no&alerts=no`,
      { mode: 'cors' }
    );
    if (response.status == 200) {
      const weather = await response.json();
      searchErrorText.textContent = '';
      return weather;
    }
    if (response.status == 400) {
      searchErrorText.textContent = 'No matching location found.';
    }
  } catch (err) {
    console.log(err);
  }
}
// getWeather('Bangkok');
// getWeather('12312ed');

export { getWeather };
