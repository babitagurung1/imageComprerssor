import './login.css';



import React,{useState} from 'react';
const Forget=()=>{
    const [email1,setemail]=useState("");
    return (
        <div className='forgetpass container-fluid'>
            <div className='forgetpass_form'>
                <form>
                   <div className='forget_header'> <h5 className='forget_h1 p-3'>Forget password</h5></div>
                <div className='form-group mt-4'>
                <label htmlFor="">Email:</label>
                <input className="form-control"type="email" value={email1} onChange={(e)=>{setemail(e.target.value)}}></input>
                </div>
                <button className="btn mt-5 btn1"type='submit'>Submit</button>
                </form>
              
            </div>
       
            
              
            
        </div>
    )
}
export default Forget;