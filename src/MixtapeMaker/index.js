import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import './style.css';
import Players from "../Players";
import Rappers from "../Rappers";
import youtubeSearch from "youtube-search";

const search = require('youtube-search');

export default class MixtapeMaker extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
          playerQuery: '',
          rapperQuery: ''
        }
      }

      componentDidMount = () => {
          this.setState({
              playerQuery: this.props.favoritePlayer,
              rapperQuery: this.props.favoriteRapper
          });
      }
      
    render() {
        const API_KEY = 'AIzaSyC-ocaepWDYQl0M1Byxgz0MZ6nxtOmmQSw';
        // const opts = {
        //     maxResults: 10,
        //     key: 'AIzaSyC-ocaepWDYQl0M1Byxgz0MZ6nxtOmmQSw'
        // };

      return (
        <div className="mixtape-maker">
          <h1 className="mixtape-header">Mixtape</h1>
          <h1>Give your mixtape some heat</h1>
            <Players favoritePlayer={this.props.favoritePlayer} />
            <button className='rappers-button'><Link to='/rappers'>{this.props.favoriteRapper} Tracks</Link></button>
        </div>
      )
    }
  }

  // Reference: https://medium.com/@nabendu82/create-youtube-player-in-reactjs-part-1-3b949de9b251