import React from 'react';

const ButtonsFrame = React.createClass({
    render() {
        let disable,
            button;
        const correct = this.props.correct;

        switch(correct) {
            case true:
                button = (
                    <button className="btn btn-success btn-lg">
                        <span className="glyphicon glyphicon-ok"
                              onClick={this.props.acceptAnswer}></span>
                    </button>
                );
                break;
            case false:
                button = (
                    <button className="btn btn-danger btn-lg">
                        <span className="glyphicon glyphicon-remove"></span>
                    </button>
                );
                break;
            default:
                disable = !this.props.selectedNumbers.length;
                button = (
                    <button className="btn btn-primary btn-lg"
                            disabled={disable}
                            onClick={this.props.checkAnswer}>
                        =
                    </button>
                );
        }

        return (
            <div id="button-frame">
                {button}
                <br/>
                <br/>
                <button className="btn btn-warning btn-xs"
                        disabled={this.props.redraws === 0}
                        onClick={this.props.redraw}>
                    <span className="glyphicon glyphicon-refresh"></span> {this.props.redraws}
                </button>
            </div>
        );
    }
});

export default ButtonsFrame;
