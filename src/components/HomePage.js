import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../css/App.css'

class HomePage extends Component {
    render() {
        return (
            <div className='homeMain'>
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