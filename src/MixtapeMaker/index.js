import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import './style.css';
import Players from "../Players";
import Rappers from "../Rappers";
import Mixtape from "../Mixtape"
import PlayersRappers from "../PlayersRappers";
import AddPlayerForm from "../AddPlayerForm";
import AddRapperForm from "../AddRapperForm";
import youtubeSearch from "youtube-search";

const search = require('youtube-search');

export default class MixtapeMaker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      image_url: '',
      video_url: ''
    }


  }

  componentDidMount = () => {
    console.log(this.props.player)

  }

  render() {
    // const API_KEY = 'AIzaSyC-ocaepWDYQl0M1Byxgz0MZ6nxtOmmQSw';

    return (
      <div className="mixtape-maker">
        <h1 className="mixtape-maker-header">Pick Your Own Player and Rapper</h1>
        <Players
          player={this.props.player} players={this.props.players} onPickPlayer={this.props.onPickPlayer}
        />
        <Rappers
          rapper={this.props.rapper} rappers={this.props.rappers} onPickRapper={this.props.onPickRapper}
        />
        <Link to='/mixtape'><button type="button" className="add-player-rapper">Apply to Mixtape</button></Link>
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
