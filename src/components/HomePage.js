import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Home.css'
import Banner from './Banner';

class HomePage extends React.Component {
    render() {
        return (
            <div className="home">
              <Banner/>
              <div className="info">
                    <p className="info-text">How it works</p>
                    <div className="first">
                    <div className="icon">
                    <i class="fas fa-code-branch"></i>
                    </div>
                    <p>Fork the morning katas repos. New katas will be released every morning!</p>
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
                    <Link to='/signin' className="signin"> Sign in </Link>
                    <Link to='/signup' className="signup"> Sign Up </Link>
              </div>
            </div> 
        )
    }
}
export default HomePage;