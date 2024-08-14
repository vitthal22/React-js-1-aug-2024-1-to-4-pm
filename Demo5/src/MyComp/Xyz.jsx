export default function Xyz()
{
    var name='abc'

    const doWork=()=>{
        name='ram'
        console.log('reached')
    }

    return(
        <>
        <p>name is {name}</p>
        <button onClick={doWork}>click</button>
        </>
    )
}