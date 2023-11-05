import React, { useState } from "react";

const Counter =() =>{

  const [count, setCount]= useState(0)
  const increment = () => {
    // (count +1);
    setCount(count +1)
  }

  return(
    <button onClick={increment}>I have been clicked {count} times</button>
  )

}

export default Counter;
