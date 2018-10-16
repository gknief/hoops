import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import './style.css';
import Players from "../Players";
import Rappers from "../Rappers";

export default class PlayersRappers extends Component {
    constructor(props) {
        super(props)

        this.state = {
            favoritePlayer: '',
            favoriteRapper: ''
        }
    }

    submit = () => {
        this.setState({
            favoritePlayer: this.favoritePlayer,
            favoriteRapper: this.favoriteRapper
        })
    }

    render() {
        return (
            <div className="players-rappers">
                <h1 className="player-rapper-header">Choose a Player and a Rapper for your Mixtape</h1>
                <Players />
                <Rappers />
                <Link to='/MixtapeMaker'><button type="button" onClick={this.submit} className="add-player-rapper">Apply to Mixtape</button></Link>
            </div>
        )
    }
}