import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import AddPlayerForm from "../AddPlayerForm";
import UpdatePlayer from "../UpdatePlayer";
import PlayersRappers from "../PlayersRappers";
import './style.css';

export default class Players extends Component {
  constructor(props) {
    super(props)


  }


  render() {
    return (
      <div className="players-container">
        <h1 className="players-header">Players</h1>
        <h2>Which player do you want on your mixtape?</h2>
        <select name="player" onChange={this.props.onPickPlayer}>
          {this.props.players.map(player => {
            return <option key={player.id} value={player.name}>{player.name}</option>
          })}
        </select>
        <p className="delete-player-paragraph"><input type="submit" value="Delete Player" onClick={this.props.onPlayerDelete} /></p>
        <Link to='/UpdatePlayer'><button type="button" className="update-delete">Edit Player</button></Link>
      </div>
    )
  }
}