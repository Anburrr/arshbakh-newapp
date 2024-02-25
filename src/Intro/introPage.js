import "./introPage.scss";
import { useRef, useEffect, useState } from "react";
import TextTransition, { presets } from "react-text-transition";

const charecteristics = [
  "Programmer",
  "Front End Developer",
  "Athlete",
  "Student",
  "Entrepreneur",
];

function IntroPage() {
  const mainName = useRef(null);
  const text = useRef(null);
  const walk = 13.5;
  const [textShadow, setTextShadow] = useState(
    "0 0 0 rgba(189, 184, 184, 0.7)"
  );
  const [index, setIndex] = useState(0);

  function shadow(e) {
    const { offsetLeft: left, offsetTop: top, offsetWidth: width, offsetHeight: height } = mainName.current;
    const x = e.pageX - left; // Adjust mouse coordinates relative to the div
    const y = e.pageY - top; // Adjust mouse coordinates relative to the div
    const xWalk = -((x / width) * walk - walk / 2);
    const yWalk = -((y / height) * walk - 15 - walk / 2);
  
    // Ensure xWalk and yWalk are within the boundaries of the div
    const newXWalk = Math.max(Math.min(xWalk, walk / 2), -walk / 2);
    const newYWalk = Math.max(Math.min(yWalk, walk / 2), -walk / 2);
  
    const newShadow = `${newXWalk}px ${newYWalk}px 0 rgba(128, 128, 128, 1)`;
    setTextShadow(newShadow);
  }
  
  useEffect(() => {
    if (mainName.current) {
      document.addEventListener("mousemove", shadow);

      return () => {
        document.removeEventListener("mousemove", shadow);
      };
    }
  }, []);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <>
      <div className="Introduction">
        <div className="introInfo">
          <div className="nameIntro">
            <p className="hello">Hey There! My name is</p>
            <div className="mainName" ref={mainName}>
              <h1 ref={text} style={{ textShadow }} className="Arsh">
                Arsh Bakhshi
              </h1>
            </div>
              <p className="welcome">
                Known As A
                <TextTransition springConfig={presets.wobbly}>
                  {charecteristics[index % charecteristics.length]}
                </TextTransition>
              </p>
          </div>
        </div>

<div className="scrollButton-div">
       <div className="scrollButton">
        <a className="roti" href="#aboutHeader">
        <span></span>
        <span></span>
        <span></span>
        </a>
       </div>
      </div>
      </div>
    </>
  );
}

export default IntroPage;
