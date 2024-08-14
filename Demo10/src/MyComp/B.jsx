
import { useContext } from "react"
import { myContext } from "../App"

export default function B()
{
    const name=useContext(myContext)
    return(
        <>
        <p> in b {name}</p>
        </>
    )
}