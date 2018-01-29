import React, {Component} from 'react';
import { Redirect } from 'react-router';
import { Route, Link } from 'react-router-dom';

import Katas from './Katas';
import KataInfo from './KataInfo';

class UserPage extends Component {
    state= {

    }

    render() {
        return (
            <div>
                <h4>user page</h4>
                <Katas/>
                <KataInfo/>
            </div>
        )
    }
}

export default UserPage;