
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
 
} from "react-router-dom";
import Register from './components/auth/register';
import Login from './components/auth/login';
import Forget from './components/auth/forgetpass';
import Header from './components/layout/header/header';

import About from './components/pages/about';
import Home from "./components/pages/home";

function App() {
  return (
    <div className='div1'> 
    
      <Router>
      <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgetpass" element={<Forget/>} />
      <Route path="/header" element={<Header/>}  />
      <Route path="/about" element={<><Header/><About/></>}/>
      <Route path="home" element={<><Header/><Home/></>}/>
      </Routes>
      </Router>
    
    
    
    </div>
    
  
  );
}

export default App;
