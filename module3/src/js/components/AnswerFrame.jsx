import React from 'react';

const AnswerFrame = React.createClass({
    render() {
        const props = this.props;
        const selectedNumbers = props.selectedNumbers.map(i => {
            return (
                <span onClick={props.unselectNumber.bind(null, i)}>{i}</span>
            );
        });
        return (
            <div id="answer-frame">
                <div className="well">
                    {selectedNumbers}
                </div>
            </div>
        );
    }
});

export default AnswerFrame;
