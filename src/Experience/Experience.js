import React from "react";
import "./Experience.scss";
import FormulaInvaders from "../assets/images/FormulaInvaders.png";
import ExperienceInformation from "../ExperienceInfomation/ExperienceInformation";

function Experience() {
  return (
    <div className="experienceMain-div">
      <div className="experienceOutter-div">
        <h1 className="experienceTitle">/Experience</h1>
      </div>

      <div className="boxCombined-div">
        <div className="experiencebox1">
          <ExperienceInformation image={FormulaInvaders}  date = "2021-2022"  title = "Formula Invaders" text="Retro Space-Themed arcade game built in Python, using Pygame library" />
        </div>
        <div className="experiencebox1">
        <ExperienceInformation image={FormulaInvaders} title="rotimoti" />
        </div>
      </div>
      <div className="line">
        <hr></hr>
      </div>
      <div className="mediumBox-div">
        <div className="experiencebox2">
        <ExperienceInformation image={FormulaInvaders} />
        </div>
        <div className="experiencebox2">
        <ExperienceInformation image={FormulaInvaders} text="rotimoti" />
        </div>
        <div className="experiencebox2">
        <ExperienceInformation image={FormulaInvaders} text="rotimoti" />
        </div>
      </div>
    </div>
  );
}

export default Experience;
