import React from 'react';
import Tavelheader from './Travelheader';
import Footer from './Travelfooter';
import data3 from './Travelaboutdata'
import Travelrecent from './Travelrecent';
import About from './Travelabout';

export default function TravelAbout(){

    const cards1 = data3.map( item => {
        return(
            <About
            {...item}
            />
        )
})

return(
    <app>
        <div className='back'>
            <Tavelheader/>
            <h1 className='abt'>About Us</h1>
        </div>
        <card>
            {cards1}
        </card>
        <Footer/>
    </app>
)
}