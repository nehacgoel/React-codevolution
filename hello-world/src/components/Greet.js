import React from 'react';

//normal functional component.............
// function Greet() {
//     return  <h1>Hello Neha</h1>
// }

//functional component with arrow function.............
//const Greet = () => <h1>Hello Neha</h1>


// props example with functional component........
const Greet = (props) => {
    return (
        <div>
            <h1>Greet {props.name} aka {props.heroName}</h1>
            {props.children}
        </div>
        
    )
}


export default Greet;