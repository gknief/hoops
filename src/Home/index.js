import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import './style.css';
import Players from "../Players";
import Rappers from "../Rappers";
import PlayersRappers from "../PlayersRappers"

export default class Home extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
          
        }
      }
    render() {
      return (
        <div className="home-container">
          <img className="logo" src="../images/logo.png" />
          <h1 className="home-header">Mixtape</h1>
          <h2 className="slogan">Your favorite ballers paired with your favorite beats.</h2>
          <div className="mission-statement-container">
          <article className="mission-statement">I have always loved listening to hip-hop music and watching highlights of my favorite basketball players. But I wanted to be able to do both at the same time without YouTube pausing my music. With Mixtape, you can watch highlights of any player while listening to any song you want.</article>
          <h3> - Grant Knief, founder of Mixtape</h3>
          </div>
          <Link to='/PlayersRappers'><button className='get-started'>GET STARTED</button></Link>
            {/* <button className='players-button'><Link to='/players'>Players</Link></button>
            <button className='rappers-button'><Link to='/rappers'>Rappers</Link></button> */}
        <iframe width="0" height="0" src={`https://www.youtube.com/embed/Lv07rGgIOMc?rel=0&amp;controls=0&amp;showinfo=0&amp;autoplay=1&amp;mute=0`} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

        </div>
      )
    }
  }
  