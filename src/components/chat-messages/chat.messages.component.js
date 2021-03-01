import React from 'react';
import './chat.messages.component.scss';


export class ChatMessagesComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="chat-messages-history">
                {this.props.messages.map((message, index) =>
                    <div key={index} className="message">
                        <div className="author">{message.author}</div>
                        <div className="text">{message.text}</div>
                    </div>
                )}
            </div>
        );
    }
}
