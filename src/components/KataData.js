import React from 'react';
import '../css/style.css';
import '../css/KataData.css';
import CircularProgressbar from 'react-circular-progressbar';


class KataData extends React.Component {
    
    state = {
        tests: 0,
        passes: 0,
        fails: 0,
        passMessages: [],
        failureMessage: []
    }
    
    getAllData = (newProps) => {

        let username = this.props.match.params.username;
        let kataname = this.props.match.params.kata_name;

        if (newProps) {
            
            username = newProps.match.params.username
            kataname = newProps.match.params.kata_name
        }
        
        return fetch(`http://localhost:3001/api/users/${username}/katas/${kataname}/test`)
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
    
    
    componentDidMount() {
        this.getAllData()
    } 
    
    componentWillReceiveProps(newProps) {
        this.getAllData()
    }
    
    render() {
      console.log(this.state.fails, this.state.passes)
        return (
            <div className="results">
                <h4>Kata data</h4>

                <div className='circleDiv'>
                    <CircularProgressbar  
                        percentage={10}
                        className="CircularProgressbar-inverted"
                        strokeWidth={5}
                        Clockwise
                        initialAnimation={true}
                        textForPercentage={(percentage) => {
                            return percentage === 100 ? `Woo!!` : `${this.state.fails} / ${this.state.tests}`;
                        }}
                    />
                    <p>Tests failed</p>
                </div>

                <div className='circleDiv'>
                    <CircularProgressbar  
                        percentage={100 / this.state.tests * this.state.passes}
                        strokeWidth={5}
                        Clockwise
                        initialAnimation={true}
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
                    <CircularProgressbar
                        percentage={100 / this.state.tests * this.state.passes}
                        strokeWidth={5}
                        Clockwise
                        initialAnimation={true}
                    />
                    <p>Percentage complete</p>
                </div>

                <div className='failBox'>
                    {this.state.failureMessage.map((fails) => {
                        return (
                        <span><i className="fa fa-times-circle fa-lg" aria-hidden="true"></i><p>{fails.title}</p></span>
                        )
                    })}
                </div>

                <div className='passBox'>
                    {this.state.passMessages.map((passes) => {
                        return (
                        <span><i className="fa fa-check fa-lg" aria-hidden="true"></i><p>{passes.title}</p></span>
                        )
                    })}
                </div>
            </div>
        )
    }

}

export default KataData;