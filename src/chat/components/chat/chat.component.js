import React from 'react';
import './chat.component.scss';
import {ChatMessageFormComponent} from "../chat-message-form/chat.message.form.component";
import {ChatMessagesComponent} from "../chat-messages/chat.messages.component";


export class ChatComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="chat">
                <ChatMessageFormComponent/>
                <ChatMessagesComponent/>
            </div>
        );
    }
}
