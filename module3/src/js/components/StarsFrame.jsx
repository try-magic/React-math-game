import React from 'react';

const StarsFrame = React.createClass({
    render() {
        const stars = [];
        for (let i = 0; i < this.props.numberOfStars; i++) {
            stars.push(
                <span className="glyphicon glyphicon-star"></span>
            )
        }
        return (
            <div id="stars-frame">
                <div className="well">
                    {stars}
                </div>
            </div>
        );
    }
});

export default StarsFrame;
