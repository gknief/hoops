import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import "./style.css";
import Home from "../Home";
import Players from "../Players";
import Rappers from "../Rappers";
import PlayersRappers from "../PlayersRappers";
import MixtapeMaker from "../MixtapeMaker";
import Highlights from "../Highlights";
import Tracks from "../Tracks";
import Mixtape from "../Mixtape";

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      players: [],
      player: 'LeBron James',
      rappers: [],
      rapper: 'Drake'
    }
  }

  componentDidMount = async () => {
    const requestRappers = await fetch('/api/rappers');
    const jsonRappers = await requestRappers.json()
    this.setState({
        rappers: jsonRappers
    })
    const requestPlayers = await fetch('/api/players');
    const jsonPlayers = await requestPlayers.json()
    this.setState({
        players: jsonPlayers,
    })
}

  onPickPlayer = e => {
    const player = e.target.value;
    // find player based on name from players array
    // array.filter
    const playerIndex = this.state.players.findIndex(player => player.name === e.target.value); // 3
    // const filteredPlayer = this.state.players.filter(player => e.target.value)
    // const playerIndex = this.state.players.indexOf(filteredPlayer)
    console.log(this.state.players[playerIndex]);
   
    // set state for player to be equal to entire object of array
    this.setState({
      player: this.state.players[playerIndex]
    }, () => {
      console.log(this.state.player.video_url);
    })
  }

  onPickRapper = e => {
    const rapper = e.target.value;
    // find player based on name from players array
    // array.filter
    const rapperIndex = this.state.rappers.findIndex(rapper => rapper.name === e.target.value); // 3
    // const filteredPlayer = this.state.players.filter(player => e.target.value)
    // const playerIndex = this.state.players.indexOf(filteredPlayer)
    console.log(this.state.rappers[rapperIndex]);
   
    // set state for rapper to be equal to entire object of array
    this.setState({
      rapper: this.state.rappers[rapperIndex]
    }, () => {
      console.log(this.state.rapper.video_url);
    })
  }

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
            render={(props) => <PlayersRappers {...props} onPickPlayer={this.onPickPlayer} onPickRapper={this.onPickRapper} player={this.state.player} players={this.state.players} rapper={this.state.rapper} rappers={this.state.rappers} />}
          />
          <Route exact path="/MixtapeMaker" render={(props) => <MixtapeMaker {...props} player={this.state.player} rapper={this.state.rapper} />}
          />
          <Route exact path="/players/highlights" component={Highlights} />
          <Route exact path="/rappers/tracks" component={Tracks} />
          <Route exact path="/mixtape" component={Mixtape} />
        </div>
        </Router>
    );
  }
}

export default App;