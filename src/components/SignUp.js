import React, { Component } from 'react';
import { Redirect } from 'react-router'

class SignUp extends Component {
  state = {
    valid_students: ['SemraSh', 'steele87', 'jaderyan', 'christopher-peers', 'jdunsby', 'MtlJ1991', 'AnatDean', 'JacDarby', 'najmi-smile', 's-Hale', 'jenniredfield', 'starfrogsplash', 'LukeFenn', 'rogersop', 'amysews', 'ajmc1992', 'P-Copley', 'dzewelina', 'megan-field', 'Tomathon', 'Thermo5', 'barks1212', 'hakbar0', 'SamuelEdwardLea', 'AarOmoPer'],
    username: '',
    password: '',
    user_image: 'https://cdn1.iconfinder.com/data/icons/simple-icons/256/github-256-black.png',
    redirect: false,
    disabled: true,
    passwordCheck: '',
    usernameCheck: false
  }

  componentDidMount() {
    this.fetchValidStudents()
  }


  checkPassword = (event) => {
    let disabled = true
    if ((/(?=.*[0-9])[a-zA-Z0-9]{8,}\w+/).test(event.target.value)) {
      if (this.state.usernameCheck) disabled = false
      this.setState({
        password: event.target.password,
        passwordCheck: '✔️',
        disabled: disabled
      })
    }
    else {
      this.setState({
        password: event.target.password,
        passwordCheck: '❌',
        disabled: true
      })
    }
  }

  changeUsername = (event) => {
    console.log(event.target.value)
    this.setState({
      username: event.target.value
    })
  }

  checkGithubUsername = (event) => {
    event.preventDefault()
    return fetch(`https://api.github.com/users/${this.state.username}`)
      .then((resBuffer) => resBuffer.json())
      .then((res) => {
        if (res.login && res.login.toLowerCase() === this.state.username.toLowerCase() && this.state.valid_students.includes(res.login)) {
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
    this.setState({ redirect: true })
  }



  render() {
    return (
      <div className="loginForm">
        <div >
          <form className='signinForm' onSubmit={this.submitForm}>
            <img alt="user avatar" src={this.state.user_image} style={{ height: '75px', backgroundColor: 'rgba(255, 255, 255, 0.233)', borderRadius: '50%' }} />
            <div className="form-group">
              <label for="githubUsername">Github username</label>
              <input type="username" className="form-control" placeholder="github username" value={this.state.username} onChange={this.changeUsername} onBlur={this.checkGithubUsername} />
              <small className="form-text text-muted">Github username</small>
            </div>
            <div className="form-group">
              <label for="inputPassword">Password</label>
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                <input type="password" className="form-control" id="inputPassword" placeholder="password" password={this.state.password} onChange={this.checkPassword} />
                <p>{this.state.passwordCheck}</p>
              </div>
              <small className="form-text text-muted">your password</small>
            </div>
            <button type="submit" className="btn btn-primary" disabled={this.state.disabled}>sign up</button>
          </form>
          {this.state.redirect && <Redirect to={`/signin`} />}
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