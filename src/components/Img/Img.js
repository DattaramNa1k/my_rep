import React from "react";
import Fifa from "./Fifa.png";
import './Img.css'
export default function Img()
{
    return(
        <div className="box">
        <img src={Fifa} className="Image" alt='' width={520} height={300}></img>
        </div>
    )
}


