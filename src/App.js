import React, { Component } from 'react';
import './App.css';
import Particles from 'react-particles-js'
import pParams from './particles/particles'
import HomePage from './components/HomePage';
import { BrowserRouter, Route } from "react-router-dom";
class App extends Component {


  render() {

    return (

<BrowserRouter>
        <div className="App">
        <Route exact path="/" component={HomePage} />
        </div>
</BrowserRouter>


     
    );
  }
}

export default App;
