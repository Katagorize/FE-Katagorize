import React, { Component } from 'react';
import data from '../data/data'
import CircularProgressbar from 'react-circular-progressbar';
import '../css/style.css'
class KataInfo extends Component {

  state = {
    function: '',
    testsPassed: '',
    teastFailed: ''
  }

  render() {

    return (

      <div>
      <div>
        <h4>Feedback for kata: {this.props.match.params.kataname}</h4>
      </div>



<div className='KataPage'>

<div className='results'>
    <h4>Kata data</h4>

    <div className='circleDiv'>
        <CircularProgressbar percentage={100 / this.state.tests * this.state.fails}
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
        {data.failures.map((element) => {
            return (
                <div className='testData'>
                    <i class="fa fa-times-circle" aria-hidden="true"></i><p>{element.title}</p>
                </div>
            )
        })}


    </div>


</div>
</div>
</div>

      )
  }
}

export default KataInfo;