import React from 'react';
import './list.component.css';


export class ListComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {items: props.items || []};
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {
        const lis = this.state.items.map((value) =>
            <li value={value} />
        );
        return (
            <ul>
                <h1>{this.state.message}</h1>
                <input type="text" onKeyUp={(e) => this.updateMessage(e)}/>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </ul>
        );
    }
}
