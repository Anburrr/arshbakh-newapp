import React from "react";
import "./App.scss";
import LandingPage from "./LandingPage/LandingPage";
import Starfield from 'react-starfield';
import About from "./About/About"
import Experience from "./Experience/Experience";

function App() {
  return (
    <div className="App">
            <Starfield
        starCount={5000}
        starColor={[255, 255, 255]}
        speedFactor={0.01}
        backgroundColor="black"
      />
<LandingPage/>
<About/>
<Experience/>
    </div>
  );
}

export default App;
