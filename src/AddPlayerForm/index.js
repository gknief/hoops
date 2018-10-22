import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import './style.css';
import Players from "../Players";
import Rappers from "../Rappers";
import Mixtape from "../Mixtape"
import PlayersRappers from "../PlayersRappers";
import AddRapperForm from "../AddRapperForm";


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
        <div className="add-player-container">
        <h1>Add a Player</h1>
        <div className="instructions">
        <h2>Instructions</h2>
        <ul className="instructions-list">
        <li>Enter the first and last name of a player.</li>
        <li>On google images, find a picture of this player and copy the image address.<br></br> <img src="../images/image-instructions.png" className="image-instructions" /></li>
        <li>Find a video of the player on YouTube. Underneath the bottom righthand corner of the video, click "share". Copy and paste the video ID. <br></br> <img src="../images/video-instructions.png" className="video-instructions" /></li>
        <li>Complete the form below.</li>
        </ul>
        </div>
            <div className="add-player-form">
                <form onSubmit={this.props.onPlayerSubmit}>
                    <p className="add-player-form-paragraph">Name: <input type="text" name="playerName" onChange={this.props.onPlayerNameChange} value={this.props.playerName} /></p>
                    <p className="add-player-form-paragraph">Image Source: <input type="text" name="playerImage" onChange={this.props.onPlayerImageChange} value={this.props.playerImage} /></p>
                    <p className="add-player-form-paragraph">Video Source: <input type="text" name="playerVideo" onChange={this.props.onPlayerVideoChange} value={this.props.playerVideo} /></p>
                    <p className="add-player-form-paragraph"><input className="add-player-page-button" type="submit" value="Add Player" /></p>
                    <Link to='/PlayersRappers'><p className="update-player-form-paragraph"><input className="add-player-page-button" type="submit" value="Go Back" /></p></Link>
                </form>
            </div>
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
