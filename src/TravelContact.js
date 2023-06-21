import React from "react";
import Footer from "./Travelfooter";
import Tavelheader from "./Travelheader";

export default function Contact(){
    return(
        <contact>
        
            <div className='con1'>
              <Tavelheader/>
              <h1 className='con'>Contact Us</h1>
            </div>
            <h1 className="header">Send a Message to us!</h1>
            
            <form>
            <label className="contact">
                <input className="in1" type='text' placeholder="Enter your name"/>
                <input className="in2" type='text' placeholder="Mobile Number"/>
                <input className="in3" type='email' placeholder="Enter your E-mail"/>
                <textarea className="te1" name="postContent" rows={4} cols={40} placeholder = 'Message' />
                <button className="button1">Send Message</button>
            </label>
            
           
           
            </form>
            <Footer/>
        </contact>
    )
}