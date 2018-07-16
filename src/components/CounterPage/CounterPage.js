import React, { Component } from 'react';
import Counter from '../Counter/Counter';
import { connect } from 'react-redux';
import { 
    incrementAdult, 
    decrementAdult, 
    incrementChild, 
    decrementChild, 
    incrementInfant, 
    decrementInfant
} from '../../actions/counterAction';

class CounterPage extends Component {
    constructor (props) {
        super(props);
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    decrement (e) {
        const { dispatch } = this.props;
        switch(e.target.name){
            case "adult":
                dispatch(decrementAdult());
                break;
            case "child":
                dispatch(decrementChild());
                break;
            case "infant":
                dispatch(decrementInfant());
                break;
        }
    }

    increment (e) {
        const { dispatch } = this.props;
        switch(e.target.name){
            case "adult":
                dispatch(incrementAdult());
                break;
            case "child":
                dispatch(incrementChild());
                break;
            case "infant":
                dispatch(incrementInfant());
                break;
        }
    }

    componentWillMount () {
        const { dispatch } = this.props;
        
    }

    render () {
        let errorClass = this.props.showError ? 'show' : 'hide';
        errorClass = 'error ' + errorClass;
        return (
            <div className="counters-container">
                <div className={errorClass}>Maximum limit reached</div>
                <Counter value={this.props.adultCount} decrement={this.decrement} increment={this.increment} name="adult"/>
                <Counter value={this.props.childCount} decrement={this.decrement} increment={this.increment} name="child"/>
                <Counter value={this.props.infantCount} decrement={this.decrement} increment={this.increment} name="infant"/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const { adultCount, childCount, infantCount, showError } = state.counter;
    return {
        adultCount,
        childCount,
        infantCount,
        showError
    };
  };
  
  export default connect(mapStateToProps)(CounterPage);