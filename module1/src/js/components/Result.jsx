import React from 'react';

const Result = React.createClass({
    render() {
        return (
            <div>{this.props.localCounter}</div>
        );
    }
});

export default Result;
