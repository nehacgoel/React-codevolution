import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message: "Hello"
      }

      // 3. Binding event handler in constructor 
      this.clickHandler = this.clickHandler.bind(this);
    }

    //4.Arrow function in class property
    clickHandler = () => {
      this.setState({
        message: "Goodbye!"
      })
    }

    // 1. , 2. and 3.
    // clickHandler() {
    //   this.setState({
    //     message: "Goodbye!"
    //   })
    // }
    
  render() {
    const {message} = this.state;
    return (
      <div>
        <p>{message}</p>
        {/* 1. Binding in render method */}
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}

        {/* 2. Arrow function in render method */}
        {/* <button onClick={() => this.clickHandler()}>Click</button> */}

        {/* 3. Binding event handler in constructor or 4. Arrow function in class property */}
        <button onClick={this.clickHandler}>Click</button>

      </div>
    )
  }
}

export default EventBind

