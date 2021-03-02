import React from 'react';
import './chat.message.form.component.scss';


export class ChatMessageFormComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: {author: '', text: ''}
        };
        this.baseState = this.state;

        // need to use short functions in a JRX (otherwise need to use arrow functions)
        this.handleFormInputChange = this.handleFormInputChange.bind(this);
        this.submitMessage = this.submitMessage.bind(this);
    }

    handleFormInputChange(event) {
        const target = event.target;

        // retrieve input name and value
        let name = target.name;
        let value = target.value;

        // copy message from state
        const message = {...this.state.message};
        // set new value to message
        message[name] = value;

        // update react component state
        this.setState({
            message: message
        });
    }

    submitMessage(event) {
        event.preventDefault();
        const message = this.state.message;
        this.props.onMessageSubmit(message);
        this.setState(this.baseState);
    }

    render() {
        return (
            <form onSubmit={this.submitMessage} className="chat-message-form">
                <div>
                    <label>
                        <span>Author</span>
                        <span>{this.state.message.author}</span>
                    </label>
                    <label>
                        <span>Text</span>
                        <span>{this.state.message.text}</span>
                    </label>
                </div>
                <br/>
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