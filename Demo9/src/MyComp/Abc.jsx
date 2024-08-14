import { Component } from "react";


export default class Abc extends Component
{
    constructor()
    {
        super()
        this.state={
            name:'abc'
        }
    }

    doWork=(n)=>{
        this.setState({
            name:n
        })
    }

    render()
    {
        return(
            <>
            <h1>name is : {this.state.name}</h1>
            <button onClick={this.doWork.bind(this, 'shyam')}>click</button>
            </>
        )
    }
}

