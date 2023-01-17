import React ,{useState}from 'react';
import './login.css';


import {Link }from "react-router-dom";
const Register=()=>{
    const[data,setdata]=useState({username:"",password:"",email1:""});
    const datachange=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    setdata(values=>({...values,[name]: value}))
    }
      
        
    
    const submit=(e)=>{
    e.preventDefault();
    console.log(data)
        }
        
    
        return(
            <div className='register_wrapper' >
            <div className='register_form'>
            
            <form  onSubmit={submit}>
                <div className='form-group'>
                    <label htmlFor="">Username:</label>
                    <input className="form-control mt-2"type="text" name="username"value={data.username} onChange={datachange}></input>
                </div>
              <div className='form-group'>
                <label htmlFor="">Password:</label>
                <input className="form-control mt-2" type="password" name="password"value={data.password}onChange={datachange}></input>
                
              </div>
             <div className='form-group'>
            <label htmlFor="">Email:</label>
            <input  className="form-control mt-2" type="email" name="email1" value={data.email1} onChange={datachange}></input>
             </div>
                
                <button type ="submit" className="btn btn3 mt-4">Submit</button>
                <button className='btn btn4 mt-4 mx-4'><Link to="/login">login</Link></button>
                
            </form>
            
            
            </div>
           
            
            </div>
        )
    
    }
    export default Register;