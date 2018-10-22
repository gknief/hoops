import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import './style.css';
import Players from "../Players";
import Rappers from "../Rappers";
import PlayersRappers from "../PlayersRappers";
import AddPlayerForm from "../AddPlayerForm";
import AddRapperForm from "../AddRapperForm";
import Admin from "../Admin";


export default class Mixtape extends Component {
    constructor(props) {
        super(props)
    
      }

      componentDidMount = () => {
          console.log(this.props.player)
        
      }

    render() {
      return (
        <div className="Mixtape">
          <h1 className="mixtape-header">{this.props.playerName} | {this.props.rapperName}</h1>
          <div className="iframe-container">
          <iframe width="560" height="315" src={`https://www.youtube.com/embed/${this.props.player.video_url}&amp;autoplay=1&amp;mute=1`} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
          </div>
          <iframe width="0" height="0" src={`https://www.youtube.com/embed/${this.props.rapper.video_url}&amp;autohide=1&amp;autoplay=1&amp;mute=0`} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe> 
        </div>
      )
    }
  }