import React from 'react';
import data from "./Traveldata"
import data1 from "./Travelrecentdata"
import Travelrecent from './Travelrecent';
import Travelcard from './Travelcard';
import Recent from './Recent';
import Footer from './Travelfooter';
export default function TravelApp(){
    const cards = data.map( item => {
        return(
            <Travelcard
            {...item}
            />
        )
})
const recent = data1.map( item => {
    return(
        <Travelrecent
        {...item}
        />
    )
})


return(
    <sum>
    {cards}
    <Recent/>
    {recent}
    <Footer/>
    </sum>
)
}