import React from 'react';
import '../css/OverallStyle.css';
import '../css/Kata.css';
import CircularProgressbar from 'react-circular-progressbar';
import moment from 'moment';
const _ = require('lodash');

class Dashboard extends React.Component {

    state = {
        availableKatas: [],
        completedKatas: 0
    }

    componentDidMount() {
        this.getAvailableKatas();
        this.getUserKatas();
    }

    getAvailableKatas = () => {
        return fetch('http://localhost:3001/api/katas')
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
     return fetch(`http://localhost:3001/api/users`)
     .then((res) => res.json())
     .then((userKatas) => {
        const scores = Object.values(userKatas[this.props.username])
        const completedKatas = scores.reduce((acc, test) => {
            if (/score: 100/.test(test)) acc++
            return acc
        },0)
        this.setState({
            completedKatas
        })
     })
    }

    render() {
        return (
            <div className="results">
                <h4>Kata overview</h4>


                <div className='circleDiv'>
                    <CircularProgressbar percentage={100 / this.state.availableKatas.length * this.state.completedKatas}
                        strokeWidth={5}
                        Clockwise
                        initialAnimation={true}
                        strokeWidth={5}
                        textForPercentage={(percentage) => {
                            return percentage === 100 ? `Woo!!` : `${this.state.completedKatas} / ${this.state.availableKatas.length}`;
                        }}
                        classForPercentage={(percentage) => {
                            return percentage === 100 ? 'complete' : 'incomplete';
                        }}
                    />
                    <p>Tests Passed</p>
                </div>




                <div className='dataBox'>
                    <p>...</p>
                </div>
            </div>
        )
    }

}

export default Dashboard;