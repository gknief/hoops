import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import './style.css';

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
            <div className="rappers-container">
                <h1 className="home-header">Rappers</h1>
                <h2>Which rapper do you want on your mixtape?</h2>
                <select name="favoritePlayer" onChange={this.onInputChange}>
                    <option>Drake</option>
                    <option>Future</option>
                    <option>Travis Scott</option>
                    <option>A$AP Rocky</option>
                    <option>Quavo</option>
                    <option>Kendrick Lamar</option>
                    <option>Jay-Z</option>
                    <option>Kanye West</option>
                    <option>Gucci Mane</option>
                    <option>Nas</option>
                    <option>The Notorious B.I.G.</option>
                    <option>Tupac</option>
                    <option>Eminem</option>
                    <option>50 Cent</option>
                    <option>Dr. Dre</option>
                    <option>Snoop Dogg</option>
                    <option>21 Savage</option>
                    <option>Rae Sremmurd</option>
                    <option>2 Chainz</option>
                    <option>A$AP Ferg</option>
                    <option>Meek Mill</option>
                    <option>Young Thug</option>
                    <option>Kodak Black</option>
                    <option>T.I.</option>
                    <option>J. Cole</option>
                    <option>Lil Uzi Vert</option>
                    <option>Ty Dolla $ign</option>
                    <option>Post Malone</option>
                    <option>Wiz Khalifa</option>
                    <option>Mac Miller</option>
                    <option>Lil Wayne</option>
                    <option>YG</option>
                    <option>Migos</option>
                    <option>Nicki Minaj</option>
                    <option>G-Eazy</option>
                    <option>Lil Yachty</option>
                    <option>Yo Gotti</option>
                    <option>BlocBoy JB</option>
                    <option>Tee Grizzley</option>
                    <option>Kid Cudi</option>
                    <option>Sheck Wes</option>
                    <option>Childish Gambino</option>
                    <option>Juicy J</option>
                    <option>Tyga</option>
                    <option>Schoolboy Q</option>
                    <option>A Boogie wit da Hoodie</option>
                    <option>6ix9ine</option>
                    <option>Logic</option>
                    <option>XXXTentacion</option>
                    <option>Young M.A.</option>
                    <option>Lil Pump</option>
                </select>
                <button className='players-button'><Link to='/players'>Players</Link></button>
                <button className='rappers-button'><Link to='/rappers'>Rappers</Link></button>
            </div>
        )
    }
}