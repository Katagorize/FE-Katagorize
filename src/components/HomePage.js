import React from 'react';
import Particles from 'react-particles-js';
import pParams from '../particles/particles';

class HomePage extends React.Component {
    state = {
        valid_students: ['SemraSh', 'steele87', 'jaderyan', 'christopher-peers', 'jdunsby', 'MtlJ1991', 'AnatDean', 'JacDarby', 'najmi-smile', 's-Hale', 'jenniredfield', 'starfrogsplash', 'LukeFenn', 'rogersop', 'amysews', 'ajmc1992', 'P-Copley', 'dzewelina', 'megan-field', 'Tomathon', 'Thermo5', 'barks1212', 'hakbar0', 'SamuelEdwardLea', 'AarOmoPer'],
        username: '',
        passowrds: '',
        message: '',
        user_image: 'https://cdn1.iconfinder.com/data/icons/simple-icons/256/github-256-black.png'
    }

    // fetchValidStudents(){
    //     fetch('northcoders-valid-student-api') 
    //     .then(buffer=>{buffer.json()})
    //     .then(res => {
    //         this.setState({
    //             valid_students: valid_students.push(res.githubNames)
    //         })
    //     })
    // }

    changeUsernameValue = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    changePasswordValue = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    githubUsernameValidation = (event) => {
        event.preventDefault()
        return fetch(`https://api.github.com/users/${this.state.username}`)
            .then((resBuffer) => resBuffer.json())
            .then((res) => {
                if (res.login && res.login.toLowerCase() === this.state.username.toLowerCase() && this.state.valid_students.includes(res.login)) {
                    this.setState({
                        message: '√',
                        username: res.login,
                        user_image: res.avatar_url
                    })
                } else {
                    this.setState({
                        message: 'this username is not valid'
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
                            <img src={this.state.user_image} style={{height:'75px', backgroundColor:'rgba(255, 255, 255, 0.233)', borderRadius:'50%'}}/>
                        <form>
                            <label>github username</label><br />
                            <input  type="text" placeholder="enter username" username={this.state.username} onChange={this.changeUsernameValue} />
                            <p>{this.state.message}</p>
                            <label>Password</label>
                            <input  type="password" placeholder="enter password" name="enterPassword" password={this.state.password} onChange={this.changePasswordValue}/>
                            <button onClick={this.githubUsernameValidation}>login</button>
                        </form>
                    </div>
                </div>
            </div>

        )
    }
}

export default HomePage;