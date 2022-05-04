import React from "react";
import { Button } from "react-bootstrap";
import Pone from './../images/Pone.jpeg';
import Ptwo from './../images/Ptwo.jpeg';
import Sone from './../images/Sone.jpg';
import Stwo from './../images/Stwo.jpg';
import Sthree from './../images/Sthree.jpg';

const Images = () => {
    return(
    <div className="container d-flex flex-wrap justify-content-center my-5 align-items-center"> 
        <img src={Sone} className="rounded float-start img" alt="" />
        <img src={Stwo} className="rounded float-end" alt="" />
        <img src={Sthree} className="rounded float-md-start" alt="" />
        <img src={Pone} className="rounded float-md-end" alt="" />
        <img src={Ptwo} className="rounded float-end" alt="" />
    </div> 
    )

};
export default Images;