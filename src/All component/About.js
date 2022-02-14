import React from "react";  
import "../Css/about.css";
import { FaUserAlt ,FaPhoneAlt} from "react-icons/fa";
import { HiIdentification } from "react-icons/hi";
import { MdEmail,MdOutlineWorkOutline } from "react-icons/md";
import myimg from '../image/hk.jpeg';



const About = ()=> {  
    return (
    <> 
     <div className="container mt-5 mx-auto ">
                   <div className="col-lg-12  con4 ">
                         <div className="row justify-content-center text-center">
                             
                         <div className="col-lg-6 lefty">
                         <div className=" fa-2x mt-4"> <img src={myimg}  className="img-thumbnail" alt="mypic"/> </div>
                                   
                         </div>

                         <div className="col-lg-6 ">
                          <form method="GET">
                              
                         <h3 className="header2">Himanshu Kashyap</h3>
                                       <p>Web Developer</p>
                                       <p>Ranking 9/10</p>
                                       <h3 className="mt-3 text-center">About</h3>
                                       <hr className="badge-primary mt-0 w-100"/>
                                       <div className="row mt-5">
                                     <div className="col-md-6">
                                     <HiIdentification/> <label className="contrn">User ID</label>
                                       </div>
                                   <div className="col-md-6">
                                       <p className="contrn">23456769765</p>
                                       </div>
                                       <div className="col-md-6">
                                       <FaUserAlt/>  <label className="contrn">Name</label>
                                       </div>
                                   <div className="col-md-6">
                                       <p className="contrn">Himanshu Kashyap</p>
                                       </div>
                                       <div className="col-md-6">
                                     <MdEmail/>      <label className="contrn">Email</label>
                                       </div>
                                   <div className="col-md-6">
                                       <p className="contrn">Himanshu.shivam61@gmail.com</p>
                                       </div>
                                       <div className="col-md-6">
                                     <FaPhoneAlt/>      <label className="contrn">Phone</label>
                                       </div>
                                   <div className="col-md-6">
                                       <p className="contrn">7692345670</p>
                                       </div>
                                       <div className="col-md-6">
                                    <MdOutlineWorkOutline/> <label className="contrn">Profession</label>
                                       </div>
                                   <div className="col-md-6">
                                       <p className="contrn">Mern Developer</p>
                                       </div>
                         
                         
                      
                         </div>
                          </form>
                        
                         </div>
                
                   </div>
          
     </div>
    
  </div>


</>

 ); 
     
  }

  
  export default About;