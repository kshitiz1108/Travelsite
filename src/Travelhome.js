import React from 'react';
import TravelApp from './Travelapp';
import Tavelheader from './Travelheader';
import Travelhero from './Travelhero';
import Travelmain from './Travelmain';
export default function Home(){
    return(
        <>
             <div className='hero-image'>
  <div className='hero-text'>
  <Tavelheader/>
  <Travelhero/>
  </div>
  </div>
  <Travelmain/>
  
  <TravelApp/>
        </>
    )
}