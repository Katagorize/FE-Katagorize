import React, { Component } from 'react';
import './css/App.css';
import './css/Kata.css';

import Particles from 'react-particles-js'
import pParams from './particles/particles'
import HomePage from './components/HomePage';
import KataPage from './components/KataPage';

import { BrowserRouter, Route, Switch } from "react-router-dom";
class App extends Component {


  render() {

    return (
      <div>
      <BrowserRouter>
        <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/users/:username" component={KataPage} />
          </Switch>
        </div>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
