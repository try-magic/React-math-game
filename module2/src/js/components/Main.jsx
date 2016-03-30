import React from 'react';
import Card from './Card.jsx';
import Form from './Form.jsx';

const Main = React.createClass({
    getInitialState() {
        return {logins: []};
    },
    addCard(loginToAdd) {
        this.setState({logins: this.state.logins.concat(loginToAdd)});
    },
    render() {
        const cards = this.state.logins.map((login) => {
            return (<Card login={login} />)
        });
        return (
            <div>
                <Form addCard={this.addCard}/>
                <hr/>
                {cards}
            </div>
        );
    }
});

export default Main;
