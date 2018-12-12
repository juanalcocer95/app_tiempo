import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LocalizacionTiempo from './componets/LocalizacionTiempo';

class App extends Component {
  render() {
    return (
      <div className="App">
        Aplicacion del clima
          <LocalizacionTiempo city="Soria,es"></LocalizacionTiempo>         
      </div>
    );
  }
}

export default App;
