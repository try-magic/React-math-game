import React from 'react';
import jquery from 'jquery';

const Card = React.createClass({
    getInitialState() {
        return {};
    },
    componentDidMount() {
        const component = this;
        jquery.get(`https://api.github.com/users/${this.props.login}`, (data) => {
            component.setState(data);
        });
    },
    render() {
        return (
            <div>
                <img src={this.state.avatar_url} width="80"/>
                <h3>{this.state.name}</h3>
                <hr/>
            </div>
        );
    }
});

export default Card;
