import React from 'react';
import StarsFrame from './StarsFrame.jsx';
import ButtonsFrame from './ButtonsFrame.jsx';
import AnswerFrame from './AnswerFrame.jsx';
import NumbersFrame from './NumbersFrame.jsx';
import DoneFrame from './DoneFrame.jsx';
import possibleCombinationSum from '../utils/utils';

const Game = React.createClass({
    getInitialState() {
        return {numberOfStars: this.randomNumber(),
                selectedNumbers: [],
                usedNumbers: [],
                redraws: 5,
                doneStatus: null,
                correct: null};
    },
    randomNumber() {
        return Math.floor(Math.random()*9) +1;
    },
    resetGame() {
        this.replaceState(this.getInitialState());
    },
    selectNumber(clickedNumber) {
        if(this.state.selectedNumbers.indexOf(clickedNumber) < 0) {
            this.setState(
                {selectedNumbers: this.state.selectedNumbers.concat(clickedNumber),
                 correct: null}
            );
        }
    },
    unselectNumber(clickedNumber) {
        const selectedNumbers = this.state.selectedNumbers;
        const indexOfNumber = selectedNumbers.indexOf(clickedNumber);
        selectedNumbers.splice(indexOfNumber, selectedNumbers);
        this.setState({
            selectedNumbers: selectedNumbers,
            correct: null
        });
    },
    checkAnswer () {
        const correct = this.state.numberOfStars === this.sumOfSelectedNumbers();
        this.setState({correct});
    },
    sumOfSelectedNumbers() {
        return this.state.selectedNumbers.reduce((p, n) => {
            return p+n;
        }, 0);
    },
    acceptAnswer() {
        const usedNumbers = this.state.usedNumbers.concat(this.state.selectedNumbers);
        this.setState({
            selectedNumbers: [],
            usedNumbers: usedNumbers,
            correct: null,
            numberOfStars: this.randomNumber()
        }, () => {
            this.updateDoneStatus();
        });
    },
    redraw() {
        if(this.state.redraws > 0) {
            this.setState({
                numberOfStars: this.randomNumber(),
                correct: null,
                redraws: this.state.redraws - 1,
                selectedNumbers: []
            }, () => {
                this.updateDoneStatus();
            })
        }
    },
    possibleSolutions() {
        const numberOfStars = this.state.numberOfStars;
        const possibleNumbers = [];
        const usedNumbers = this.state.usedNumbers;

        for(let i = 1; i <= 9; i++) {
            if(usedNumbers.indexOf(i) < 0) {
                possibleNumbers.push(i);
            }
        }

        return possibleCombinationSum(possibleNumbers, numberOfStars);
    },
    updateDoneStatus() {
        if(this.state.usedNumbers.length === 9) {
            this.setState({doneStatus: 'Done. Nice!'});
            return;
        }
        if(this.state.redraws === 0 && !this.possibleSolutions()) {
            this.setState({doneStatus: 'Game Over!'});
        }
    },
    render() {
        const usedNumbers = this.state.usedNumbers;
        const selectedNumbers = this.state.selectedNumbers;
        const numberOfStars = this.state.numberOfStars;
        const correct = this.state.correct;
        const redraws = this.state.redraws;
        const doneStatus = this.state.doneStatus;

        let bottomFrame;

        if(doneStatus) {
            bottomFrame = <DoneFrame doneStatus={doneStatus}
                                     resetGame={this.resetGame}/>;
        } else {
            bottomFrame = <NumbersFrame selectedNumbers={selectedNumbers}
                                        usedNumbers={usedNumbers}
                                        selectNumber={this.selectNumber} />;
        }
        return (
            <div id="game">
                <h2>Play Nine</h2>
                <hr />
                <div className="clearfix">
                    <StarsFrame numberOfStars={numberOfStars} />
                    <ButtonsFrame selectedNumbers={selectedNumbers}
                                  correct={correct}
                                  redraws={redraws}
                                  acceptAnswer={this.acceptAnswer}
                                  redraw={this.redraw}
                                  checkAnswer={this.checkAnswer}/>
                    <AnswerFrame selectedNumbers={selectedNumbers}
                                 unselectNumber={this.unselectNumber} />
                </div>

                {bottomFrame}
            </div>
        );
    }
});

export default Game;
