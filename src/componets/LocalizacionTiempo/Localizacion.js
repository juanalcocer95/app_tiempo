import React from 'react';
import PropTypes from 'prop-types';
const Localizacion = (props) => {

    //Destructuring
    const { ciudad } = props;
    // ==
    //const ciudad = props.ciudad;

    return (
    <div className="ContLocalizacion">
        <h1>{ciudad}</h1>
    </div>);
}

Localizacion.propTypes = {
    ciudad : PropTypes.string.isRequired,
}

export default Localizacion;