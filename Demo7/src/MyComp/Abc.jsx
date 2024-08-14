import { Component } from "react";
import React from 'react'

class Abc extends Component
{
    constructor()
    {
        super()
        this.myref=React.createRef();
        this.myref1=React.createRef();

        this.state={
            uname:'',
            pass:''
        }

    }

    abc=()=>{
        var n=this.myref.current.value;
        var p=this.myref1.current.value;
        this.setState({
            uname:n,
            pass:p
        })
    }

    render()
    {
        return(
            <>
            <form action="#" onSubmit={(e)=>{e.preventDefault()}}>
                
            <label>Enter Name:</label><br/><br/>
            <input type="text" name="uname" ref={this.myref}/><br/><br/>

            <label>Enter Password:</label><br/><br/>
            <input type="password" name="upass" ref={this.myref1}/><br/><br/>


            <button onClick={this.abc}>click</button>
            </form>

            <h1>name is : {this.state.uname}</h1>
            <h1>name is : {this.state.pass}</h1>
            </>
        )
    }
}

export default Abc