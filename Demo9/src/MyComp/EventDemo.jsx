import { Component } from "react";

export default class EventDemo extends Component
{
    constructor()
    {
        super()
        this.state={
            stdname:'not available'
        }
    }

    xyz=(e)=>{
        this.setState({
            stdname:e.target.value
        })
    }

    render()
    {
        return(
            <>
            <h1>std name is : {this.state.stdname}</h1>

            <input type="text" onChange={this.xyz.bind(this)}/>
            </>
        )
    }
}