import React from "react";
import Pic1 from "./images/pass.png";
export default function Info(){
    return(
    <info>
        <img src={Pic1} width ="540px" height="540px"/>
        <h2 className="class1">Kshitiz Gupta</h2>
        <h4 className="class2">Frontend Developer</h4>
        <h6 className="class3">kshitizgupta.website</h6>
        <button className="c1"> Email</button>
        <button className="c2"> Linkedin </button>    
    </info>
    )
}