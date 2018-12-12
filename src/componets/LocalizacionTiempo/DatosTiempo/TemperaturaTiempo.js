import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';

import {
    SOL,
    NIEBLA,
    NUBE,
    NUBLADO,
    LLUVIA,
    NIEVE,
    VIENTO,
} from './../../../constants/weathers';

const icons = {
    [SOL] : "day-sunny",
    [NIEBLA] : "day-fog",
    [NUBE] : "cloud",
    [NUBLADO] : "cloudy",
    [LLUVIA] : "rain",
    [NIEVE] : "snow",
    [VIENTO] : "windy",
};

const getWeatherIcon = estadoTiempo => {
    const icon = icons[estadoTiempo];
    if(icon){
        return <WeatherIcons className="wicon" name={icon} size="3x"></WeatherIcons>
    }else{
        return <WeatherIcons className="wicon" name={"day-sunny"} size="3x"></WeatherIcons>
    }
    
}

const TemperaturaTiempo = ({ temperatura, estadoTiempo}) => (
    <div className="contTemperaturaTiempo">
        { getWeatherIcon(estadoTiempo) }
        <br/><span className="temperatura">{ `${temperatura} Cº`}</span>
    </div>
);

TemperaturaTiempo.propTypes = {
    temperatura : PropTypes.number.isRequired,
    estadoTiempo : PropTypes.string.isRequired,
};

export default TemperaturaTiempo;