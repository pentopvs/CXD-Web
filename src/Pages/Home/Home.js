import React, { Component } from "react";
import CookieConsent from "react-cookie-consent";
import Carousel from "./Sections/Carousel";
import Benefits from "./Sections/Benefits";
import "./Home.css";
import Features from "./Sections/Features";
import CXDeployer from "./Sections/CXDeployer";
import Customerexperience from "./Sections/Customerexperience";
import AboveFooter from "./Sections/AboveFooter";

export default class extends Component {
  render = () => {
    document.title =
      "Customer Journey Mapping | Ideation Management | Task Management | CXDeployer";
    return (
      <div>
        <div
          className="bg-gradient px-3 px-lg-5 py-3"
          style={{ minHeight: "90vh", height: "auto" }}
        >
          <Carousel />
        </div>
        <div className="container-fluid mt-5">
          <div id="benefits" className="mt-5">
            <Benefits />
          </div>
        </div>
        <div className="mt-5">
          <div id="CXDeployer" className="mt-5">
            <CXDeployer />
          </div>
          <div id="Customerexperience" className="mt-5">
            <Customerexperience />
          </div>
          <div id="features" className="mt-5">
            <Features />
          </div>
          <div className="mt-5">
            <AboveFooter />
          </div>
        </div>
        <CookieConsent
          location="bottom"
          buttonText="I accept"
          cookieName="myAwesomeCookieName2"
          style={{ background: "#101010" }}
          buttonStyle={{
            background: "#101010",
            fontSize: "18px",
            borderRadius: "8px",
            color: "white",
            border: "border: 2px solid #4CAF50",
          }}
          expires={150}
        >
          We use cookies to give you the best browsing experience possible.By
          clicking 'I accept' or continuing to use our site you agree to the use
          of cookies.
        </CookieConsent>
      </div>
    );
  };
}
