import React, { Component } from 'react'

//Event handler for class component
 class ClassClick extends Component {

    clickHandler() {
        console.log("Class Handler Clicked")
    }

  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Click me Class</button>
      </div>
    )
  }
}

export default ClassClick