import React from "react";
import "./secondhome.css"
import {Link} from "react-router-dom";
import men from "../assets2/men.png"
import female from "../assets2/female.png"
import footware from "../assets2/footware.png"
import kids from "../assets2/kids.png"
import jewelry from "../assets2/jewelry.png"
import clogs from "../assets2/clogs.png"
import watches from "../assets2/watchs.png"

const Secondhome = () => {
    return (
        <div className="catogiries" style={{marginTop:"50px"}}>
         <div className="collection">
            <button><img src={men} alt="men" style={{width:"100%", height:"30vh"}}></img></button>
            <h4 style={{textAlign:"center"}}>MEN</h4>
         </div>
         <div className="collection">
            <button><img src={female} alt="female" style={{width:"100%", height:"30vh"}}></img></button>
            <h4 style={{textAlign:"center"}}>WOMEN</h4>
         </div>
         <div className="collection"> 
            <button><img src={footware} alt="female" style={{width:"100%", height:"30vh"}}></img></button>
            <h4 style={{textAlign:"center"}}>FOOTWARE</h4>
         </div>
         <div className="collection"> 
            <button><img src={kids} alt="kids" style={{width:"100%", height:"30vh"}}></img></button>
            <h4 style={{textAlign:"center"}}>KIDSWARE</h4>
         </div>
         <div className="collection"> 
            <button><img src={jewelry} alt="jewelry" style={{width:"100%", height:"30vh"}}></img></button>
            <h4 style={{textAlign:"center"}}>JEWELRY</h4>
         </div>
         <div className="collection"> 
            <button><img src={clogs} alt="clogs" style={{width:"100%", height:"30vh"}}></img></button>
            <h4 style={{textAlign:"center"}}>CLOGS</h4>
         </div>
         <div className="collection"> 
            <button><img src={watches} alt="watch" style={{width:"100%", height:"30vh"}}></img></button>
            <h4 style={{textAlign:"center"}}>WATCHES</h4>
         </div>
        </div>
    )
}

export default Secondhome;