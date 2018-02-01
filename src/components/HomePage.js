import React from 'react';
import '../css/Home.css'
import SignIn from './SignIn';
import SignUp from './SignUp';

class HomePage extends React.Component {
    state = {
        showSignin: false,
        showSignUp: false,
        transparent: false
    }

    toggleSignIn = () => {
        this.setState({
            showSignin: !this.state.showSignin,
            transparent: !this.state.transparent
        });
    }

    toggleSignUp = () => {
        this.setState({
            showSignUp: !this.state.showSignUp,
            transparent: !this.state.transparent
        });
    }

    successfulSignUp = () => {
        this.setState({
            showSignUp: false,
            showSignin: true,
            transparent: !this.state.transparent
        })
    }

    render() {
        let isVisable = ''
        this.state.transparent ? isVisable='none': null;
        return (
            <div className="home">
                <div className="info">
            {this.state.showSignUp ? <SignUp closePopup={this.toggleSignUp.bind(this)} successfulSignUp={this.successfulSignUp.bind(this)} /> : null}
                    {this.state.showSignin ? <SignIn closePopup={this.toggleSignIn.bind(this)} /> : null}
                    <p className="info-text" style={{display: isVisable}}>How it works</p>
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
                    <div className="signin" style={{display: isVisable}}>
                        <button onClick={this.toggleSignIn.bind(this)} >Sign in</button>
                    </div>
                    <div className="signup" style={{display: isVisable}}>
                        <button onClick={this.toggleSignUp.bind(this)}>Sign up</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default HomePage;