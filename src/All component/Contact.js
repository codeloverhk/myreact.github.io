import React from "react";
import '../Css/contact.css';
import {FaAt ,FaPhoneAlt,FaUserClock} from "react-icons/fa";

const Contact = () => {
    return (      
      <>
      
  
     <div className="container">
    

        <div className="col-xl-10 col-lg-10  col-md-10 col-sm-5 mx-auto">

        <div className="row ">
          
         <div className=" cont_info mt-3">
         <div className="diva"> <FaAt/>himanshu.shivam61@gmail.com</div>
         <div className="diva"><FaPhoneAlt/>9870949800</div>
         <div className="diva"><FaUserClock/>Mon to Sat 8:00 AM to 5:00 PM </div>
         </div>
      </div>
        <div className="Contact" >
          <div className="row">
          
           <div className="Contact_form mt-3 col-lg-12 ">
                <h2>Contact Us</h2>
                <form className="Con_form  py-2 mr-5">
                <input type="text" name="name" id="Na" className="text-box"  placeholder="Your Name"/>
                <input type="email" className="text-box" placeholder="Your Email"/>
                <textarea name="message" rows="5" placeholder="Your Message" required="true"></textarea>
                <button type="submit" name="submit" className="send_bt" value=""> Send</button>
                </form>

            </div>
            </div>
        </div>
      </div>
  
     </div>
     
      
      </>
    );
  }
  
  export default Contact;
  