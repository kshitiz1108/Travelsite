import React from 'react';
import { BrowserRouter, BrowserRouter as Router, Routes } from "react-router-dom";
import { Route , Switch,Link } from "react-router-dom";
import App from './Travelaboutapp';
import TravelAbout from './Travelaboutapp';
import Service from './Travelservice';
import Contact from './TravelContact';
import Signup from './Travelsignup';
import Home from './Travelhome';

import About from './Travelabout';
export default function All(){
    return(
        <>
       <BrowserRouter>
  <Routes>
        <Route path='/' component = {Home}/>
        <Route path='/About' component = {TravelAbout}/>
        <Route path='/Contact' component = {Contact}/>
        <Route path='/Signup' component = {Signup}/>
        <Route path='/Service' component = {Service}/>

   
  </Routes>
  </BrowserRouter>
        </>
    )
}