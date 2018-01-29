import React, { Component } from 'react'
import katas from '../data/katas'


class Katas extends Component {
  state = { 
    katas,

  }

  render() {
    return (
      <div>


        <div className='KataList'>
          <h4>All Katas</h4>
          <ul>


          </ul>
        </div>

      </div>
    )
  }
}

export default Katas