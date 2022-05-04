import React from "react"
import { Button } from 'react-bootstrap';
import three from './../images/three.png';
import "./Home.css";

const Home = () => {
  return (
    <div className=" landing text-center d-flex home align-items-center justify-content-center">
      <div className="d-flex align-items-center justify-content-center">
        <div className="display-2">
          <div className="h1">Hello, I am </div>
          <h2 className="h2">
            Chukwu <span>Derel</span>mi
          </h2>
          <a href="#about" className="h3 btn btn-outline-success">
            Learn More
          </a>
        </div>

      <img src={three} alt="" />

      </div>


      <div>
        <h1 className="display-2 text-center" id="about">
          ABOUT <span> ME</span>
        </h1>

        <div className="d-flex align-items-center justify-content-center row">
          <img
            className="rounded-pill img-fluid home-img"
            src="https://avatars.githubusercontent.com/u/87049674?v=4"
            alt=""
          />
          <div className="col-sm-3 m-5 container-fluid">
            <p>
              Hi there👋,my name is <em>KORSHIE RICHARD CHUKWU NJOM-NNANNA</em>{" "}
              but my friends call me DERELMI.
            </p>
            <p>
              A nigerian born ghanaian;live at Dansoman.18 years of age in a
              family of six, a <strong>web and software developer</strong>.
            </p>
            <br />
            <p>
              <b className="bold">MY HOBBY:</b>
              <li> Coding</li>
              <li> Listening to music</li>
              <li> Being around people i care about</li>
              <li> Sleeping </li>
            </p>{" "}
            <br />
            <div className="home-link">
              <a href="https://github.com/Derelmi" target="blank">
                <img
                  className="rounded float"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOFQQUnNGFvzOpaV2bTVmfgKdbdPJhM2JhmA&usqp=CAU"
                  alt="Github"
                  width="70"
                  height="50"
                />
              </a>
              <a
                href="https://www.instagram.com/de_rel_mi/?hl=en"
                target="blank"
              >
                <img
                  className="rounded float"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM63ibJeWxjkF5czC_M3BOfMV0fVZLDVcAnA&usqp=CAU"
                  alt="instagram"
                  width="40.5"
                  height=""
                />{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home 