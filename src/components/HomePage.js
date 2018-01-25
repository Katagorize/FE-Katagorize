import React from 'react';
import Particles from 'react-particles-js';
import pParams from '../particles/particles';

class HomePage extends React.Component {

    state = {
        username: '',
        passowrds: '',
        message: ''
    }

    changeUsernameValue = (event) => {
        this.setState({
            username: event.target.value
        })
        console.log(this.state.username)
    }

    changePasswordValue = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    githubUsernameValidation = (event) => {
        event.preventDefault()
        return fetch(`https://api.github.com/users/${this.state.value}`)
            .then((resBuffer) => resBuffer.json())
            .then((res) => {
                if (res.login && res.login.toLowerCase() === this.state.value.toLowerCase()) {
                    this.setState({
                        message: '√',
                        username: res.login
                    })
                } else {
                    this.setState({
                        message: 'this user is not on github'
                    })
                }
            })
            .catch(console.log);
    };


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

                <div className="loginForm">
                    <div >
                        <form>
                            <label>github username</label><br />
                            <input className='formText' type="username" placeholder="enter username" username={this.state.username} onChange={this.changeValue} />
                            <p>{this.state.message}</p>
                            <label>Password</label>
                            <input className='formText' type="password" placeholder="enter password" name="enterPassword" password={this.state.password} onChange={this.changePasswordValue}/>
                            <button onClick={this.githubUsernameValidation}>login</button>
                        </form>
                    </div>
                </div>
            </div>

        )
    }
}

export default HomePage;