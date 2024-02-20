import "./LandingPage.scss";

import React from 'react'
import IntroPage from "../Intro/introPage";
import Navbar from "../Navbar/NavbarPage"

function LandingPage() {
  return (
    <div>
      <Navbar/>
        <IntroPage />
        
    </div>
  )
}

export default LandingPage