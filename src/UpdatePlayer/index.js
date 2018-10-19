import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import './style.css';
import Players from "../Players";
import Rappers from "../Rappers";
import Mixtape from "../Mixtape"
import PlayersRappers from "../PlayersRappers";
import AddRapperForm from "../AddRapperForm";
import youtubeSearch from "youtube-search";

const search = require('youtube-search');

export default class UpdatePlayer extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
    return (
    <div className="update-player-container">
     <form onSubmit={this.props.onPlayerUpdate}>
      <div className="update-player-form">
          <p className="update-player-form-paragraph">Name: <input type="text" name="playerName" onChange={this.props.onPlayerNameChange} value={this.props.playerName} /></p>
          <p className="update-player-form-paragraph">Image Source: <input type="text" name="playerImage" onChange={this.props.onPlayerImageChange} value={this.props.playerImage} /></p>
          <p className="update-player-form-paragraph">Video Source: <input type="text" name="playerVideo" onChange={this.props.onPlayerVideoChange} value={this.props.playerVideo} /></p>
          <p className="update-player-form-paragraph"><input type="submit" value="Update" /></p>
       </div>
      </form>
    </div>
    );
  }
}

