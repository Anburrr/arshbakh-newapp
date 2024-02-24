import React from "react";
import "./App.scss";
import LandingPage from "./LandingPage/LandingPage";
import Starfield from 'react-starfield';
import About from "./About/About"
import Experience from "./Experience/Experience";
import SidebarPage from "./sidebar/SidebarPage";

function App() {
  return (
    <div className="App">
      <div className="starfieldContainer">
            <Starfield
            
        starCount={5000}
        starColor={[255, 255, 255]}
        speedFactor={0.01}
        backgroundColor="black"
      />
      </div>
<LandingPage/>
<About/>
<Experience/>
<SidebarPage/>
    </div>
  );
}

export default App;
