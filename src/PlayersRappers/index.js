import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import './style.css';
import Players from "../Players";
import Rappers from "../Rappers";
import UpdatePlayer from "../UpdatePlayer";

export default class PlayersRappers extends Component {
    constructor(props) {
        super(props)

        this.state = {
        }
    }

    render() {
        return (
            <div className="players-rappers">
                <h1 className="player-rapper-header">Choose a Player and a Rapper for your Mixtape</h1>
                <Players
                player={this.props.player} players={this.props.players} onPickPlayer={this.props.onPickPlayer} onPlayerDelete={this.props.onPlayerDelete}
                />
                <Rappers
                rapper={this.props.rapper} rappers={this.props.rappers} onPickRapper={this.props.onPickRapper}
                />
                <Link to='/mixtape'><button type="button" className="add-player-rapper">Apply to Mixtape</button></Link>
            </div>
        )
    }
}