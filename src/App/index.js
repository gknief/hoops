import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import "./style.css";
import Players from "../Players";
import Rappers from "../Rappers";
import PlayersRappers from "../PlayersRappers";
import MixtapeMaker from "../MixtapeMaker";
import Highlights from "../Highlights";
import Tracks from "../Tracks";
import Mixtape from "../Mixtape";

class App extends Component {
  render() {
    return (
        <Router>
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route exact path="/players" component={PlayersRappers} />
          <Route exact path="/MixtapeMaker" component={MixtapeMaker} />
          <Route exact path="/players/highlights" component={Highlights} />
          <Route exact path="/rappers/tracks" component={Tracks} />
          <Route exact path="/mixtape" component={Mixtape} />
        </div>;
        </Router>
    )
  }
}

export default App;