import React from 'react';
import ReactDOM from 'react-dom';
import "./Travel.css"

import Footer from './Travelfooter';
import { BrowserRouter, BrowserRouter as Router } from "react-router-dom";
import { Route , Routes,Link } from "react-router-dom";

import TravelAbout from './Travelaboutapp';
import Service from './Travelservice';
import Contact from './TravelContact';
import Signup from './Travelsignup';
import Home from './Travelhome';
import All from './Travelall';

ReactDOM.render(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
         
          <Route path="About" element={<TravelAbout/>} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Signup" element={<Signup />} />
          <Route path="Service" element={<Service />} />
        
      </Routes>
    </BrowserRouter>

,document.getElementById("root"));
