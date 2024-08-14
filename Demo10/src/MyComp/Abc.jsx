import { useState } from "react"
export default function Abc()
{
    const [count, setCount]=useState(0)

    // const doWork=()=>{
    //     setCount(count+1)
    // }

    return(
        <>
            <p>count is {count}</p>
            {/* <button onClick={doWork}>click</button> */}

            <button onClick={()=>{setCount(count+1)}}>click</button>
        </>
    )
}