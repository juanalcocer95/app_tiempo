
import {
    SOL,
    NIEBLA,
    NUBE,
    NUBLADO,
    LLUVIA,
    NIEVE,
    VIENTO,
} from './../constants/weathers';

const getEstadoTiempo = datos_tiempo => {
    return SOL;
}


const transformarTiempo = datos_tiempo => {
    const { humidity, temp } = datos_tiempo.main;
    const { speed } = datos_tiempo.wind;
    const estadoTiempo = getEstadoTiempo(datos_tiempo);

    const data = {
        humedad: humidity,
        temperatura: temp,
        estadoTiempo,
        viento: `${speed} m/s`,
    }

    return data;
}

export default transformarTiempo;