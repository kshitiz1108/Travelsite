import React from 'react';
import twitter from "./twittericon.png"
import fb from "./fbicon.png"
import insta from "./instaicon.png"
import git from "./githubicon.png"
export default function Footer(){
    return(    
    <footer>
       <foottop className = 'foottop'>
        <left classname = 'left'>
            <h3 className='foot1'>Trippy</h3>
            <p className='foot2'>Choose your favourite destination</p>
        </left>
        <right classname = 'right'>
         <img className='fb' src={fb}/>
         <img className='insta' src={insta}/>
         <img className='git' src={git}/>
         <img className='twitter'  src={twitter}/>
        </right>
        </foottop>
        <footbottom className = 'footbottom'>

           <ul className='footbot'>
            <li className='head1'>Project</li>
            <li className='l1'>ChangeLog</li>
            <li className='l2'>Status</li>
            <li className='l3'>License</li>
            <li className='l4'>All Versions</li>
           </ul>
           <ul className='footbot'>
            <li className='head1'>Community</li>
            <li className='l1'>GitHub</li>
            <li className='l2'>Issues</li>
            <li className='l3'>Project</li>
            <li className='l4'>Twitter</li>
           </ul>
           <ul className='footbot'>
            <li className='head1'>Help</li>
            <li className='l1'>Support</li>
            <li className='l2'>Troubleshooting</li>
            <li className='l3'>Contact Us</li>
            <li className='l4'></li>
           </ul>
           <ul className='footbot'>
            <li className='head1'>Others</li>
            <li className='l1'>Terms of Service</li>
            <li className='l2'>Privacy Policy</li>
            <li className='l3'>License</li>
            <li className='l4'></li>
           </ul>
           
        </footbottom>
    </footer>
    )
}
 