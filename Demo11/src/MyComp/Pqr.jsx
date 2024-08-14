import { useState, useEffect } from "react"
export default function Pqr()
{
const [count, setCount]=useState(0)

useEffect(
    ()=>{
        console.log('rendered')
    }
)


    const doWork=()=>{
        setCount(count+1)
    }

    return(
        <>
        <h1>{count}</h1>
        <button onClick={doWork}>click</button>
        </>
    )
}