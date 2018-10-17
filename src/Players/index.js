import React, { Component } from 'react';
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
      </div>
    )
  }
}