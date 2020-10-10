import React from 'react';

class CountdownForm extends React.Component {
     onSubmit(e) {
       //This will give you string for seconds. Do not remove refs
       e.preventDefault()
        var secondsStr = this.refs.seconds.value;
        let inputValue = parseInt(secondsStr);
        if(inputValue < 0 || isNaN(inputValue)) {
            return;
        }
        this.props.onSetCountdownTime(inputValue);
        this.props.onhandleSetCountdownTime(inputValue);
       
    }

    render() {
        return (
            <div>
                <form ref="form" className = "countdown-form" onSubmit={this.onSubmit.bind(this)} className="countdown-form">
                    <input type="text" className="countdown-text" ref="seconds" placeholder="Enter time in seconds"/>
                    <input type="submit" className="countdown-button" value="Start Countdown"/>
                </form>
            </div>
        );
    }
}

export default CountdownForm;