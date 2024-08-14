import { useState } from "react"
function Pqr()
{
    const [uname, setUname]=useState('seed')

    const xhanlder=(e)=>{
        var n=e.target.value;
        setUname(n)
    }
    return(
        <>
        <p>Enterd Name is {uname}</p>
        <form>
        <input type="text" value={uname} onChange={xhanlder}/>
        </form>
        </>
    )
}

export default Pqr