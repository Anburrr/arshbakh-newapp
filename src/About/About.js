import React from "react";
import "./About.scss";

function About() {
  return (
    <div className="mainAbout-div">
      <div className="outterAbout-div">
        <div className="Info">
          <h1 className="aboutHeader" id="aboutHeader">
            /About
          </h1>
          <p className="schoolIntro">
            I am a freshman at the school of Information Technology at{" "}
            <span>
                <a className="highlightText" href="https://www.yorku.ca/">York University</a></span> for Honours
            Bcomm in Commerce Development
          </p>
          <div className="skills">
            <p className="meIntro">
              Hey guys! Im Arsh, a{" "}
              <span>
                {" "}
                <a
                  href="https://www.yorku.ca/laps/itec/information-technology/"
                  className="highlightText"
                >
                  York Universtiy IT{" "}
                </a>
              </span>
              student, with a passion for sports, tech and cars. An Entrepreneur
              chasing excellence always. I am slowly diving into full stack
              development and fueling my love for technology! I am also in
              process of creating my own{" "}
              <span>
                <a
                  href="https://www.instagram.com/overachievers.clothing/"
                  className="highlightText"
                >
                  Clothing Brand
                </a>
              </span>
              ! Whether im selling my products or programming, I am driven by
              the thrill of pushing boundaries and exploring new horizons. Join
              me on my Journey as I balance these worlds and chase my dreams
              with relentless determination and discipline!
            </p>

            <div className="programmingTitle">
              <h2 className="languageTitle">Languages I've Learnt:</h2>

              <div className="programmingSkills">
                <div className="line1">
                  <p className="programmingLang"> ~ JavaScript</p>
                  <p className="programmingLang"> ~ React</p>
                  <p className="programmingLang"> ~ Python</p>
                </div>

                <div className="line2">
                  <p className="programmingLang"> ~ Next.JS</p>
                  <p className="programmingLang"> ~ Java</p>
                  <p className="programmingLang"> ~ Typescript</p>
                </div>
              </div>
            </div>
          </div>
<div className="infoBoxes">
<div className="resumeBox-div">
            <a className="resumeBox" href="#"><span>Resume</span></a>
            </div>

            <div className="contactBox-div">
            <a className="contactBox" href="#"><span>Contact Me!</span></a>
            </div>
</div>
        </div>
      </div>
    </div>
  );
}

export default About;
