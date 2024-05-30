import React from 'react'

//Event Handler for functional component

function FunctionClick() {

    function clickHandler() {
        console.log("Button clicked for functional")
    }

  return (
    <div>
        <button onClick={clickHandler}>Click Me Functional</button>
    </div>
  )
}

export default FunctionClick
