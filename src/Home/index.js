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
        <iframe width="0" height="0" src={`https://www.youtube.com/embed/Lv07rGgIOMc?rel=0&amp;controls=0&amp;showinfo=0&amp;autoplay=1&amp;mute=0`} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

        </div>
      )
    }
  }
  