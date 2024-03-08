async function getWeather(location) {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=b8af07a7f42c41bd94980624240403&q=${location}&days=3&aqi=no&alerts=no`,
      { mode: 'cors' }
    );
    console.log('🚀 ~ getWeather ~ response:', response);
    if (response.status == 200) {
      const weather = await response.json();
      console.log('🚀 ~ getWeather ~ weather:', weather);
      return weather;
    }
  } catch (err) {
    console.log(err);
  }
}
// getWeather('Bangkok');

export { getWeather };
