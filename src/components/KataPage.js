import React from 'react';
import Particles from 'react-particles-js';
import pParams from '../particles/particles';
import '../css/style.css'
import '../css/Kata.css'
import CircularProgressbar from 'react-circular-progressbar';
import data from '../data/data'
class KataPage extends React.Component {

    state = {
        passes: data.stats.passes,
        fails: data.stats.failures
    }

    
    
    render() {
        console.log(this.state.passes, '*******', this.state.fails)

        return (
            
        <div className='KataPage'>
    
             <div className='title'>
                <h1>KataLyst</h1>
             </div>


             <div className='KataList'>
                 <h5>Your Katas</h5>
                 <ul>
                     <li>PigLatin</li>
                     <li>sumSonsecutives</li>
                 </ul>
             </div>

             <div className='results'>
             <h4>Daaaaaaata</h4>

                <div className='circleDiv'>
                    <CircularProgressbar percentage={this.state.fails ? 100 / this.state.fails : 0} 
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
                    <CircularProgressbar percentage={this.state.passes ? 100 / this.state.passes : 0} 
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
                    <CircularProgressbar percentage={80} 
                        strokeWidth={5}
                        Clockwise
                        initialAnimation={true}
                        strokeWidth={8}
                    />
                    <p>Percentage complete</p>
                </div>

             

             </div>



        
        </div>

        )
        
    }
}

export default KataPage;