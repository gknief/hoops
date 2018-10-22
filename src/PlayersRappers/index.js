import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import './style.css';
import Players from "../Players";
import Rappers from "../Rappers";
import Admin from "../Admin";

export default class PlayersRappers extends Component {
    constructor(props) {
        super(props)

        this.state = {
        }
    }


    render() {
        return (
         <div className="players-rappers-container">
            <h1 className="player-rapper-header">Customize Your Mixtape</h1>
            <Link to='/mixtape'><button type="button" className="create-mixtape">CREATE MIXTAPE</button></Link>
            <div className="players-rappers">
                <Players
                player={this.props.player} players={this.props.players} onPickPlayer={this.props.onPickPlayer} onPlayerDelete={this.props.onPlayerDelete}
                />
                <Rappers
                rapper={this.props.rapper} rappers={this.props.rappers} onPickRapper={this.props.onPickRapper}
                />
            </div>
            <div className="image-container">
            <img src={this.props.player.image_url} alt={this.props.player.name} className="player-image" />
            <img src={this.props.rapper.image_url} alt={this.props.rapper.name} className="rapper-image" />
            </div>
            <h2 className="add-player-header">Can't find a player?</h2><Link to='/AddPlayer'><button type="button" className="add-player-button">Add a Player</button></Link>
        </div>   
        )
    }
}