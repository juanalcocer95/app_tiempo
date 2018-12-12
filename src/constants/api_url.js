
const api_key = "47665e9fee7c7fd9c39401b501e322b1"; //f99bbd9e4959b513e9bd0d7f7356b38d
const url_base = "https://api.openweathermap.org/data/2.5/weather";
const location = "Sagunto,es";

export const api_tiempo = `${url_base}?q=${location}&appid=${api_key}&units=metric`;