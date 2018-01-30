import React from 'react';
import '../css/style.css';
import '../css/KataData.css';
import CircularProgressbar from 'react-circular-progressbar';


class KataData extends React.Component {
    
    state = {
        tests: 0,
        passes: 0,
        fails: 0
    }
    
    getAllData = () => {
        fetch(`http://localhost:3001/api/users/${this.props.match.params.username}/katas/${this.props.match.params.kata_name}/test`)
        .then((data) => {
            return data.json()
        })
        .then((data) => {
           return this.setState({
                tests: data.stats.tests,
                passes: data.stats.passes,
                fails: data.stats.failures,
                passMessages: data.passes,
                failureMessage: data.failures
            })
        })
    }
    
    
    componentWillMount() {
        this.getAllData()
    }    
    
    render() {
    
{console.log(this.state)}
        return (
            <div className="results">
                <h4>Kata data</h4>

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
                    <p>Tests failed</p>
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

export default KataData;