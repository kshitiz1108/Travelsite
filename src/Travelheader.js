import React from 'react';
import {Outlet,NavLink} from 'react-router-dom';

export default function Tavelheader(){
    return(
    <navbar>
        <h2 className='trippy'>Trippy</h2>
        <nav>
        <NavLink className="b1"  to = '/'>Home</NavLink>
        <NavLink  className='b2'  to = '/About'>About</NavLink>
        <NavLink className='b3'  to = '/Service'>Service</NavLink>
        <NavLink className='b4' to = '/Contact'>Contact</NavLink>
        <NavLink className='b5' to = '/Signup'>Signup</NavLink>
        </nav>
        <Outlet/>
    </navbar>
    )
}