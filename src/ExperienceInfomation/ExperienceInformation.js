import React from "react";
import "./ExperienceInformation.scss";

function ExperienceInformation(props) {
  return (
    <div className="outterProp-div">
      <div className="propSections">
        <img className="ProjectIMG" src={props.image} />
      </div>
      <div className="everything">
        <div className="alltextInfo">
          <div className="propTexts">
            <h1 className="projectTitle">{props.title}</h1>
            <h2 className="projectDate">{props.date}</h2>
          </div>
          <div>
            <p className="projectText">{props.text}</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default ExperienceInformation;
