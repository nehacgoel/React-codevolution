import React, {Component} from 'react';

//class component with state ..
class Message extends Component {

    constructor() {
        super();
        this.state = {
            message: "Welcome Message Component"
        }
    }

    changeMessage() {
        this.setState({
            message: "Thank you for subscribing"
        })
    }

    render() {
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick = {() => this.changeMessage()}>Subscribe</button>
            </div>
        ) 
    }
}

export default Message;