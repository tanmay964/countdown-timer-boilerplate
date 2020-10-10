import React from 'react';
import Clock from './Clock';
import CountdownForm from './CountdownForm';

class Countdown extends React.Component {

    constructor() {
        super();
        this.state = {
            count: 0
        }
    }

    onInputChange = value => {
        this.setState({
            count: value
        });
    }

    startTimer = () => {
        let decrementCount = this.state.count - 1;

        if(decrementCount === 0){
            clearInterval(this.timerId);
        }

        this.setState({
            count: decrementCount
        });
    }

    handleSetCountdownTime = (value) => {
        if (value !== 0) {
          this.timerId =  setInterval(() => this.startTimer(), 1000);
        }
    }
  

    render() {
        const { count } = this.state;
        return (
            <div>
                <Clock timeInSeconds={count} />
                <CountdownForm 
                onSetCountdownTime={val => this.onInputChange(val)} 
                onhandleSetCountdownTime={ val => this.handleSetCountdownTime(val)}/>
            </div>
        );
    }
}

export default Countdown;