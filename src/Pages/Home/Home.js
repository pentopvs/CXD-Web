import React, { Component } from "react";
import CookieConsent from "react-cookie-consent";
import Carousel from "./Sections/Carousel";
import Benefits from "./Sections/Benefits";
import "./Home.css";
import Features from "./Sections/Features";
import CXDeployer from "./Sections/CXDeployer";
import Customerexperience from "./Sections/Customerexperience";
import AboveFooter from "./Sections/AboveFooter";
import CarouselNew from "./Sections/CarouselNew";
import MetaTags from 'react-meta-tags';
import Logo from '../../assets/Home/logo.png';
export default class extends Component {
  render = () => {
    document.title =
      "Customer Journey Mapping | Ideation Management | Task Management | CXDeployer";
    return (
      <div>
      <div className="wrapper">
          <MetaTags>
            <title>Customer Journey Mapping | Ideation Management | Task Management – CXDeployer </title>
            <meta name="description" content="World’s 1st integrated customer experience management solution to design persona, empathy, and journey maps. Experience Innovation and execution management." />
            <meta property="og:title" content="Customer Journey Mapping | Ideation Management | Task Management – CXDeployer " />
            <meta property="og:image" content={Logo} />
          </MetaTags>
        </div>
        <div
          className="bg-gradient px-3 px-lg-5 py-3"
          style={{ minHeight: "90vh", height: "auto" }}
        >
          <CarouselNew />
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
