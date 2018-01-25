import React, { Component } from 'react';
import './css/App.css';
import './css/Kata.css';

import Particles from 'react-particles-js'
import pParams from './particles/particles'
import HomePage from './components/HomePage';
import KataPage from './components/KataPage';

import { BrowserRouter, Route } from "react-router-dom";
class App extends Component {


  render() {

    return (

<BrowserRouter>
        <div className="App">
        <Route exact path="/" component={HomePage} />
        <Route exact path="/kata" component={KataPage} />

        </div>
</BrowserRouter>


     
    );
  }
}

export default App;
