import React ,{useState} from "react";
import "./login.css"
const Changepassword=()=>{
 const [data,setdata]=useState({oldpassword:"",newpassword:"",confirmpassword:""})
const passwordchange=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    setdata(values=>({...values,[name]:value}))
}
    return(
       <div className="change_password_wrapper">
        <div className="header-container">
           <form>
            <div className="changepassword_h1">
                <h1 className="changepassword_heading">Changepassword</h1>
            </div>
           <div className="form-group">
                <label>Old password</label>
                <input  className="form-control mt-2"type="password" name="oldpassword" onChange={passwordchange} value={data.oldpassword}></input>
            </div>
            <div className="form-group">
                <label>New password</label>
                <input  className="form-control mt-2"type="password" name="newpassword" onChange={passwordchange} value={data.newpassword}></input>
            </div>
            <div className="form-group">
                <label>Confirm password</label>
                <input  className="form-control mt-2"type="password" name="confirmpassword"onChange={passwordchange} value={data.confirmpassword}></input>
            </div>
            <button type="button " className="btn6 btn">Submit</button>

           </form>
        </div>
       </div>
    )
}
export default Changepassword