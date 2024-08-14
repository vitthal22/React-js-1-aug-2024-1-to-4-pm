import { Link } from "react-router-dom"

export default function MyNav()
{
    const mystyel={
        margin:'25px'
    }
    return(
        <>
        <nav>
           <Link style={mystyel} to='/'>Home</Link>
           <Link style={mystyel} to='/about'>About</Link>
           <Link style={mystyel} to='/contact'>Contact</Link>
        </nav>
        </>
    )
}