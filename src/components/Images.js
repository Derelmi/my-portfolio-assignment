import React from "react";
import { Button } from "react-bootstrap";
import Pone from './../images/Pone.jpeg';
import Ptwo from './../images/Ptwo.jpeg';
import Sone from './../images/Sone.jpg';
import Stwo from './../images/Stwo.jpg';
import Sthree from './../images/Sthree.jpg';

const Images = () => {
    return (
      <div
        id="images"
        className="container container-fluid d-flex flex-wrap justify-content-center my-5 align-items-center img1"
      >
        <img src={Sone} className="rounded float-start img1" alt="" />
        <img src={Stwo} className="rounded float-end img1" alt="" />
        <img src={Sthree} className="rounded float-md-start img1" alt="" />
        <img src={Pone} className="rounded float-md-end img1" alt="" />
        <img src={Ptwo} className="rounded float-end img1" alt="" />
      </div>
    );

};
export default Images;