import React, {Component} from 'react';
import Katas from './Katas';
import KataInfo from './KataInfo';
import {BrowserRouter, Route, Switch, Link} from "react-router-dom";


class UserPage extends Component {
    state= {

    }

    render() {
        
        return (
            <div className='KataPage'>
            <div>
                <h4>user page</h4>
                <Katas username={this.props.match.params.username}/>
                <Route path="/users/:username/:kataname" component={KataInfo} />

                
            </div>
            </div>
        )
    }
}

export default UserPage;