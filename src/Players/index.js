import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import './style.css';

export default class Players extends Component {
    constructor(props) {
        super(props)

        this.state = {
            favoritePlayer: 'LeBron James'
        }
    }


    onInputChange = e => {
        const favoritePlayer = e.target;
        this.setState({
          [favoritePlayer.name]: favoritePlayer.value
        })
    }

    render() {
        return (
            <div className="players-container">
                <h1 className="players-header">Players</h1>
                <h2>Which player do you want on your mixtape?</h2>
                <select name="favoritePlayer" onChange={this.onInputChange}>
                    <option>LeBron James</option>
                    <option>Kevin Durant</option>
                    <option>Stephen Curry</option>
                    <option>James Harden</option>
                    <option>Anthony Davis</option>
                    <option>Giannis Antetokounmpo</option>
                    <option>Russell Westbrook</option>
                    <option>Chris Paul</option>
                    <option>Joel Embiid</option>
                    <option>Jimmy Butler</option>
                    <option>Paul George</option>
                    <option>Kawhi Leonard</option>
                    <option>Draymond Green</option>
                    <option>Damian Lillard</option>
                    <option>Kyrie Irving</option>
                    <option>Nikola Jokic</option>
                    <option>Karl-Anthony Towns</option>
                    <option>Victor Oladipo</option>
                    <option>Kristaps Porzingis</option>
                    <option>LaMarcus Aldridge</option>
                    <option>Klay Thompson</option>
                    <option>Kyle Lowry</option>
                    <option>John Wall</option>
                    <option>Gordon Hayward</option>
                    <option>Ben Simmons</option>
                    <option>Bradley Beal</option>
                    <option>DeMar DeRozan</option>
                    <option>Kevin Love</option>
                    <option>Kemba Walker</option>
                    <option>CJ McCollum</option>
                    <option>Donovan Mitchell</option>
                    <option>Jayson Tatum</option>
                    {/* <option></option>
                    <option></option>
                    <option></option>
                    <option></option>
                    <option></option>
                    <option></option>
                    <option></option>
                    <option></option>
                    <option></option>
                    <option></option>
                    <option></option>
                    <option></option>
                    <option></option>
                    <option></option>
                    <option></option>
                    <option></option>
                    <option></option>
                    <option></option>
                    <option></option>
                    <option></option> */}

                </select>
            </div>
        )
    }
}