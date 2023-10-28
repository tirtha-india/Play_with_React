import React, { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);

    const increaseButton = () => {
        if(count < 10)
            setCount(count + 1);
        else 
            alert("clicked more than 10 times");
    }

    const decreaseButton = () => {
        if(count > 0)
            setCount(count - 1);
        else 
            alert("can't go less 0");
    }
    
    return (
        <div>
            <button onClick={increaseButton}>Increase</button>
            <button onClick={decreaseButton}>Decrease</button>
            <h1>Count = {count}</h1>
        </div>
    )
}