import React from 'react';
// import Particles from 'react-particles-js';
// import pParams from '../particles/particles';
import '../css/style.css'
import '../css/Kata.css'
import CircularProgressbar from 'react-circular-progressbar';
import data from '../data/data'
import KataData from './KataData'

class KataPage extends React.Component {

    state = {
        katas: []
    }



    render() {
        console.log(data)

        return (
            <div>

                <div className='KataPage'>

                    <div class="topnav" id="myTopnav">
                        <a href="/"><i class="fa fa-home" aria-hidden="true"></i></a>
                        <a href="/kata" class="active">Katas</a>
                        <a href="#contact">Contact</a>
                        <a href="#about">About</a>
                        <a href="javascript:void(0);" class="icon" onclick="myFunction()">&#9776;</a>
                    </div>

                    <div className='title'>
                        <h2>KataLyst testing area</h2>
                    </div>


                    <div className='KataList'>
                        
                    </div>
                    <KataData />
                   
                </div>
            </div>
        )

    }
}

export default KataPage;