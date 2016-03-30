import React from 'react';

const From = React.createClass({
    handleSubmit(e) {
        e.preventDefault();
        const loginInput = React.findDOMNode(this.refs.login);
        this.props.addCard(loginInput.value);
        loginInput.value = '';
    },
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input placeholder="github login" ref="login"/>
                <button>Add</button>
            </form>
        );
    }
});

export default From;
