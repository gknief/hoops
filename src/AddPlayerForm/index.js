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

export default class AddPlayerForm extends Component {
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
            <div className="add-player-form">
                <form onSubmit={this.props.onPlayerSubmit}>
                    <p className="add-player-form-paragraph">Name: <input type="text" name="playerName" onChange={this.props.onPlayerNameChange} value={this.props.playerName} placeholder="hello" /></p>
                    <p className="add-player-form-paragraph">Image Source: <input type="text" name="playerImage" onChange={this.props.onPlayerImageChange} value={this.props.playerImage} /></p>
                    <p className="add-player-form-paragraph">Video Source: <input type="text" name="playerVideo" onChange={this.props.onPlayerVideoChange} value={this.props.playerVideo} /></p>
                    <p className="add-player-form-paragraph"><input type="submit" value="Add" /></p>
                </form>
            </div>



        )
    }
}



      // <div className="mixtape-maker-container">
      //   <h1 className="mixtape-maker-header">Create Your Own Mixtape</h1>
      //   <div className="mixtape-maker">
      //     <div className="mixtape-form">
      //       <form onSubmit={this.createMixtape}>
      //         <div className="mixtape-input-container">
      //           <input className="mixtape-input" type="text" value={this.props.player.name} placeholder="Player Name" onChange={this.onInputChange} name="name" />
      //           <input className="mixtape-input" type="text" value={this.props.player.image_url} placeholder="Player Image Link" onChange={this.onInputChange} name="image_url" />
      //           <input className="mixtape-input" type="text" value={this.props.player.video_url} placeholder="Player YouTube Link" onChange={this.onInputChange} name="video_url" />
      //           <button type="button" onClick={this.createMixtape} className="register-button">Sign Up</button>
                /* <h1>Make your own mixtape</h1>
            <Highlights />
            <Tracks />
            <Link to='/mixtape'><button className='generate-mixtape'>Generate Mixtape</button></Link> */
      //         </div>
      //       </form>
      //     </div>
      //   </div>
      // </div>
