import React from 'react';
import Tavelheader from './Travelheader';
import Footer from './Travelfooter';
export default function Signup(){
  return(
    <contact>
        
            <div className='con1'>
              <Tavelheader/>
              <h1 className="header1">Create Account</h1>
              <form>
            <label className="contact">
                <input className="in1" type='text' placeholder="Username"/>
                <input className="in2" type='number' placeholder="Mobile Number"/>
                <input className="in3" type='email' placeholder="E-mail"/>
                <input className="in3" name="password"  placeholder = 'Password' />
                <button className="button2">Sign Up</button>
                <button className="button2">Log in</button>

               
            </label>
            
           
           
            </form>
            </div>
            
            
            
            <Footer/>
        </contact>
  )



}