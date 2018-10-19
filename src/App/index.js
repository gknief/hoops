import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import "./style.css";
import Home from "../Home";
import Players from "../Players";
import Rappers from "../Rappers";
import PlayersRappers from "../PlayersRappers";
import Mixtape from "../Mixtape";
import AddPlayerForm from "../AddPlayerForm";
import AddRapperForm from "../AddRapperForm";
import MixtapeMaker from "../MixtapeMaker";
import UpdatePlayer from "../UpdatePlayer";

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      players: [],
      player: '',
      rappers: [],
      rapper: '',
      playerName: '',
      playerImage: '',
      playerVideo: '',
      rapperName: '',
      rapperImage: '',
      rapperVideo: ''
    }
  }

  componentDidMount = async () => {
    const requestRappers = await fetch('/api/rappers');
    const jsonRappers = await requestRappers.json()
    this.setState({
        rappers: jsonRappers,
    })
    const requestPlayers = await fetch('/api/players');
    const jsonPlayers = await requestPlayers.json()
    this.setState({
        players: jsonPlayers,
    })
}

  onPickPlayer = e => {
    const player = e.target.value;
    
    const playerIndex = this.state.players.findIndex(player => player.name === e.target.value); // 3
    
    console.log(this.state.players[playerIndex]);
    
    this.setState({
      player: this.state.players[playerIndex],
      playerName: this.state.players[playerIndex].name,
      playerImage: this.state.players[playerIndex].image_url,
      playerVideo: this.state.players[playerIndex].video_url
    }, () => {
      console.log(this.state.player.video_url);
    })
  }

  onPickRapper = e => {
    const rapper = e.target.value;
    
    const rapperIndex = this.state.rappers.findIndex(rapper => rapper.name === e.target.value); // 3
    
    console.log(this.state.rappers[rapperIndex]);
   
    this.setState({
      rapper: this.state.rappers[rapperIndex]
    }, () => {
      console.log(this.state.rapper);
    })
  }

  // onInputChange = e => {
  //   this.setState({
  //     [e.target.name]: e.target.value
  //   })
  // }

  onPlayerSubmit = async (e) => {
    e.preventDefault();
    const body = JSON.stringify({
      name: this.state.playerName,
      image_url: this.state.playerImage,
      video_url: this.state.playerVideo
    });
    const addPlayer = await fetch('/api/players', {
      method: 'POST',
      body: body,
      headers: {
        'Content-Type': 'application/json',
      }
    });
    const newPlayer = await addPlayer.json();
    console.log(newPlayer)
  }

  onPlayerUpdate = async (e) => {
    e.preventDefault();
    const body = await JSON.stringify({
      name: this.state.playerName,
      image_url: this.state.playerImage,
      video_url: this.state.playerVideo
    });
    const updatePlayer = await fetch(`/api/players/${this.state.player.id}`, {
      method: 'PUT',
      body: body,
      headers: {
        'Content-Type': 'application/json',
      }
    });
    await updatePlayer.json();
    
  }

  onPlayerDelete = async () => {
    const player = await fetch(`/api/players/${this.state.player.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      }
    });
    
    console.log('123');
  }

  onRapperSubmit = e => {
    e.preventDefault();
    this.setState({
      name: this.state.rapperName,
      image_url: this.state.rapperImage,
      video_url: this.state.rapperVideo
    });
  }

  onPlayerNameChange = e => {
    console.log('name changing');
    
    this.setState({
      playerName: e.target.value
    });
  }

  onPlayerImageChange = e => {
    this.setState({
      playerImage: e.target.value
    });
  }

  onPlayerVideoChange = e => {
    console.log(';aldjs;flajsdlkfjasld;');
    
    this.setState({
      playerVideo: e.target.value
    });
  }

  onRapperNameChange = e => {
    this.setState({
      rapperName: e.target.value
    });
  }

  onRapperImageChange = e => {
    this.setState({
      rapperImage: e.target.value
    });
  }

  onRapperVideoChange = e => {
    this.setState({
      rapperVideo: e.target.value
    });
  }


  // createMixtape = async e => {
  //   e.preventDefault();
  //   const requestBody = JSON.stringify({
  //     name: this.state.player.name,
  //     image_url: this.state.player.image_url,
  //     video_url: this.state.player.video_url,
  
  // })

  //   if (this.state.player.name === '') {
  //     alert('Please enter a player name');
  //   } else if
  //   (this.state.player.image_url === '') {
  //     alert('Please enter an image url');
  //   } else if
  //   (this.state.player.video_url === '') {
  //     alert('Please enter a video url')
  //   } else {
  //     const response = await fetch('api/CreateMixtape', {
  //       method: 'POST',
  //       body: requestBody,
  //       headers: {
  //         'Content-Type': 'application/json'
  //       }
  //     });
  //     const responseBody = await response.json();
  //     console.log(responseBody);
  //     // if (response.status === 409) {
  //     //   this.setState({
  //     //     errorMessage: responseBody.message
  //     //   });
  //     //   return;
  //     // }
  //     // localStorage.setItem('user_jwt', responseBody.token);
  //     // this.setState({
  //     //   isRegistered: true
  //     // })
  //   }
  // }

  render() {
    return (
        <Router>
        <div className="App">
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/players" 
            render={(props) => <Players {...props} onPickPlayer={this.onPickPlayer} player={this.state.player} players={this.state.players} />} 
          />
          <Route exact path="/rappers" render={(props) => <Rappers {...props} onPickRapper={this.onPickRapper} rapper={this.state.rapper} rappers={this.state.rappers} />} /> */}
          <Route 
            exact path="/PlayersRappers" 
            render={(props) => <PlayersRappers {...props} onPickPlayer={this.onPickPlayer} onPickRapper={this.onPickRapper} player={this.state.player} players={this.state.players} rapper={this.state.rapper} rappers={this.state.rappers} onPlayerDelete={this.onPlayerDelete} />}
          />
          <Route exact path="/players" render={(props) => <Players {...props} player={this.state.player} players={this.state.players} onPlayerDelete={this.onPlayerDelete} onPickPlayer={this.onPickPlayer} />}
          />
          <Route exact path="/mixtape" render={(props) => <Mixtape {...props} player={this.state.player} rapper={this.state.rapper} />}
          />
          <Route exact path="/AddPlayer" render={(props) => <AddPlayerForm {...props} onPlayerSubmit={this.onPlayerSubmit} onPlayerNameChange={this.onPlayerNameChange} onPlayerImageChange={this.onPlayerImageChange} onPlayerVideoChange={this.onPlayerVideoChange} playerName={this.state.playerName} playerImage={this.state.playerImage} playerVideo={this.state.playerVideo} />}
          />
          <Route exact path="/AddRapper" render={(props) => <AddRapperForm {...props} onRapperSubmit={this.onRapperSubmit} onRapperNameChange={this.onRapperNameChange} onRapperImageChange={this.onRapperImageChange} onRapperVideoChange={this.onRapperVideoChange} rapperName={this.state.rapperName} rapperImage={this.state.rapperImage} rapperVideo={this.state.rapperVideo} />}
          />
          <Route exact path="/MixtapeMaker" component={MixtapeMaker} />
          <Route 
            exact path="/UpdatePlayer" 
            render={(props) => <UpdatePlayer {...props} onPlayerUpdate={this.onPlayerUpdate} onPlayerNameChange={this.onPlayerNameChange} onPlayerImageChange={this.onPlayerImageChange} onPlayerVideoChange={this.onPlayerVideoChange} player={this.state.player} players={this.state.players} playerName={this.state.playerName} playerImage={this.state.playerImage} playerVideo={this.state.playerVideo} />}
          />
        </div>
        </Router>
    );
  }
}

export default App;