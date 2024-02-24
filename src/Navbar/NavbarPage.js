import React from "react";
import "./NavbarPage.scss";
import mainLogo from "../assets/images/CropmainLogo.png";
import Logo from "../assets/images/ABLogo.png";

function Navbar() {
  return (
    <div className="outterNav-div">
      <div className="fix-div">
        <div className="innerNav-div">
          <div className="img-div">
            <img className="mainLogo" src={Logo} />
          </div>
          <div className="quicktap">
            <a className="navbarTags">about</a>
            <a className="navbarTags">resume</a>
            <a className="navbarTags">experience</a>
            <a className="navbarTags">contact</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
