import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import './style.css';
import Players from "../Players";
import Rappers from "../Rappers";
import PlayersRappers from "../PlayersRappers";
import Highlights from "../Highlights";
import Tracks from "../Tracks";
import youtubeSearch from "youtube-search";

const search = require('youtube-search');

export default class MixtapeMaker extends Component {
    constructor(props) {
        super(props)
    
      }

      componentDidMount = () => {
          console.log(this.props.player)
        
      }

    render() {
      // const API_KEY = 'AIzaSyC-ocaepWDYQl0M1Byxgz0MZ6nxtOmmQSw';

      return (
        <div className="mixtape-maker">
          <h1 className="mixtape-header">Mixtape</h1>
          <iframe width="560" height="315" src={`https://www.youtube.com/embed/${this.props.player.video_url}&amp;autoplay=1&amp;mute=1`} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
          <iframe width="0" height="0" src={`https://www.youtube.com/embed/${this.props.rapper.video_url}&amp;autoplay=1&amp;mute=0`} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
          {/* <h1>Make your own mixtape</h1>
            <Highlights />
            <Tracks />
            <Link to='/mixtape'><button className='generate-mixtape'>Generate Mixtape</button></Link> */}
        </div>
      )
    }
  }

  // Reference: https://medium.com/@nabendu82/create-youtube-player-in-reactjs-part-1-3b949de9b251