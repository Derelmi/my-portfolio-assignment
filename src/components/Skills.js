import React from "react";
import { Button } from "react-bootstrap";
import "./Skills.css";


const Skills = () => {
  return (
    <div className="mt-2">
      <h1 className="text-center">SKILLS</h1>

      <div className="row row-cols-1 row-cols-md-2 g-4 container-fluid m-3">
        <div className="col">
          <div className="card text-white bg-secondary mb-3 skill-1">
            <div className="card-header text-center">CODING</div>
            <div className="card-body lead">
              {/* <!-- <h5 className="card-title">Secondary card title</h5> --> */}
              <p className="card-text">
                Create mind blowing websites with
                <span className="badge rounded-pill bg-success">HTML </span>
                <span className="badge rounded-pill bg-success">CSS </span>
                <span className="badge rounded-pill bg-success">JAVA </span>
                <span className="badge rounded-pill bg-success">
                  JAVA SCRIPT
                </span>
                I won'nt say i love to code cause it isn't something i do on the
                regular but turns to amaze me every single time.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card text-white bg-secondary mb-3 skill-1">
            <div className="card-header text-center">SINGING</div>
            <div className="card-body lead">
              {/* <!-- <h5 className="card-title">Secondary card title</h5> --> */}
              <p className="card-text">
                Started singing when i was 3 ,joined the school choir singing
                saprano and later decided to move to contemporay style of music
                rather than the choral i was used to.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card text-white bg-secondary mb-3 skill-1">
            <div className="card-header text-center">SLEEPING</div>
            <div className="card-body lead">
              {/* <!-- <h5 className="card-title">Secondary card title</h5> --> */}
              <p className="card-text">
                I believe there's another world thats way different from the one
                we leave in. Where we could be who we want to be ,where and
                When.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card text-white bg-secondary mb-3 skill-1">
            <div className="card-header text-center">LISTENING TO MUSIC</div>
            <div className="card-body lead">
              {/* <!-- <h5 className="card-title">Secondary card title</h5> --> */}
              <p className="card-text">
                Music is my calm side ; Sam Smith ,Faouzia ,Novo Amor ,Chike
                ,Victoria Orenze. You can go check them out just to see which
                you gonna connect with.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
