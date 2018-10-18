import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import './style.css';
import Players from "../Players";
import Rappers from "../Rappers";
import Mixtape from "../Mixtape"
import PlayersRappers from "../PlayersRappers";
import AddPlayerForm from "../AddRapperForm";
import youtubeSearch from "youtube-search";

const search = require('youtube-search');

export default class AddRapperForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
    
        }


    }

    componentDidMount = () => {
        console.log(this.props.player)

    }

    render() {
        return (
            <div className="add-rapper-form">
                <form onSubmit={this.props.onRapperSubmit}>
                    <p className="add-rapper-form-paragraph">Name: <input type="text" onChange={this.props.onRapperNameChange} value={this.props.rapperName} /></p>
                    <p className="add-rapper-form-paragraph">Image Source: <input type="text" onChange={this.props.onRapperImageChange} value={this.props.rapperImage} /></p>
                    <p className="add-rapper-form-paragraph">Video Source: <input type="text" onChange={this.props.onRapperVideoChange} value={this.props.rapperVideo} /></p>
                    <p className="add-rapper-form-paragraph"><input type="submit" value="Add" /></p>
                </form>
            </div>



        )
    }
}

