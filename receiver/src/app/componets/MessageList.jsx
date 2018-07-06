import React, { PureComponent } from 'react';

export default class MessageList extends PureComponent {
    render() {
        const messages = this.props.messages.map((message, index) => <li key={index}>{message}</li>);
        return (
            <ul>
                {messages}
            </ul>
        );
    }
}