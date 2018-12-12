import React from 'react';
import PropTypes from 'prop-types';
const InformacionExtraTiempo = ({humedad, viento}) => (
    <div className="contExtraInfo">
        <span>{`${humedad} % - `}</span>
        <span>{`${viento} viento`}</span>
    </div>    
);

InformacionExtraTiempo.propTypes = {
    humedad : PropTypes.number.isRequired,
    viento : PropTypes.string.isRequired,
}

export default InformacionExtraTiempo;