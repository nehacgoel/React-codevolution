import React, { Component } from 'react'


// setState example
class Counter extends Component {

 constructor() {
    super();
    this.state = {
        count : 0
    }
 }

 increment() {
    // this.setState(
    //     {
    //         count: this.state.count + 1
    //     },
    //     () => {
    //         console.log("calback value", this.state.count)
    //     }
    // )
    // console.log(this.state.count)

    this.setState((prevValue, props) => ({
        count :  prevValue.count + 1
    }))
    console.log(this.state.count)
 }

 fiveIncrement(){
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
 }
  render() {
    return (
        <div>
            <div>The count is {this.state.count}</div>
            <button onClick = {() => this.fiveIncrement()}>Increment</button>
        </div>
      
    )
  }
}

export default Counter