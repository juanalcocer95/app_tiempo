import {url_base, api_key} from './../constants/api_url';

const getUrlTiempoCiudad = city => {
    return `${url_base}?q=${city}&appid=${api_key}&units=metric`;
}

export default getUrlTiempoCiudad;