import { Component } from "react";

class Abc extends Component
{
    constructor()
    {
        super()
        this.state={count:0}
    }
    doWork=()=>{
        this.setState({
            count:this.state.count+1
        })
    }

    componentDidMount()
    {
        console.log("render")
    }

    componentDidUpdate()
    {
        console.log("re-rendered")
    }
    
    render()
    {
        return(
            <>
            <h1>{this.state.count}</h1>
            <button onClick={this.doWork}>click</button>
            </>
        )
    }
}

export default Abc