import React from 'react';
import '../css/Home.css'
import SignIn from './SignIn';
import SignUp from './SignUp';

class HomePage extends React.Component {
    state = {
        showSignin: false,
        showSignUp: false
    }

    toggleSignIn = () => {
        this.setState({
            showSignin: !this.state.showSignin,
          });
    }

    toggleSignUp = () => {
        this.setState({
            showSignUp: !this.state.showSignUp,
          });
    }

    successfulSignUp = () => {
        this.setState({
            showSignUp: false,
            showSignin: true
        })
    }

    render() {
        return (
            <div className="home">
            <div className="info" >
            {this.state.showSignUp ? <SignUp closePopup={this.toggleSignUp.bind(this)} successfulSignUp={this.successfulSignUp.bind(this)}/> : null}
            {this.state.showSignin ? <SignIn closePopup={this.toggleSignIn.bind(this)}/> : null}
                    <p className="info-text">How it works</p>
                    <div className="first">
                    <div className="icon">
                    <i class="fas fa-code-branch"></i>
                    </div>
                    <p>Fork the morning katas repo. New katas will be released every morning!</p>
                    </div>
                    <div className="second">
                    <div className="icon">
                    <i class="fab fa-github"></i>
                    </div>
                    <p>Attempt your kata and push it to GitHub.</p>
                    </div>
                    <div className="third">
                    <div className="icon">
                    <i class="fas fa-code"></i>
                    </div>
                    <p>Login to Katalyst and test your function.</p>
                    </div>
                    <div className="fourth">
                    <div className="icon">
                    <i class="fas fa-chart-line"></i>
                    </div>
                    <p>Track your progress daily!</p>
                    </div>
                    <div className="signin">
                    <button onClick={this.toggleSignIn.bind(this)}>Sign in</button>
                    </div>
                    <div className="signup">
                    <button onClick={this.toggleSignUp}>Sign up</button>
                    </div>
              </div>
            </div> 
        )
    }
}
export default HomePage;