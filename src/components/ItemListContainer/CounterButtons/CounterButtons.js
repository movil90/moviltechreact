import React, { Component } from 'react'
import { Button } from 'semantic-ui-react';

class CounterButtons extends Component {
    constructor() {
        super();
        this.state = {
          counter: 0,
        };
    }

    handleCounterUp = () => {
        this.setState({ counter: this.state.counter + 1 });
    };
    
    handleCounterDown = () => {
        this.setState({ counter: this.state.counter - 1 });
    };
    render() {
        return (
    <div>
    <div className='CounterButtons'>
          <h3>Contador:</h3>
          <span className='span-counter'>{this.state.counter}</span>
          <div className='btn-section'>
            <Button primary onClick={this.handleCounterUp}>
              +
            </Button>
            <Button secondary onClick={this.handleCounterDown}>
              -
            </Button>
        </div>
    </div>
    </div>
        )
    }
}


export default CounterButtons;