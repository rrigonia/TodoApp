import React , {useState} from "react";

function CountHooks(){
    const [count, setCount]=useState(0)
    return (
        <div>
            <h1>Counter is: {count} </h1>
            <button onClick={() => setCount(count+1)}>Add</button>
        </div>
    )
}

export default CountHooks;