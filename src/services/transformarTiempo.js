
import {
    SOL,
    NUBE,
    LLUVIA,
    NIEVE,
    TORMENTA,
    LLOVIZNA,
} from './../constants/weathers';

const getEstadoTiempo = weather => {
    const { id } = weather;
    if(id < 300){
        return TORMENTA;
    }else if(id < 400){
        return LLOVIZNA;
    }else if(id < 600){
        return LLUVIA;
    }else if(id < 700){
        return NIEVE;
    }else if(id === 800) {
        return SOL;
    }else {
        return NUBE;
    }
}


const transformarTiempo = datos_tiempo => {
    const { humidity, temp } = datos_tiempo.main;
    const { speed } = datos_tiempo.wind;
    const estadoTiempo = getEstadoTiempo(datos_tiempo.weather[0]);

    const data = {
        humedad: humidity,
        temperatura: temp,
        estadoTiempo,
        viento: `${speed} m/s`,
    }

    return data;
}

export default transformarTiempo;