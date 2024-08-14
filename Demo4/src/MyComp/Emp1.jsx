export default function Emp1(props)
{
    const mystyle=
    {
        border:'2px solid red',
        width:'25%',
        margin:'2em'
    }
    
    
    return(
        <>
            <div style={mystyle}>
                <h1>Emp id: {props.id}</h1>
                <h1>Emp name: {props.name}</h1>
            </div>
        </>
    )
}