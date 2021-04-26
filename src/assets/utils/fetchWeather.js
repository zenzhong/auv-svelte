export async function fetchWeather() {
  const weather = await fetch(
    'https://free-api.heweather.com/v5/weather?city=%E6%B7%B1%E5%9C%B3&key=628a88f6dd9f47cdb2076cf2a0fa6abf',
    {
      headers: {
        'content-type': 'application/json'
      },
    },
  );

  const data = await weather.json();

  return data.HeWeather5[0];
}