import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Localizacion from './Localizacion';
import DatosTiempo from './DatosTiempo';
import transformarTiempo from './../../services/transformarTiempo';
import { api_tiempo } from './../../constants/api_url';

import './style.css';

class LocalizacionTiempo extends Component {

    constructor() {
        super();
        this.state = {
            city: 'Puerto de Sagunto',
            data: null,
        };
    }

    componentDidMount() {
        this.updateClick();
    }
    componentDidUpdate() {

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
                {this.state.data ? 
                    <DatosTiempo data={this.state.data} ></DatosTiempo> 
                        : <CircularProgress /> }
            </div>
        );
    }
}

export default LocalizacionTiempo;