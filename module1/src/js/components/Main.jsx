import React from 'react';
import Button from './Button.jsx';
import Result from './Result.jsx';

const Main = React.createClass({
    getInitialState() {
        return {counter: 0};
    },
    handleClick(increment) {
        this.setState({counter: this.state.counter+increment});
    },
    render() {
        return (
            <div>
                <Button localHandleClick={this.handleClick} increment={1} />
                <Button localHandleClick={this.handleClick} increment={5} />
                <Button localHandleClick={this.handleClick} increment={10} />
                <Button localHandleClick={this.handleClick} increment={100} />
                <Result localCounter={this.state.counter}/>
            </div>
        );
    }
});

export default Main;
