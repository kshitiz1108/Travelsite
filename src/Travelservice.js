import React from 'react';
import Recent from './Recent';
import Footer from './Travelfooter';
import Tavelheader from './Travelheader';
import Travelrecent from './Travelrecent';
import data1 from "./Travelrecentdata"
export default function Service(){
    const recent = data1.map( item => {
        return(
            <Travelrecent
            {...item}
            />
        )
    })
    return(
        <service>
            <div className='ser1'>
              <Tavelheader/>
              <h1 className='ser'>Service</h1>
            </div>
            <div className='ser2'>
            <Recent/>
              {recent}
            </div>
            <Footer/>
        </service>
    )
}