import './home.css';
import {Link} from "react-router-dom"
const Home=()=>{
 return (
    <div className="container-fluid">
    <div className="home_container">
  <div className='container'>
    <div className='row'>
        <div className='col-lg-6 col-md-12 col-sm-12'>
        <h1 className='create_h1'> CREATE ACCOUNT</h1>
        
        <button className='btn get_started_btn'> <Link to="/register">Get Started</Link></button>
        </div>
        <div className='col-lg-6 col-md-12 col-sm-12'>
        <p className='create_paragraph'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>

        </div>
    </div>

  </div>
    </div>
   
</div>
    )
}
export default Home;