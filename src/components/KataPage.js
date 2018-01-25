import React from 'react';
import Particles from 'react-particles-js';
import pParams from '../particles/particles';


class KataPage extends React.Component {

    state = {
        username: '',
        password: ''
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
             </div>

        
        </div>

        )
        
    }
}

export default KataPage;