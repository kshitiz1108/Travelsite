import React from 'react';


export default function Travelcard(props){
    

    return(
      <card>
      <cardwrite>
        <h3>{props.place}</h3>
        <p>{props.description}</p>
      </cardwrite>
      <img className='card-image' src={props.img}/>
      </card>
    )
}