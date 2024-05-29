import React from 'react';

//normal functional component.............
// function Greet() {
//     return  <h1>Hello Neha</h1>
// }

//functional component with arrow function.............
//const Greet = () => <h1>Hello Neha</h1>


// props example with functional component........
    //const Greet = (props) => {
    const Greet = ({name, heroName, children}) => { // with destructuring
    return (
        // const {name, heroName, children} = props;  another way of destructuring
        <div>
            {/* <h1>Greet {props.name} aka {props.heroName}</h1>
            {props.children} */}

            {/* with destructuring */}
            <h1>Greet {name} aka {heroName}</h1>
            {children}

        </div>
        
    )
}


export default Greet;