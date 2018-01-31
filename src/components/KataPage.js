import React from 'react';
import '../css/style.css';
import '../css/Kata.css';
import KataData from './KataData';
import Dashboard from './Dashboard';
import { Route, Link } from "react-router-dom";


class KataPage extends React.Component {

    state = {
        katas: [],
        userName: this.props.match.params.username,
        kataName: this.props.match.kata_name,
        hasClickedOnKata: false
    }

    fetchKataList () {
        return fetch(`http://katalystpro-env.eu-west-2.elasticbeanstalk.com/api/users/${this.props.match.params.username}`)
        .then((katas) => {
           return katas.json()
        })
        .then((katas) => {
            
            this.setState({
                katas: katas.katas
            })
        })
    }


componentDidMount() {
     this.fetchKataList();
}

    render() {
        
        return (
            <div>

                <div className='KataPage'>

                    <div className='title'>
                        <h2>{`${this.props.match.params.username}'s Kata testing area`}</h2>

                    </div>


                    <div className='KataList'>

                    <h3>Completed Katas</h3>
                    {this.state.katas.map((kata) => {
                        
                       return (

                        <li><Link to={`/users/${this.state.userName}/${kata.name}`} onClick={() => {this.setState({hasClickedOnKata: true})}}>{kata.name}</Link></li>
                        
                       )
                        })}
                    </div>
               
                    {!this.state.hasClickedOnKata &&  <Dashboard username={this.props.match.params.username}/>}
                    {this.state.hasClickedOnKata &&   <Route path="/users/:username/:kata_name" component={KataData}/>
}

                   
                </div>
            </div>
        )

    }
}

export default KataPage;