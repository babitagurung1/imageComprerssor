import {Link} from "react-router-dom";
import './header.css';
const Header=()=>{
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light nav1">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item ms-3 my-2">
          <Link activeClassName="active" to="/home">Home</Link>
        </li>
        <li class="nav-item ms-3 my-2">
         <Link to="/about">About</Link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Update Profile
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="link1" to="/login">login</Link></li>
            <li><Link to="/forgetpass">Forget Password</Link></li>
           
            
          </ul>
        </li>
      
        
      </ul>
     
    </div>
  </div>
</nav>
    )
}
export default Header;