import React from 'react';
import { Redirect } from 'react-router'
import { Route, Link } from 'react-router-dom'
import SignIn from './SignIn'
import SignUp from './SignUp'

class HomePage extends React.Component {
    render() {
        return (
            <div className='homeMain' style={{ backgroundColor: 'black' }}>
                <div className='title'>
                    <h1>KataLyst</h1>
                    <Link to='/signin'> Sign in </Link>
                    <Link to='/signup'> Sign Up </Link>
                </div>
            </div >
        )
    }
}
export default HomePage;