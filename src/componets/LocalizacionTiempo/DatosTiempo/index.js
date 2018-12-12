import React from 'react';
import PropTypes from 'prop-types';
import InformacionExtraTiempo from './InformacionExtraTiempo';
import TemperaturaTiempo from './TemperaturaTiempo';
import './style.css';

const DatosTiempo = ({ data: { temperatura, estadoTiempo, humedad, viento } }) => {

    return (<div className="contDatosTiempo">
        <TemperaturaTiempo className="" temperatura={temperatura} estadoTiempo={estadoTiempo}></TemperaturaTiempo>
        <InformacionExtraTiempo humedad={humedad} viento={viento}></InformacionExtraTiempo>

    </div>);
}
    ;

DatosTiempo.propTypes = {
    data: PropTypes.shape({
        temperatura: PropTypes.number.isRequired,
        estadoTiempo: PropTypes.string.isRequired,
        humedad: PropTypes.number.isRequired,
        viento: PropTypes.string.isRequired,
    })
}

export default DatosTiempo;