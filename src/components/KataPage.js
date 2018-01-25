import React from 'react';
import Particles from 'react-particles-js';
import pParams from '../particles/particles';
import '../css/style.css'
import '../css/Kata.css'
import CircularProgressbar from 'react-circular-progressbar';
import data from '../data/data'
class KataPage extends React.Component {

    state = {
        tests: data.stats.tests,
        passes: data.stats.passes,
        fails: data.stats.failures
    }

    
    
    render() {
        console.log(data)

        return (
            
        <div className='KataPage'>

            <div class="topnav" id="myTopnav">
            <a href="#home" class="active"><i class="fa fa-home" aria-hidden="true"></i></a>
            <a href="#news">News</a>
            <a href="#contact">Contact</a>
            <a href="#about">About</a>
            <a href="javascript:void(0);" class="icon" onclick="myFunction()">&#9776;</a>
            </div>
                
             <div className='title'>
                <h2>KataLyst testing area</h2>
             </div>


             <div className='KataList'>
                 <h4>Your Katas</h4>
                 <ul>
                     <li>PigLatin</li>
                     <li>sumSonsecutives</li>
                 </ul>
             </div>

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
                            return percentage === 100 ? `Woo!!` : `${this.state.fails}`;
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
                            return percentage === 100 ? `Woo!!` : `${this.state.passes}`;
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

        )
        
    }
}

export default KataPage;