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
    
        this.state = {
          playerQuery: '',
          rapperQuery: ''
        }
      }

      componentDidMount = () => {
          this.setState({
              playerQuery: `${this.props.favoritePlayer} mixtape`,
              rapperQuery: `${this.props.favoriteRapper} songs`
          });
      }

    searchByKeyword = () => {
        const results = YouTube.Search.list('id,snippet', {q: `${this.props.favoritePlayer} mixtape`, maxResults: 25});
        for(let i in results.items) {
          const item = results.items[i];
          Logger.log('[%s] Title: %s', item.id.videoId, item.snippet.title);
        }
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
            <Highlights />
            <Tracks />
            <Link to='/mixtape'><button className='generate-mixtape'>Generate Mixtape</button></Link>
        </div>
      )
    }
  }

  // Reference: https://medium.com/@nabendu82/create-youtube-player-in-reactjs-part-1-3b949de9b251