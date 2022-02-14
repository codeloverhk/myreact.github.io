import React from "react";
import img5 from '../image/signnup1.jpg';
import {NavLink} from 'react-router-dom';
import {FaUserAlt,FaEnvelope,FaPhoneAlt} from "react-icons/fa";
import { MdOutlineWork} from "react-icons/md";
import { RiLockPasswordFill} from "react-icons/ri";

   const Signup = () => {

    
    return (
      <>
           <main>
          <div className="container cont1 mx-auto  ">
               <div className="Signup-cont col-lg-10 mx-auto">
                   <div className="row">
                         <div className="col-md-6">
                            <div className="LeftCon">
                               <form  method="POST" className="SignupForm  text-center">
                                 <h1>SignUp</h1>
                                 <div className="text-group">
                                 <FaUserAlt/>
                                 <input  type="text" className="text-Box" name="name" placeholder="Your Name" autocomplete="off" id="name"  
                                   />
                                 </div>

                                 <div className="text-group">
                                <label><FaEnvelope/></label> 
                                 <input  type="email" className="text-Box" name="email" placeholder="Your Email" autocomplete="off" id="email" 
                                 />
                                 </div>

                                 <div className="text-group">
                                 <FaPhoneAlt/>
                                 <input  type="number" className="text-Box" name="phone" placeholder="Phone no" autocomplete="off" id="phone"  
                                 required/>
                                 </div>
                                 <div className="text-group">
                                 <MdOutlineWork/>
                                 <input  type="text" className="text-Box" name="work" placeholder="Your Profession" autocomplete="off" id="work"  
                                 required/>
                                 </div>

                                 <div className="text-group">
                                 <RiLockPasswordFill/>
                                 <input  type="password" className="text-Box" name="password" placeholder="Your Password" autocomplete="off" id="password" 
                                required/>
                                 </div>

                                 <div className="text-group">
                                 <RiLockPasswordFill/>
                                 <input  type="password" className="text-Box" name="cpassword" placeholder="Confirm Password" autocomplete="off" id="cpassword"
                                required/>
                                 </div>
                                 

                                 <input type="submit" name="Submit" autocomplete="off" id="Submit" value="Register" className="stylebtn"  />
                                 </form> 
                                 <p >  Already Register<NavLink to="/login" className="header">Login </NavLink></p>

                            </div>
                         </div>

                         <div className="col-md-6">
                               <div className="RightCon">
                                 <img src={img5}  className="img-thumbnail"alt='signuppic'/>
                               </div>

                         </div>
                   </div>
               </div>
          </div>
            
          </main>
      </>

    );
  }
  export default Signup;