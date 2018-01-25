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
    
             <div className='title'>
                <h1>KataLyst</h1>
             </div>


             <div className='KataList'>
                 <h4>Your Katas</h4>
                 <ul>
                     <li>PigLatin</li>
                     <li>sumSonsecutives</li>
                 </ul>
             </div>

             <div className='results'>
             <h4>Daaaaaaata</h4>

                <div className='circleDiv'>
                    <CircularProgressbar percentage={100 / this.state.tests * this.state.fails} 
                        strokeWidth={5}
                        Clockwise
                        initialAnimation={true}
                        strokeWidth={8}
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
                        strokeWidth={8}
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
                        strokeWidth={8}
                    />
                    <p>Percentage complete</p>
                </div>

                <div className='dataBox'>
                        {data.failures.map((element) => {
                            return (
                            <div className='testData'>
                            <h6>{element.title}</h6>
                            <div className='fails'>
                            <i class="fa fa-times-circle" aria-hidden="true"></i><p>...{element.err.message}</p>
                            </div>
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