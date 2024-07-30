import React , {useState} from 'react';
import './Login.css';
import { assets } from '../../assets/assets';


const Login = ({setShowLogin}) => {

    const [currState,setCurretState] = useState("Sign up");

  return (
    <div className='login-popup'>
      <form action="" className="login-popup-container">
        <div className="login-popup-title">
            <h2>{currState}</h2>
            <img onClick={() => setShowLogin (false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-input">
            {currState === "Login" ? <></> : <input type="text" placeholder='Your Name' required/>}
            <input type="email" placeholder='Your email' required/>
            <input type="password" placeholder='Password' required/>
        </div>
        <button>{currState ==="Sign up" ? "Create account" : "Login"}</button>
        <div className="login-popup-condition">
            <input type="checkbox" required/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, officiis.</p>
        </div>
        {currState === "Login" 
        ? <p>Create a new account? <span onClick = {() => setCurretState("Sign up")}>Click here</span></p> 
        : <p>Already have an account? <span onClick = {() => setCurretState("Login")}>Login here</span></p>
        }
        
        
      </form> 
    </div>
  )
}

export default Login
