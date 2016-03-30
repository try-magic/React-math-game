import React from 'react';

const Button = React.createClass({
    localHandleClick() {
        this.props.localHandleClick(this.props.increment);
    },
    render() {
        return (
            <button onClick={this.localHandleClick}>{this.props.increment}</button>
        );
    }
});

export default Button;
