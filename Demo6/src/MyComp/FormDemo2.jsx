import { Component } from "react"

class FormDemo2 extends Component
{
    constructor()
    {
        super()
        this.state={
            uname:'',
            city:'',
            lg:'Hindi',
            gender:''
        }
    }

    seedHandler=(e)=>{
        var name=e.target.name
        var value=e.target.value

        this.setState(
            {
                [name]:value
            }
        )
    }
    
    render()
    {
        return(
            <>
            <form action="#" onSubmit={(e)=>{e.preventDefault()}}>
                <label>Enter name:</label><br/><br/>
                <input type="text" name="uname" value={this.state.uname} onChange={this.seedHandler}/><br/><br/>


                <label>Enter city:</label><br/><br/>
                <input type="text" name="city" value={this.state.city} onChange={this.seedHandler}/><br/><br/>


                <label>select language</label>
                <select value={this.state.lg} onChange={this.seedHandler} name='lg'>
                    <option value="Marathi">Marathi</option>
                    <option value="Hindi">Hindi</option>
                    <option value="English">English</option>
                </select>


                <h3>select Gender</h3>
                <label>Male</label>
                <input type="radio" name="gender" value='Male' onChange={this.seedHandler}/>

                <label>FeMale</label>
                <input type="radio" name="gender" value='FeMale' onChange={this.seedHandler}/>


                <button>submit</button>
            </form>


            <h1>name is : {this.state.uname}</h1>
            <h1>city is : {this.state.city}</h1>
            <h1>language is : {this.state.lg}</h1>
            <h1>gender is : {this.state.gender}</h1>
            </>
        )
    }
}

export default FormDemo2