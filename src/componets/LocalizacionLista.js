import React from 'react';
import LocalizacionTiempo from './LocalizacionTiempo';

const strToComponets = ciudades => (
    ciudades.map( city => 
        <LocalizacionTiempo key={ city } city={ city } />
    ));


const LoacalizacionLista = ({ ciudades }) => {

    return (
        <div>
            {strToComponets(ciudades)}
        </div>);
}




export default LoacalizacionLista;