import React, { Component } from 'react';
import { Navbar, NavItem } from 'react-materialize'

import './App.css';
import AnalizadorCodigo from './components/analizador-codigo/AnalizadorCodigo';


class App extends Component {

  render() {
    return (
      <div className="App">
        <Navbar brand='Analizador De Código' right>
          <NavItem >Inicio</NavItem>
        </Navbar>
        <AnalizadorCodigo  />
      </div>
    );
  }
}

export default App;
