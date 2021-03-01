import React from 'react';
import './chat.message.form.component.scss';


export class ChatMessageFormComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: {author: '', text: ''}
        };
        this.baseState = this.state;
        this.handleFormInputChange = this.handleFormInputChange.bind(this);
        this.submitMessage = this.submitMessage.bind(this);
    }

    handleFormInputChange(event) {
        const target = event.target;
        const message = {...this.state.message, [target.name]: target.value};
        this.setState({
            message: message
        });
    }

    submitMessage(event) {
        debugger;
        event.preventDefault();
        const message = this.state.message;
        this.props.onMessageSubmit(message);
        this.setState(this.baseState);
    }

    render() {
        return (
            <form onSubmit={this.submitMessage} className="chat-message-form">
                <label>
                    <span>Author</span>
                    <input type="text" name="author" value={this.state.message.author} onChange={this.handleFormInputChange}/>
                </label>
                <label>
                    <span>Text</span>
                    <input type="text" name="text" value={this.state.message.text} onChange={this.handleFormInputChange}/>
                </label>
                <button type="submit">Send</button>
            </form>
        );
    }
}
