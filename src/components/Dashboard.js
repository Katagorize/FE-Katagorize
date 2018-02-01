import React from 'react';
// import '../css/OverallStyle.css';
// import '../css/Kata.css';
import '../css/Dashboard.css'
import CircularProgressbar from 'react-circular-progressbar';
import moment from 'moment';
import { Link, Route } from "react-router-dom";

class Dashboard extends React.Component {

    state = {
        availableKatas: [],
        completedKatas: 0,
        incompleteKatas: [],
        profilePic: ''
    }

    componentDidMount() {
        this.getAvailableKatas();
        this.getUserKatas();
        this.getProfilePic()
    }

    getProfilePic = () => {
        return fetch(`https://api.github.com/users/${this.props.username}`)
        .then((resBuffer) => resBuffer.json())
        .then((res) => {
            this.setState({
              profilePic: res.avatar_url
            })
        })
        .catch(console.log)

    }
    getAvailableKatas = () => {
        return fetch('http://katalystpro-env.eu-west-2.elasticbeanstalk.com/api/katas')
            .then((res) => res.json())
            .then((katas) => {
                let availableKatas = katas.filter((kata) => {
                    return moment(kata.release_date).isBefore(moment().format())
                })
                this.setState({
                    availableKatas
                })
            })
    }

    getUserKatas = () => {
        return fetch(`http://katalystpro-env.eu-west-2.elasticbeanstalk.com/api/users`)
            .then((res) => res.json())
            .then((userKatas) => {
                const scores = Object.values(userKatas[this.props.username])
                const kataNames = Object.keys(userKatas[this.props.username])
                let incompleteKatas = [];
                const completedKatas = scores.reduce((acc, test) => {
                    if (/score: 100/.test(test)) acc++
                    return acc
                }, 0)
                this.setState({
                    completedKatas
                })
                for (let i = 0; i < scores.length; i++) {
                    for (let j = scores[i].length - 1; j < scores[i].length; j++) {
                        if (!/score: 100/.test(scores[i][j])) {
                            incompleteKatas.push(kataNames[i])
                        }
                    }
                }
                this.setState({
                    incompleteKatas
                })
            })
    }

    render() {
        return (
            <div className="results">
                <div className="dashboard">
                <div className="header">
                <div className="profilepic">
                    <img src={this.state.profilePic} alt="profilepic" />
                </div>
                    <div className="greeting">
                        <h3>Good afternoon {this.props.username}</h3>
                        <p style={{width: '500px'}}>Welcome to your KataLyst dashboard. Here you can see an overview of your kata progess. On left is a list of katas, select a kata to run our tests.</p>
                    </div>
                </div>

                    <div className='katainfo'>
                    <h3>Overall Score</h3>
                        <CircularProgressbar
                            percentage={100 / this.state.availableKatas.length * this.state.completedKatas}
                            strokeWidth={5}
                            Clockwise
                            initialAnimation={true}
                            textForPercentage={(percentage) => {
                                return percentage === 100 ? `Woo!!` : `${this.state.completedKatas} / ${this.state.availableKatas.length}`;
                            }}
                            classForPercentage={(percentage) => {
                                return percentage === 100 ? 'complete' : 'incomplete';
                            }}
                        />
                        <p>Your katas which pass our tests</p>
                    </div>
                    <div className='todo'>
                        <h3>Todo</h3>
                        <ul>
                            {this.state.incompleteKatas.map((kata) => <li><Link to={`/users/${this.props.username}/${kata}`}>{kata}</Link> 
                            </li>)}
                        </ul>
                    </div>
                </div>

            </div>
        )
    }

}

export default Dashboard;