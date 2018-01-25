import React from 'react';
import Particles from 'react-particles-js';
import pParams from '../particles/particles';
import '/home/mtlj1991/Documents/Northcoders/project-phase/front-end/FE-Katagorize/src/css/style.css'
import CircularProgressbar from 'react-circular-progressbar';



class KataPage extends React.Component {

    state = {
        num: 0
      }
      
      numChange = () => {
        this.setState ({
          num: (this.state.num+10) % 101
        })
        console.log(this.state.num)
       }

    render() {

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
             <p>testetstetststetstes</p>
             <CircularProgressbar percentage={60} 
          
                strokeWidth={5}
                Clockwise
                initialAnimation={true}
                strokeWidth={8}
             />


            <CircularProgressbar percentage={this.state.num} 
          
                strokeWidth={5}
                Clockwise
                initialAnimation={true}
                strokeWidth={8}
                textForPercentage={(percentage) => {
                    return percentage === 100 ? `Woo!!` : `${this.state.num}`;
                }}
                classForPercentage={(percentage) => {
                    return percentage === 100 ? 'complete' : 'incomplete';
                }}
            />
          <button type="button" onClick={this.numChange}>Click Me!</button>
             </div>

        
        </div>

        )
        
    }
}

export default KataPage;