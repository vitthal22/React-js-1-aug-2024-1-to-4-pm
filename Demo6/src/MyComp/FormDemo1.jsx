import { Component } from "react"

class FormDemo1 extends Component
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

    nameHandler=(e)=>{
        var n=e.target.value.toLowerCase().toString();
        this.setState(
            {uname:n}
        )
    }

    cityHandler=(e)=>{
        var c=e.target.value;
        this.setState(
            {city:c}
        )
    }

    lgHandler=(e)=>{
        var l=e.target.value;
        this.setState(
            {lg:l}
        )
    }

    genderHandler=(e)=>{
        var g=e.target.value
        this.setState(
            {
                gender:g
            }
        )
    }
    render()
    {
        return(
            <>
            <form action="#" onSubmit={(e)=>{e.preventDefault()}}>
                <label>Enter name:</label><br/><br/>
                <input type="text" name="uname" value={this.state.uname} onChange={this.nameHandler}/><br/><br/>


                <label>Enter city:</label><br/><br/>
                <input type="text" name="city" value={this.state.city} onChange={this.cityHandler}/><br/><br/>


                <label>select language</label>
                <select value={this.state.lg} onChange={this.lgHandler}>
                    <option value="Marathi">Marathi</option>
                    <option value="Hindi">Hindi</option>
                    <option value="English">English</option>
                </select>


                <h3>select Gender</h3>
                <label>Male</label>
                <input type="radio" name="gender" value='Male' onChange={this.genderHandler}/>

                <label>FeMale</label>
                <input type="radio" name="gender" value='FeMale' onChange={this.genderHandler}/>


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

export default FormDemo1