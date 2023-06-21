import React from "react";
import twitter from "./images/twitter.png";
import facebook from "./images/fb.png";
import insta from "./images/insta.png";
import github from "./images/git.png";
export default function Footer(){
    return(
        <foot>
            <img src={twitter} width = "25px"/>
            <img src={facebook} width = "25px"/>
            <img src={insta} width = "25px"/>
            <img src={github} width = "25px"/>
        </foot>
    )
}