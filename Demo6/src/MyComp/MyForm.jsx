import { Component } from "react";

class MyForm extends Component
{
    constructor()
    {
        super()
        this.state={
            x:''
        }
    }


    abc=(e)=>{
        var a=e.target.value;
        this.setState(
            {x:a}
        )
    }

    pqr=(e)=>{
        e.preventDefault()
    }

    render()
    {
        return(
            <>
            <h1>Name is {this.state.x}</h1>
           <form action="#" onSubmit={this.pqr}>

            <label>Enter name:</label><br/><br/>
            <input type="text" name="uname" onChange={this.abc} value={this.state.x}/><br/><br/>

            <button>submit</button>

           </form>
            </>
        )
    }
}
export default MyForm