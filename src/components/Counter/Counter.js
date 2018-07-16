import React, { Component } from 'react';

export default class Counter extends Component {
    constructor (props) {
        super(props);

    }

    render () {
        return (
            <div className="counter">
                <button className="increment" onClick={this.props.increment} name={this.props.name}>+</button>
                {this.props.value}
                <button className="decrement" onClick={this.props.decrement} name={this.props.name}>-</button>
            </div>
        );
    }
}