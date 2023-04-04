export async function getData(cityName) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=b0bdbe14096e5117fbfc05131797535e`;
  try {
    let response = await fetch(apiUrl);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}
export async function getJson(url, endpoint) {
  try {
    let data = await fetch(`${url}/${endpoint}`);
    return await data.json();
  } catch (error) {
    console.log(error);
  }
}
