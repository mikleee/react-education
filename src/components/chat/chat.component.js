import React from 'react';
import './chat.component.scss';
import {ChatMessageFormComponent} from "../chat-message-form/chat.message.form.component";
import {ChatMessagesComponent} from "../chat-messages/chat.messages.component";


export class ChatComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: []
        };
        this.onMessageSubmit = this.onMessageSubmit.bind(this);
    }

    onMessageSubmit(message) {
        const messages = [...this.state.messages];
        messages.push(message);
        this.setState({
            messages: messages,
        });
    }

    render() {
        return (
            <div className="chat">
                <ChatMessageFormComponent onMessageSubmit={this.onMessageSubmit}/>
                <ChatMessagesComponent messages={this.state.messages}/>
            </div>
        );
    }
}
