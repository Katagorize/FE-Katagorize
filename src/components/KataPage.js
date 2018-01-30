import React from 'react';
// import Particles from 'react-particles-js';
// import pParams from '../particles/particles';
import '../css/style.css'
import '../css/Kata.css'
import CircularProgressbar from 'react-circular-progressbar';
import data from '../data/data'
import KataData from './KataData'
import { BrowserRouter, Route, Switch, NavLink, Link } from "react-router-dom";


class KataPage extends React.Component {

    state = {
        katas: []
    }

    fetchKataList () {
        return fetch(`http://localhost:3001/api/users/${this.props.match.params.username}`)
        .then((katas) => {
           return katas.json()
        })
        .then((katas) => {
            this.setState({
                katas: katas
            })
        })
    }

componentDidMount() {
     this.fetchKataList();
}

    render() {
        console.log(this.state.katas)
        return (
            <div>

                <div className='KataPage'>

                    {/* <div className="topnav" id="myTopnav">
                        <a href="/"><i className="fa fa-home" aria-hidden="true"></i></a>
                        <a href="/kata" className="active">Katas</a>
                        <a href="#contact">Contact</a>
                        <a href="#about">About</a>
                        <a href="javascript:void(0);" className="icon" onClick="myFunction()">&#9776;</a>
                    </div> */}

                    <div className='title'>
                        <h2>KataLyst testing area</h2>

                    </div>


                    <div className='KataList'>
                    {this.state.katas.map((kata) => {
                       return (

                        <li><Link to='/api/users/:user_name/katas/:kata_name/test'>{kata.kata_name}</Link></li>
                        
                       )
                        })}
                    </div>
                    <KataData />
                   
                </div>
            </div>
        )

    }
}

export default KataPage;