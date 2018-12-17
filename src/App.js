import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LocalizacionLista from './componets/LocalizacionLista';

const ciudades = [
  "Madrid,es",
  "Teruel,es",
  "Washington,us",
  "Valencia,es",
];

class App extends Component {
  render() {
    return (
      <div className="App">
        Aplicacion del clima
          <LocalizacionLista ciudades={ciudades} />         
      </div>
    );
  }
}

export default App;
