import React, { Component, useState,useEffect } from "react";
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
import {Modal} from 'react-bootstrap'
//import Offermodal from '../../Components/Navbar/Offermodal.js'
export default function Home() {
  const [popupModal,setPopupModal] = useState(false)
  
    const popupModalHandle =()=>{
      setPopupModal(true)

    }
    useEffect(()=>{
    //  window.onload = popupModalHandle()

    },[])
    return (
      
      <div>
        {/* <Modal size="lg" centered style={{width:'50%',marginLeft:'25%'}} show={popupModal} onHide={() => setPopupModal(false)}>
      <Modal.Header closeButton>
        
        </Modal.Header>
      <Modal.Body >
        <div>

        <a href="https://crozdesk.com/customer-service-crm/customer-experience-software/top-list" target="_blank" title="Top Customer Experience Software on Crozdesk 2020">
  <img src="https://crozdesk.com/infographics/customer-experience-software-2020/embed" style={{width:'fit-content',marginRight:10}} width="1070"  border="0" alt="Top 20 Customer Experience Software of 2020 Infographic" />
</a>

        </div>
      

        
      </Modal.Body>
      
    </Modal> */}
      <div className="wrapper" o >
          <MetaTags>
            <title>Customer Journey Mapping | Ideation Management | Task Management – CXDeployer </title>
            <meta name="title" content="Customer Journey Mapping | Ideation Management | Task Management – CXDeployer "/>
            <meta name="description" content="World’s 1st integrated customer experience management solution to design persona, empathy, and journey maps. Experience Innovation and execution management."/>

            {/* <!-- Open Graph / Facebook --> */}
            <meta property="og:type" content="website"/>
            <meta property="og:description" content="World’s 1st integrated customer experience management solution to design persona, empathy, and journey maps. Experience Innovation and execution management." />
            <meta property="og:title" content="Customer Journey Mapping | Ideation Management | Task Management – CXDeployer " />
            <meta property="og:image" content={`https://cxdeployer.com${Logo}`} />
            <meta property="og:url" content="https://cxdeployer.com/" />

            {/* <!-- Twitter -- /> */}
            <meta property="twitter:card" content="CXdeployer" />
            <meta property="twitter:url" content="https://cxdeployer.com/" />
            <meta property="twitter:description" content="World’s 1st integrated customer experience management solution to design persona, empathy, and journey maps. Experience Innovation and execution management." />
            <meta property="twitter:title" content="Customer Journey Mapping | Ideation Management | Task Management – CXDeployer " />
            <meta property="twitter:image" content={`https://cxdeployer.com${Logo}`} />

          </MetaTags>
        </div>
          <div
          className="bg-gradient px-3 px-lg-5 py-3"
          style={{height: "auto" }}
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
 //       <Offermodal open={popupModal} />
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

