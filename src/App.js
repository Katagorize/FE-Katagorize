import React, { Component } from 'react';
import HomePage from './components/HomePage';
import UserPage from './components/UserPage';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import { BrowserRouter, Route, Switch} from "react-router-dom";


class App extends Component {
  state= {
    
  }

  render() {
    return (
      <div>
      <BrowserRouter>
        <div className="App">
        {/* <Header/> */}
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path='/signin' component={SignIn}/>
          <Route exact path='/signup' component={SignUp}/>
          <Route path="/users/:username" component={UserPage} />

          </Switch>
        </div>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
