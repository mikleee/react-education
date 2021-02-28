import React from 'react';
import './chat.component.css';


export class ChatComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [],
            message: {author: '', text: ''}
        };
        this.handleFormInputChange = this.handleFormInputChange.bind(this);
        this.sendMessage = this.sendMessage.bind(this);
    }

    componentDidMount() {
    }

    componentWillUnmount() {

    }

    handleFormInputChange(event) {
        const target = event.target;
        const message = {...this.state.message, [target.name]: target.value};
        this.setState({
            message: message
        });
    }

    sendMessage(event) {
        event.preventDefault();
        const messages = [...this.state.messages];
        messages.push(this.state.message);
        this.setState({
            messages: messages,
            message: {author: '', text: ''},
        });
    }

    render() {
        const lis = this.state.messages.map(message =>
            <li>
                <div className="author">{message.author}</div>
                <div className="text">{message.text}</div>
            </li>
        );

        return (
            <div className="chat">
                <form onSubmit={this.sendMessage} className="chat-form">
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
                <div className="chat-history">
                    <ul>
                        {lis}
                    </ul>
                </div>
            </div>
        );
    }
}
