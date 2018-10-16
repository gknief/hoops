import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import './style.css';
import Players from "../Players";
import Rappers from "../Rappers";

export default class Rappers extends Component {
    constructor(props) {
        super(props)

        this.state = {
            favoritePlayer: '',
            favoriteRapper: ''
        }
    }
    render() {
        return (
            <div className="players-rappers">
                <h1 className="player-rapper-header">Choose a Player and a Rapper for your Mixtape</h1>
                <Players />
                <Rappers />
            </div>
        )
    }
}