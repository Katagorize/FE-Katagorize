import React, { Component } from 'react';

class SignUp extends Component {
  state = {
    username: '',
    password: '',
    user_image: 'https://cdn1.iconfinder.com/data/icons/simple-icons/256/github-256-black.png',
    disabled: true,
    passwordCheck: '',
    usernameCheck: false,
    exists: ''
  }

  componentDidMount() {
    this.fetchValidStudents()
  }

  checkPassword = (event) => {
    let disabled = true
    if ((/(?=.*[0-9])[a-zA-Z0-9]{8,}\w+/).test(event.target.value)) {
      if (this.state.usernameCheck) disabled = false
      this.setState({
        password: event.target.value,
        passwordCheck: '✔️',
        disabled: disabled
      })
    }
    else {
      this.setState({
        password: event.target.value,
        passwordCheck: '❌',
        disabled: true
      })
    }
  }

  changeUsername = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  checkGithubUsername = (event) => {
    event.preventDefault()
    return fetch(`https://api.github.com/users/${this.state.username}`)
      .then((resBuffer) => resBuffer.json())
      .then((res) => {
        if (res.login && res.login.toLowerCase() === this.state.username.toLowerCase()) {
          this.setState({
            usernameCheck: true,
            username: res.login,
            user_image: res.avatar_url
          })
        } else {
          this.setState({ usernameCheck: false, disabled: true })
        }
      })
      .catch(console.log);
  };

  submitForm = (event) => {
    event.preventDefault()
    return fetch(`http://katalystpro-env.eu-west-2.elasticbeanstalk.com/api/users/${this.state.username}`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        password: this.state.password,
        user_image: this.state.user_image
      })
    })
      .then((resBuffer) => resBuffer.json())
      .then((res) => {
        if (res === 'user already exists') {
          this.setState({
            exists: 'user already exists'
          })
        }
        else {
          this.props.successfulSignUp()
        }
        
      })
  }

  render() {
    return (
      <div className='popup'>
        <div className='popup_inner'>
          <div className="exit" style={{ float: 'right' }}><button onClick={this.props.closePopup}>x</button>
          </div>
          <div className="loginForm">
            <div >
              <form className='signinForm' onSubmit={this.submitForm.bind(this)}>
                <img alt="user avatar" src={this.state.user_image} style={{ height: '75px', backgroundColor: 'rgba(255, 255, 255, 0.233)', borderRadius: '50%' }} />
                <div className="form-group">
                  <label for="githubUsername">Github Username</label>
                  <input type="username" className="form-control" placeholder="github username" value={this.state.username} onChange={this.changeUsername} onBlur={this.checkGithubUsername} />
                  <p>{this.state.exists}</p>
                  <small className="form-text text-muted">Github Username</small>
                </div>
                <div className="form-group">
                  <label for="inputPassword">Password</label>
                  <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <input type="password" className="form-control" id="inputPassword" placeholder="password" password={this.state.password} onChange={this.checkPassword} />
                    <p>{this.state.passwordCheck}</p>
                  </div>
                  <small className="form-text text-muted">Your Password</small>
                </div>
                <button type="submit" className="btn btn-primary" disabled={this.state.disabled}>sign up</button>
              </form>
            </div>

          </div>
        </div>
      </div>

    )
  }

  fetchValidStudents = () => {
    return fetch('the end point with all students')
      .then()
  }
}

export default SignUp;