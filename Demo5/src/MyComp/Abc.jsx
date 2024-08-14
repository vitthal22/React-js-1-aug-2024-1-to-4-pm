import { Component } from "react";

class Abc extends Component
{
    constructor(props)
    {
        super(props)
    }

    

    render()
    {
        return(
            <>
            
                <h1>Emp id: {this.props.id}</h1>
                <h1>Emp name:{this.props.name}</h1>
            </>
        )
    }
}

export default Abc