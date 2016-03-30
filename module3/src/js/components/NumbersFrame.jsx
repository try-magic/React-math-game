import React from 'react';

const NumbersFrame = React.createClass({
    render() {
        const numbers = [];
        let className = '';
        const selectedNumbers = this.props.selectedNumbers;
        const usedNumbers = this.props.usedNumbers;
        const selectNumber = this.props.selectNumber;
        for(let i = 1; i<=9; i++) {
            className = `number selected-${selectedNumbers.indexOf(i)>=0}`;
            className += ` used-${usedNumbers.indexOf(i)>=0}`;
            numbers.push(
                <div className={className}
                     onClick={selectNumber.bind(null, i)}>
                    {i}
                </div>
            );
        }
        return (
            <div id="numbers-frame">
                <div className="well">
                    {numbers}
                </div>
            </div>
        );
    }
});

export default NumbersFrame;
