import React from 'react';

export default function Travelrecent(props){
    return(
    <div className='div'>
    
    <button className='rece'>
        <img className='img3' src={props.img1}/>
        <h3>{props.place1}</h3>
        <p>{props.description1}</p>
    </button>

</div>
    )
}