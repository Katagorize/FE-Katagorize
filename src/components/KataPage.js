import React from 'react';
import Particles from 'react-particles-js';
import pParams from '../particles/particles';
import '/home/mtlj1991/Documents/Northcoders/project-phase/front-end/FE-Katagorize/src/css/style.css'
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

            <div className='circles'>
             <CircularProgressbar percentage={100 / this.state.fails} 
                strokeWidth={5}
                Clockwise
                initialAnimation={true}
                strokeWidth={8}
                textForPercentage={(percentage) => {
                    return percentage === 100 ? `Woo!!` : `${this.state.fails}`;
                }}
             />
             <p>Tests failed</p>


            <CircularProgressbar percentage={100 / this.state.passes} 
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



             <CircularProgressbar percentage={60} 
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