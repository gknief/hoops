import React, { Component } from 'react';
import AddRapperForm from "../AddRapperForm";
import './style.css';

export default class Rappers extends Component {
    constructor(props) {
        super(props)

    }


    render() {
        return (
            <div className="rappers-container">
                <h1 className="rappers-header">Choose a Song</h1>
                <select className="rapper-options" name="rapper" onChange={this.props.onPickRapper}>
                {this.props.rappers.map(rapper => {
                    return <option key={rapper.id} value={rapper.name} onClick={this.props.onPickRapper}>{rapper.name}</option>
                })}
                </select>
            </div>
        )
    }
}