import React, { Component } from 'react'
import katas from '../data/katas'


class Katas extends Component {
  state = { 
    katas: katas

  }

  render() {
    return (
      <div>


        <div className='KataList'>
          <h4>All Katas</h4>
          <ul>
          {this.state.katas.map((kata, key) => {
            return (
            <li key={key}>{kata.title}</li>
            )
          })}
          </ul>
        </div>

      </div>
    )
  }
}

export default Katas