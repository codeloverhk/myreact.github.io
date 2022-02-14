import React from "react";
import '../Css/login.css';
import img5 from '../image/login1.png';
import {NavLink} from 'react-router-dom';
import {FaEnvelope} from "react-icons/fa";
import { RiLockPasswordFill} from "react-icons/ri";


const Login = () => {

 


    return (
      <>
       <div className="container-fluid  mt-5 text-center">
         <div className="LoginCon col-lg-8 col-md-8 mx-auto">
          <div className="row ">
                   <div className="col-md-6">
                     <div className="leftDiv">
                       <form method="POST" className="Loginform">
                       <h1>Login form</h1>
                       <div className="Inputfield">
                                 <FaEnvelope/>
                                 <input  type="email" className="input-Box" autoComplete="off" name="email" placeholder="Your Email" id="email" 
                                 required="true"/>
                                 </div>
                                 <div className="inputfield">
                                 <RiLockPasswordFill/>
                                 <input  type="password" className="input-Box" name="password" autoComplete="off" placeholder="Your Password" id="password"  
                               required="true"/>
                                 </div>
                                 <input type="submit" name="Submit" id="Submit" value="Login" className="loginbtn" 
                                 />
                                 <p><NavLink to="/Signup" className="Box">Create a Account</NavLink></p>
                       </form>
                         </div>
                    </div>
                    <div className="col-md-6 d-flex">
                               <div className="RightDiv">
                                 <img src={img5}  className="img-fluid img-thumbnail"alt='loginpic'/>
                               </div>
                      </div>
                </div>
         </div>
       </div>

 </>
    );
  }
  
  export default Login;
  