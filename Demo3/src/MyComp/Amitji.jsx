// import './style.css'

export default function Amitji()
{
    //internal css
    const mystyle=
    {
        border:'2px solid red',
        width:'25%',
        backgroundColor:'aqua'
    }
    return(
        <>
        <div className="box" style={mystyle}>
        <h1>Emp id: 101</h1>
        <h1>Emp Name: Amit</h1>
        </div>
        </>
    )
}

//1.external 2.internal 3.inline