import React, { Component } from 'react';
import './style.css';

export default class Rappers extends Component {
    constructor(props) {
        super(props)

    }


    render() {
        return (
            <div className="rappers-container">
                <h1 className="rappers-header">Rappers</h1>
                <h2>Which rapper do you want on your mixtape?</h2>
                <select name="rapper" value={this.props.rapper} onChange={this.props.onPickRapper}>
                {this.props.rappers.map(rapper => {
                    return <option key={rapper.id} value={rapper.name}>{rapper.name}</option>
                })}
                </select>
            </div>
        )
    }
}