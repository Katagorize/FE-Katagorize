import React, { Component } from 'react'
import katas from '../data/katas'
import {BrowserRouter, Route, Switch, Link} from "react-router-dom";


class Katas extends Component {
  state = { 
    katas: katas

  }

  render() {
    return (
      <div>


        <div className='KataList'>
          <h4>All Katas</h4>

          
          {this.state.katas.map((week, key) => {
            let weekKey = Object.keys(week)[0];
            let kataList = week[weekKey].map((kata) => {
              return (
             <Link to={`/users/${this.props.username}/${kata.title}`}> <li>{kata.title}</li> </Link>
              )
              
            })
            return (
              <div>
              <ul>{weekKey}
              {kataList}    
              </ul>
              </div>
            )
          })}

        </div>

      </div>
    )
  }
}

export default Katas