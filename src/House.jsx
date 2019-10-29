import React, { Component } from 'react'

export default class House extends Component {

    render() {
        return (
            <div>
            <div className='card'>
            <h2>{this.props.houseName}</h2>
            <img src={this.props.houseImgSrc} alt=""/>
            <h3>Founder : {this.props.founder}</h3>
            <h3>Element : {this.props.element}</h3>
            </div>
                
            </div>
        )
    }
}
