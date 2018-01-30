import React from 'react';
import '../css/OverallStyle.css';
import '../css/Kata.css';
import CircularProgressbar from 'react-circular-progressbar';
const _ = require('lodash');

class OverallData extends React.Component {

    state = {
        latestTest: '',
        latestTestScore: 0,
        numberOfKatas: 0
    }

    getUsersData = () => {
        return fetch('http://localhost:3001/api/users/')
        .then((data) => {
            return data.json()
        })
        .then((data) => {

        })
    }

    render() {

        return (
            <div className="results">
                <h4>Kata overview</h4>

                <div className='circleDiv'>
                    <CircularProgressbar percentage={10}
                        className="CircularProgressbar-inverted"
                        strokeWidth={5}
                        Clockwise
                        initialAnimation={true}
                        strokeWidth={4}
                        textForPercentage={(percentage) => {
                            return percentage === 100 ? `Woo!!` : `${this.state.fails} / ${this.state.tests}`;
                        }}
                    />
                    <p>Las</p>
                </div>

                <div className='circleDiv'>
                    <CircularProgressbar percentage={100 / this.state.tests * this.state.passes}
                        strokeWidth={5}
                        Clockwise
                        initialAnimation={true}
                        strokeWidth={5}
                        textForPercentage={(percentage) => {
                            return percentage === 100 ? `Woo!!` : `${this.state.passes} / ${this.state.tests}`;
                        }}
                        classForPercentage={(percentage) => {
                            return percentage === 100 ? 'complete' : 'incomplete';
                        }}
                    />
                    <p>Tests Passed</p>
                </div>


                <div className='circleDiv'>
                    <CircularProgressbar percentage={100 / this.state.tests * this.state.passes}
                        strokeWidth={5}
                        Clockwise
                        initialAnimation={true}
                        strokeWidth={5}
                    />
                    <p>Percentage complete</p>
                </div>

                <div className='dataBox'>
                    <p>...</p> 
                </div>
            </div>
        )
    }

}

export default OverallData;