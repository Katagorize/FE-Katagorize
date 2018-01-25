import React from 'react';
import Particles from 'react-particles-js';
import pParams from '../particles/particles';

class HomePage extends React.Component {

    state = {
        username: '',
        password: ''
    }

    render() {
        return (
            <div className='homeMain'>

<div id="particles-js" className='siteBackground'>
          <Particles params={pParams} />
</div>

                <div className='title'>
                    <h1>KataLyst</h1>
                </div>

                <div className='WhatWeDo'>
                    <p>What we do</p>
                </div>

                <div className='WhoWeAre'>
                    <p>Who we are</p>
                </div>

                <div className='AppDetails'>
                    <p>How it works</p>
                </div>

            <div className ="loginForm">
                <form>
                    <div>
                        <label>Username</label>
                        <input type="text" placeholder="enter username" name="enterUsername" />
                        <label>Password</label>
                        <input type="text" placeholder="enter password" name="enterPassword" />
                        <button type="submit">Login</button>
                    </div>
                </form>
            </div>    
            </div>

        )
    }
}

export default HomePage;