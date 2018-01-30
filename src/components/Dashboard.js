import React from 'react';
import '../css/OverallStyle.css';
import '../css/Kata.css';
import CircularProgressbar from 'react-circular-progressbar';
import moment from 'moment';
const _ = require('lodash');

class Dashboard extends React.Component {

    state = {
        availableKatas: [],
        usersKata: []
    }

    componentDidMount() {
        this.getAvailableKatas()
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

    render() {
        return (
            <div className="results">
                <h4>Kata overview</h4>


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




                <div className='dataBox'>
                    <p>...</p>
                </div>
            </div>
        )
    }

}

export default Dashboard;