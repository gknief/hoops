import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import './style.css';
import Players from "../Players";
import Rappers from "../Rappers";

export default class Tracks extends Component {
    constructor(props) {
        super(props)

        this.state = {
            rapperTracks: '',
        }
    }

searchByKeyword = () => {
    const results = YouTube.Search.list('id,snippet', {q: `${this.props.favoriteRapper} songs`, maxResults: 25});
    for(let i in results.items) {
      const item = results.items[i];
      Logger.log('[%s] Title: %s', item.id.videoId, item.snippet.title);
    }
  }

  render() {
    return (
        <div className="tracks">
            <h1 className="tracks-header"></h1>
        </div>
    )
}
}