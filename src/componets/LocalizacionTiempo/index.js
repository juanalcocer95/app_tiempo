import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { PropTypes } from 'prop-types';
import Localizacion from './Localizacion';
import DatosTiempo from './DatosTiempo';
import transformarTiempo from './../../services/transformarTiempo';
import getUrlTiempoCiudad from './../../services/getUrlTiempoCiudad';

import './style.css';

class LocalizacionTiempo extends Component {

    constructor(props) {
        super(props);
        const { city } = props;
        this.state = {
            city,
            data: null,
        };
    }

    componentDidMount() {
        this.updateClick();
    }
    componentDidUpdate() {

    }

    updateClick = () => {

        fetch( getUrlTiempoCiudad(this.state.city) ).then(
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

LocalizacionTiempo.propTypes = {
    city: PropTypes.string.isRequired,
}
export default LocalizacionTiempo;