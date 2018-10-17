import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import './style.css';
import Players from "../Players";
import Rappers from "../Rappers";

export default class Highlights extends Component {
    constructor(props) {
        super(props)

        this.state = {
            playerHighlights: '',
        }
    }




// searchByKeyword = () => {
//     const results = YouTube.Search.list('id,snippet', {q: `${this.props.favoritePlayer} mixtape`, maxResults: 25});
//     for(let i in results.items) {
//       const item = results.items[i];
//       Logger.log('[%s] Title: %s', item.id.videoId, item.snippet.title);
//     }
//   }

  render() {
    return (
        <div className="highlights">
            <h1 className="highlights-header"></h1>
        </div>
    )
}
}