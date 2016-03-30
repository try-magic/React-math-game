import React from 'react';

const DoneFrame = React.createClass({
    render() {
        const stars = [];
        for (let i = 0; i < this.props.numberOfStars; i++) {
            stars.push(
                <span className="glyphicon glyphicon-star"></span>
            )
        }
        return (
                <div className="well text-center">
                    <h2>{this.props.doneStatus}</h2>
                    <button className="btn btn-default"
                            onClick={this.props.resetGame}>
                        Play again
                    </button>
                </div>
        );
    }
});

export default DoneFrame;
