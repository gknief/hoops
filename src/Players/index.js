import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import AddPlayerForm from "../AddPlayerForm";
import Admin from "../Admin";
import PlayersRappers from "../PlayersRappers";
import './style.css';

export default class Players extends Component {
  constructor(props) {
    super(props)


  }


  render() {
    return (
      <div className="players-container">
        <h1 className="players-header">Choose a Player</h1>
        <select className="player-options" name="player" onChange={this.props.onPickPlayer}>
            {this.props.players.map(player => {
              return <option className="player-selection" key={player.id} value={player.name} onClick={this.props.onPickPlayer}>{player.name}</option>
            })}
          </select>
        </div>
    )
  }
}