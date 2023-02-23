import React from "react";

export default function Counter() {
  const [count, setCount] = React.useState(0);

  function add() {
    setCount((prevCount) => prevCount + 1);
  }

  function subtract() {
    setCount((prevCount) => prevCount - 1);
  }

  return (
    <div className="counter">
      <button className="counter--minus" onClick={subtract}>
        -
      </button>
      <div className="counter--count">
        <h1>{count}</h1>
      </div>
      <button className="counter--plus" onClick={add}>
        +
      </button>
    </div>
  );
}


/* passing state as a prop
return (
        <div className="counter">
            <button className="counter--minus" onClick={subtract}>–</button>
            
            <Count number={count} />   <------ new component created
            
            <button className="counter--plus" onClick={add}>+</button>
        </div>
    )
}

 this is new Component 

import React from "react"

export default function Count(props) {
    return (
        <div className="counter--count">
            <h1>{props.number}</h1>
        </div>
    )
}




