import React, { Component, useState, useEffect } from "react";
import CookieConsent from "react-cookie-consent";
import Carousel from "./Sections/Carousel";
import Benefits from "./Sections/Benefits";
import "./Home.css";
import Features from "./Sections/Features";
import CXDeployer from "./Sections/CXDeployer";
import Customerexperience from "./Sections/Customerexperience";
import AboveFooter from "./Sections/AboveFooter";
import CarouselNew from "./Sections/CarouselNew";
import MetaTags from "react-meta-tags";
import MetaTagsServer from "react-meta-tags/server";
import { MetaTagsContext } from "react-meta-tags";
import { Helmet } from "react-helmet";
import Logo from "../../assets/Home/logo.png";
import Logo_New from "../../assets/favicon-1_200x200.png";
import { Modal } from "react-bootstrap";
import YoutubeEmbed from "../../Components/YoutubeEmbed";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import CompanyLogo from "../../Components/CompanyLogo";

export default function Home() {
  const handleCloseModal = () => {
    let modalclose = document.getElementById("modalPopup");
    modalclose.style.display = "none";
  };
  return (
    <div>
      <div className="wrapper">
        <Helmet>
          <title>
            Online Tool for mapping customer journey and customer experience –
            CXDeployer{" "}
          </title>
          <meta
            name="title"
            content="Online Tool  for mapping customer journey and customer experience."
          />
          <meta
            name="description"
            content="Design customer journey mapping and customer experience. Tool to capture the current experience along with collaborating and sharing feedback for mapping persona, empathy and customer journey."
          />

          <meta property="og:type" content="website" />
          <meta
            property="og:description"
            content="Design customer journey mapping and customer experience. Tool to capture the current experience along with collaborating and sharing feedback for mapping persona, empathy and customer journey."
          />
          <meta
            property="og:title"
            content="Online Tool  for mapping customer journey and customer experience."
          />
          <meta
            property="og:image"
            content={`https://cxdeployer.com${Logo_New}`}
          />

          <meta property="og:locale" content="en_US" />
          <meta property="og:url" content="https://cxdeployer.com/" />
          <meta property="og:site_name" content="CX Deployer" />

          <meta property="twitter:card" content="CXdeployer" />
          <meta property="twitter:url" content="https://cxdeployer.com/" />
          <meta
            property="twitter:description"
            content="World’s 1st integrated customer experience management solution to design persona, empathy, and journey maps. Experience Innovation and execution management."
          />
          <meta
            property="twitter:title"
            content="Customer Journey Mapping | Ideation Management | Task Management – CXDeployer "
          />
          <meta
            property="twitter:image"
            content={`https://cxdeployer.com${Logo}`}
          />
        </Helmet>
      </div>
      <div className="bg-gradient px-3 px-lg-5 py-5" style={{ height: "auto" }}>
        <CarouselNew />
      </div>
      <CompanyLogo/>
      <div id="modalPopup" className="container-fluid mt-1 youtube_embed">
        <HighlightOffIcon
          onClick={handleCloseModal}
          style={{
            marginLeft: "88%",
            color: "white",
            marginBottom: "5px",
            cursor: "pointer",
          }}
        />

        <YoutubeEmbed />
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
}
