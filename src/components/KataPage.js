import React from 'react';
import '../css/style.css';
// import '../css/Kata.css';
import KataData from './KataData';
import Dashboard from './Dashboard';
import { Route, Link } from "react-router-dom";
import allKatas from '../data/allKatas'
import {
    Accordion,
    AccordionItem,
    AccordionItemTitle,
    AccordionItemBody,
} from 'react-accessible-accordion';
import '../css/KataList.css';
import Progress from 'react-progressbar';

class KataPage extends React.Component {


    state = {
        katas: [],
        allKatas: allKatas,
        userName: this.props.match.params.username,
        kataName: this.props.match,
        hasClickedOnKata: false,
        progress: {}

    }

    fetchKataList() {
        return fetch(`http://katalystpro-env.eu-west-2.elasticbeanstalk.com/api/users/${this.props.match.params.username}`)
            .then((katas) => {
                return katas.json()
            })
            .then((katas) => {
                return katas.katas.map(kata => {
                    return kata.name
                })
            }).then(kataNames => {
                this.setState({
                    katas: kataNames
                })
            })
    }

    fetchProgress = () => {
        return fetch(`http://katalystpro-env.eu-west-2.elasticbeanstalk.com/api/users`)
            .then((res) => res.json())
            .then((userKatas) => {
                let kataScores = {}
                for (let key in userKatas[this.props.match.params.username]) {
                    let score = userKatas[this.props.match.params.username][key].reverse()[0].split(' ').reverse()[0]
                    if(+score === 0) {
                        kataScores[key] = 2
                    } else {

                        kataScores[key] = +score
                    }
                }
                this.setState({
                    progress: kataScores
                })
            })
    }

    componentDidMount() {
        this.fetchKataList();
        this.fetchProgress()
    }

    render() {

        return (
            <div>
                <div className='KataPage'>

                    <div className='title'>
                        {/* <h2>{`${this.props.match.params.username}'s Kata testing area`}</h2> */}
                    </div>
                    <div className='KataList'>
                        <Accordion activeItems={[0]}>
                            {this.state.allKatas.map((katasByWeek, i) => {
                                return (
                                    <AccordionItem>
                                        <AccordionItemTitle>
                                            <div key={i}><p>Week {i + 1}</p></div>
                                        </AccordionItemTitle>
                                        <AccordionItemBody>
                                            <div>
                                                {katasByWeek.map((kata, i) => {

                                                    if (this.state.katas.includes(kata.title)) {

                                                        return (
                                                            <div>
                                                                <div className="kata enabled-kata">
                                                                    <Link to={`/users/${this.state.userName}/${kata.title}`} onClick={() => { this.setState({ hasClickedOnKata: true }) }}>
                                                                        <p>{kata.title}</p>
                                                                    </Link>
                                                                </div>

                                                                 
                                                                <div className='progress-div'>

                                                                    <div className="progress-left" style={{ width: `${this.state.progress[kata.title]}%` }}>
                                                                    </div>

                                                                    <div className="progress-right" style={{ width: `${100 - this.state.progress[kata.title]}%` }}>
                                                                    </div >

                                                                </div>
                                                                
                                                                 

                                                            </div>


                                                        )
                                                    } else {
                                                        return (
                                                            <div>
                                                            <div className="disabled-kata"><p key={i}>{kata.title}</p>
                                                            </div>

                                                                <div className='progress-div'>

                                                                    <div className="progress-left" style={{ width: "2%" , backgroundColor: 'rgba(199, 181, 16, 0.609)'}}>
                                                                    </div>

                                                                    <div className="progress-right" style={{ width:'98%' }}>
                                                                    </div >
                                                                </div>
                                                            </div>

                                                        )
                                                    }
                                                })}
                                            </div>
                                        </AccordionItemBody>
                                    </AccordionItem>
                                )
                            })}
                        </Accordion>
                    </div>

                    <Route exact path="/users/:username" render={(p) =>  <Dashboard {...p} username={this.props.match.params.username}/>} />
                    <Route exact path="/users/:username/:kata_name" component={KataData} />

                </div>
            </div>
        )

    }
}

export default KataPage;