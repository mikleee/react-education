import React from 'react';
import './chat.messages.component.scss';
import {store} from "../../../store/store";
import {messagesSelector} from "../../chat.selectors";


export class ChatMessagesComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {messages: messagesSelector(store.getState())};
    }

    componentDidMount() {
        store.subscribe(() => {
            this.setState({
                ...this.state,
                messages: messagesSelector(store.getState())
            })
        })
    }

    render() {
        return (
            <div className="chat-messages-history">
                {this.state.messages.map((message, index) =>
                    <div key={index} className="message">
                        <div className="author">{message.author}</div>
                        <div className="text">{message.text}</div>
                    </div>
                )}
            </div>
        );
    }
}
