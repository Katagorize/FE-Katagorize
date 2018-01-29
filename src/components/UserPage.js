import React, {Component} from 'react';
import Katas from './Katas';
import KataInfo from './KataInfo';

class UserPage extends Component {
    state= {

    }

    render() {
        return (
            <div className='KataPage'>
            <div>
                <h4>user page</h4>
                <Katas/>
                <KataInfo/>
            </div>
            </div>
        )
    }
}

export default UserPage;