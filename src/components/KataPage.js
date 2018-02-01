import React from 'react';
import '../css/style.css';
import '../css/Kata.css';
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
        kataName: this.props.match.kata_name,
        hasClickedOnKata: false,
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


    componentDidMount() {
        this.fetchKataList();
    }

    render() {
console.log(this.state.katas)
        return (
            <div>
                <div className='KataPage'>

                    <div className='title'>
                        <h2>{`${this.props.match.params.username}'s Kata testing area`}</h2>
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
                                                    console.log(kata.title)
                                                    console.log(this.props.match)
                                                    if (this.state.katas.includes(kata.title)) {
                                                        let currentKata = '';
                                                        if (kata.title === this.props.match.params.kata_name) {
                                                            currentKata = 'kata-name'
                                                        }
                                                        return (
                                                            <div>
                                                                <Link to={`/users/${this.state.userName}/${kata.title}`} onClick={() => { this.setState({ hasClickedOnKata: true }) }}><div className={`kata enabled-kata ${currentKata}`}><p>{kata.title}</p></div></Link>
                                                                <Progress completed={75} />
                                                            </div>
                                                        )
                                                    } else {
                                                        return (

                                                            <div className="disabled-kata"><p key={i}>{kata.title}</p></div>

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

                    {!this.state.hasClickedOnKata && <Dashboard username={this.props.match.params.username} />}
                    {this.state.hasClickedOnKata && <Route path="/users/:username/:kata_name" component={KataData} />
                    }

                </div>
            </div>
        )

    }
}

export default KataPage;