import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import './style.css';
import Players from "../Players";
import Rappers from "../Rappers";
import MixtapeMaker from "../MixtapeMaker";


export default class Home extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
          player: '',
          rapper: ''
        }
      }
    render() {
      return (
        <div className="home-container">
          <img className="logo" src="../images/m.png" />
          <h1 className="home-header">Mixtape</h1>
          <h1>Home for the hip hop and the hoops community.</h1>
            <button className='get-started'><Link to='/PlayersRappers'>Get Started</Link></button>
            {/* <button className='players-button'><Link to='/players'>Players</Link></button>
            <button className='rappers-button'><Link to='/rappers'>Rappers</Link></button> */}
        </div>
      )
    }
  }
  