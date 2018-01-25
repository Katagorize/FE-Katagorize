import React from 'react';
import Particles from 'react-particles-js';
import pParams from '../particles/particles';

class HomePage extends React.Component {

    state = {
        username: '',
        passowrds: '',
        value: '',
        message: ''
    }

    changeValue = (event) => {
        this.setState({
            value: event.target.value
        })
    }

    validation = (event) => {
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
                        message: 'username is not on github'
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
                            <input type="text" placeholder="enter username" value={this.state.value} onChange={this.changeValue} />
                            <p>{this.state.message}</p>
                            <label>Password</label>
                            <input type="text" placeholder="enter password" name="enterPassword" />
                            <button onClick={this.validation}>login</button>
                        </form>
                    </div>
                    {/* <form>
                        <div>
                            <label>Username</label>
                            <input type="text" placeholder="enter username" name="enterUsername" />
                            <label>Password</label>
                            <input type="text" placeholder="enter password" name="enterPassword" />
                            <button type="submit">Login</button>
                        </div>
                    </form> */}
                </div>
            </div>

        )
    }
}

export default HomePage;


// state = {
//     value: '',
//     message: ''
//   }

//   changeValue = (event) => {
//     console.log(event.target.value)
//     this.setState({
//       value: event.target.value
//     })
//   }

//   validation = (event) => {
//     event.preventDefault()
//     return fetch(`https://api.github.com/users/${this.state.value}`)
//       .then((resBuffer) => resBuffer.json())
//       .then((res) => {
//         if (res.login) res.login = res.login.toLowerCase()
//         if (res.login && res.login === this.state.value) {
//           this.setState({
//             message: '√'
//           })
//         } else {
//           this.setState({
//             message: 'username is not on github'
//           })
//         }
//       })
//       .catch(console.log);
//   };

//   render() {

//     return (
//       <div>

//         <div >
//           <form>
//             <label>github username</label><br />
//             <input value={this.state.value} onChange={this.changeValue} />
//             <p>{this.state.message}</p>
//             <button onClick={this.validation}>check</button>
//           </form>
//         </div>
//       </div>


//     );
//   }