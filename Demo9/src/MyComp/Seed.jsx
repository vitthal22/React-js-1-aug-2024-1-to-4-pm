import '../../node_modules/bootstrap/dist/css/bootstrap.css'
export  default function Seed()
{
    const mystyle={
        marginTop:'10em'
    }
    return(
        <>
        
        <div className="container w-75 border pb-4 rounded-4 " style={mystyle}>
        <h1 className='text-center text-info'>Registration form</h1>
            <div className="row g-5">
                <div className="col col-md-6 col-lg-4">
                    <div >
                        <label htmlFor="uname" className='form-label'>Enter user name</label>
                        <input type="text" id="uname" className='form-control'/>
                    </div>
                </div>
                <div className="col col-md-6 col-lg-4">
                    <div>
                        <label htmlFor="upass" className='form-label'>Enter user password</label>
                        <input type="password" id="upass" className='form-control'/>
                    </div>
                </div>
                <div className="col col-md-6 col-lg-4">
                    <div >
                        <label htmlFor="ucity" className='form-label'>Enter user city</label>
                        <input type="text" id="ucity" className='form-control'/>
                    </div>
                </div>
                <div className="col col-md-6 col-lg-4 offset-lg-1">
                    <div >
                        <label htmlFor="uphone" className='form-label'>Enter user phone no</label>
                        <input type="text" id="uphone" className='form-control'/>
                    </div>
                </div>
                <div className="col col-md-4  col-lg-4 offset-md-4 offset-lg-1">
                    <div className='mt-4'>
                         <button className='btn btn-outline-success'>Register</button>
                    </div>
                </div>
            </div>

        </div>
        </>
    )
}



//1.cdn 
//2.download---cd Demo9 --->npm i bootstrap

//bootstrap grid--it used to algin elements in rows and columns

/*

row -->12 colums

*/