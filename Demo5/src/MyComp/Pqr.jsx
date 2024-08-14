import { Component } from "react";

class Pqr extends Component
{
    constructor()
    {
        super()

        this.state={
            name:'seed info'  
        }
    }


    doWork=()=>{
        this.setState(
           {
            name:'seed infotech pune'
           } 
        )
    }

    render()
    {
        return(
            <>
            <h1>name is {this.state.name}</h1>
            <button onClick={this.doWork}>click</button>
            </>
        )
    }
}

export default Pqr