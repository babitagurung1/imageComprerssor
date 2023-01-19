import useState from 'react'
const Changepassword=()=>{
    const [password,setPass]=useState({oldpassword:"",newpassword:"",confirmpassword:""});
    const passwordchange=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    setPass(values=>({...values,[name]:value}))
    }
    const submitdata =(e)=>{
     e.preventDefault();
     console.log(password)
    }
    return(
        <div className="container-fluid">
            <div className="change_pass">
                <form onSubmit={submitdata}>
                  <div className="form-group">
                  <label>old Password </label>
                  <input type="password" className="form-control" onChange={passwordchange} name="oldpassword" value={password.oldpassword}></input>
                  </div>
                  <div className="form-group">
                  <label>New Password </label>
                  <input type="password" className="form-control" onChange={passwordchange} name="newpassword" value={password.newpassword}></input>
                  </div>
                  <div className="form-group">
                  <label>Confirm Password</label>
                  <input type="password" className="form-control" onChange={passwordchange}name="confirmpassword" value={password.confirmpassword}></input>
                  </div>
                  <button type="button"> Submit</button>

                </form>
            </div>
        </div>
    )
}
export default Changepassword;