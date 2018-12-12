import React, { Component } from 'react';
import Localizacion from './Localizacion';
import DatosTiempo from './DatosTiempo';
import transformarTiempo from './../../services/transformarTiempo';
import { api_tiempo } from './../../constants/api_url';
import './style.css';

import {
    SOL,
    NIEBLA,
    NUBE,
    NUBLADO,
    LLUVIA,
    NIEVE,
    VIENTO,
} from './../../constants/weathers';

const data = {
    temperatura: 5,
    estadoTiempo: SOL,
    humedad: 10,
    viento: "10 m/s",
}


class LocalizacionTiempo extends Component {

    constructor() {
        super();
        this.state = {
            city: 'Puerto de Sagunto',
            data: data,
        };
    }

    updateClick = () => {

        fetch(api_tiempo).then(
            resolve => {
                return resolve.json();
            }
        ).then( data => {
            const nuevoTiempo = transformarTiempo(data);
            this.setState({
                data: nuevoTiempo,
            });
        })  
    }

    render() {
        return (
            <div className="ContLocalizacionTiempo">
                <Localizacion ciudad={this.state.city}></Localizacion>
                <DatosTiempo data={this.state.data} ></DatosTiempo>
                <button onClick={this.updateClick}>Actualizar</button>
            </div>
        );
    }
}

export default LocalizacionTiempo;