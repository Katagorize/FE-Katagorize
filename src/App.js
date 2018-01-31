import React, { Component } from 'react';
import './css/App.css';
import './css/Kata.css';


// import Particles from 'react-particles-js'
// import pParams from './particles/particles'
import HomePage from './components/HomePage';
import KataPage from './components/KataPage';
import KataData from './components/KataData';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";
import OverallData from './components/OverallData';


class App extends Component {


  render() {

    return (
      <div>
      <BrowserRouter>
        <div className="App">
        {/* <Header/> */}
        {/* <Switch> */}
          <Route exact path="/" component={HomePage} />
          <Route exact path='/signin' component={SignIn}/>
          <Route exact path='/signup' component={SignUp}/>
          <Route path="/users/:username" component={KataPage} />
          {/* </Switch> */}
        </div>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
