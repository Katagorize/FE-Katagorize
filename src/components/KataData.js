import React from 'react';
import '../css/style.css';
import '../css/KataData.css';
import CircularProgressbar from 'react-circular-progressbar';
import { Line } from 'react-chartjs-2';



class KataData extends React.Component {

    state = {
        tests: 0,
        passes: 0,
        fails: 0,
        passMessages: [],
        failureMessage: [],
        scores: []

    }

    getAllData = (newProps) => {

        let username = this.props.match.params.username;
        let kataname = this.props.match.params.kata_name;

        if (newProps) {

            username = newProps.match.params.username
            kataname = newProps.match.params.kata_name
        }

        return fetch(`http://katalystpro-env.eu-west-2.elasticbeanstalk.com/api/users/${username}/katas/${kataname}/test`)

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
        this.getUserScores()
            .then(() => {
                this.getAllData()
            })
    }


    componentWillReceiveProps(newProps) {
        this.getUserScores(newProps)

            .then(() => {
                this.getAllData();
            })
    }

    getUserScores = (props) => {
        let username = this.props.match.params.username;
        let kataname = this.props.match.params.kata_name;

        if (props) {

            username = props.match.params.username
            kataname = props.match.params.kata_name
        }


        return fetch(`http://katalystpro-env.eu-west-2.elasticbeanstalk.com/api/users`)
            .then((res) => res.json())
            .then((userKatas) => {
                return userKatas[username][kataname].map((score) => {
                    return Number(score.match(/(\d+)(?!.*\d)/)[0])
                })
            })
            .then((scores) => {
                return this.setState({ scores })
            })
    }
    removeDuplicates = (arr) => {
        const filteredArr = []
        for (let i = 0; i < arr.length; i++) {
            if (i === 0) filteredArr.push(arr[i])
            else if (arr[i] !== arr[i - 1]) filteredArr.push(arr[i])
        }
        return filteredArr
    }


    render() {
        let kataname = this.props.match.params.kata_name;
        const data = {
            labels: this.removeDuplicates(this.state.scores),
            datasets: [
                {
                    label: 'Test score',
                    fill: true,
                    lineTension: 0.1,
                    borderColor: '#C31433',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'round',
                    pointBorderColor: '#C31433',
                    pointBackgroundColor: '#395E66',
                    pointBorderWidth: 3,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: '#C31433',
                    pointHoverBorderColor: '#C31433',
                    pointHoverBorderWidth: 3,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: this.removeDuplicates(this.state.scores)
                }
            ]
        }
        return (
            <div className="results">
                <div className='resultsTitle'>
          
                    <h4 className='testTitle'>{kataname} test data</h4>

                </div>

                <div className='circleDivA'>
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


                <div className='circleDivB'>
                    <CircularProgressbar
                        percentage={Math.ceil(100 / this.state.tests * this.state.passes)}
                        strokeWidth={5}
                        Clockwise
                        initialAnimation={true}
                    />
                    <p>Percentage complete</p>
                </div>

                <div className='graph'>

                    <Line data={data}
                        height={300}
                        width={300} />
                    <p>This graph shows the highs and lows of your scores, you should be aiming high. The straighter the line, the more consistent you are with your code. </p>
                </div>

                <div className='failBox'>
                    <h6>Here are the tests that you have failed.</h6>

                    {this.state.failureMessage.map((fails) => {
                        return (
                            <div className='BoxContent'><i className="fa fa-times-circle fa-lg failed" aria-hidden="true"></i><p>{fails.title}</p></div>
                        )
                    })}
                </div>

                <div className='passBox'>

                    <h6>Here are the tests that you have passed.</h6>


                    {this.state.passMessages.map((passes) => {
                        return (
                            <div className='BoxContent'><i className="fa fa-check fa-lg passed" aria-hidden="true"></i><p>{passes.title}</p></div>
                        )
                    })}
                </div>
            </div>
        )
    }

}

export default KataData;