import React, { Component } from 'react'

export default class Character extends Component {
    render() {
        return (
            <div>
            <div className='card'>
            <h2>{this.props.charName}</h2>
            <img src={this.props.charImg} alt=""/>
            <h3>House : {this.props.houseName}</h3>
            </div>
            </div>
        )
    }
}
