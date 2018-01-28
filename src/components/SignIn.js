import React, { Component } from 'react';
import { Redirect } from 'react-router'

class SignIn extends Component {
  state = {
    valid_students: [],
    username: '',
    passowrd: '',
    user_image: 'https://cdn1.iconfinder.com/data/icons/simple-icons/256/github-256-black.png',
    redirect: false,
    disabled: true,
    passwordCheck: '',
    validUser: false,
    loginMessage: ''
  }

  changeUsernameValue = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  savePassword = (event) => {
    this.setState({
      password: event.target.value
    });
  }

  // checkPasswordForUser = (event) => {
  //  return fetch('database for user') 
  //  .then(buffer => res.json(buffer))
  //  .then(userData=>{
  //    if(userData && this.username === userData.username) {
  //      this.setState({
  //        validUser: true,
  //        disabled: false,
  //      })
  //    } else {
  //      this.setState({
  //        loginMessage: 'incorrect username or password'
  //      })
  //    }
  //  })
  // }


  checkUsername = (event) => {
    event.preventDefault()
    return fetch(`https://api.github.com/users/${this.state.username}`)
      .then((resBuffer) => resBuffer.json())
      .then((res) => {
        if (res.login && res.login.toLowerCase() === this.state.username.toLowerCase() && this.state.valid_students.includes(res.login)) {
          this.setState({
            username: res.login,
            user_image: res.avatar_url
          })
        }
      })
      .catch(console.log);
  };

  submitForm = (event) => {
    event.preventDefault()
    this.setState({ redirect: true })
  }


  render() {
    return (
        <div className="loginForm">
          <div >
            <form className='signinForm' onSubmit={this.submitForm}>
              <img src={this.state.user_image} style={{ height: '75px', backgroundColor: 'rgba(255, 255, 255, 0.233)', borderRadius: '50%' }} />
              <div className="form-group">
                <label for="githubUsername">Github username</label>
                <input type="username" className="form-control" placeholder="github username" username={this.state.username} onChange={this.changeUsernameValue} onBlur={this.checkGithubUsername} />
                <small className="form-text text-muted">Github username</small>
              </div>
              <div className="form-group">
                <label for="exampleInputPassword1">Password</label>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                  <input type="password" className="form-control" id="exampleInputPassword1" placeholder="password" password={this.state.password} onChange={this.savePassword} onBlur={this.checkPassword} />
                  <p>{this.state.passwordCheck}</p>
                </div>
                <small className="form-text text-muted">your password</small>
              </div>
              <button type="submit" className="btn btn-primary" disabled={this.state.disabled}>sign in</button>
            </form>
            {this.state.redirect && <Redirect to={`/users/${this.state.username}`} />}
          </div>

        </div>
    )
  }
}

export default SignIn;