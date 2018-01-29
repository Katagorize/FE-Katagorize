import React, { Component } from 'react';
import data from '../data/data'
class KataInfo extends Component {

  state = {
    function: '',
    testsPassed: '',
    teastFailed: ''
  }

  render() {
    return (
      <div>
        <h4>Feedback for kata: {this.props.match.params.kataname}</h4>
      </div>
    )
  }
}

export default KataInfo;