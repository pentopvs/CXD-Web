import React from "react";
import Tick from "../../assets/Home/tick.png";
import Img1 from "../../assets/Features/Persona.png";
import Img2 from "../../assets/Features/Empathy.png";
import Img3 from "../../assets/Features/Business-model-canvas.png";
import Img4 from "../../assets/Features/CUstomer-journey-map.png";
import Img5 from "../../assets/Features/Edit-Idea.png";
import Img6 from "../../assets/Features/Post-new-idea.png";
import Logo from "../../assets/Home/logo.png";
import MetaTags from 'react-meta-tags';


export default () => {
  return (
    <div className=" pt-5 bg-features">
         <div className="wrapper">
          <MetaTags>
            <title>Persona | Empathy | Value | Journey Mapping | Innovation | Kanban | CXDeployer</title>
            <meta name="title" content="Persona | Empathy | Value | Journey Mapping | Innovation | Kanban | CXDeployer"/>
            <meta name="description" content="Manage CX transformation program and achieve customer experience excellence"/>

            {/* <!-- Open Graph / Facebook --> */}
            <meta property="og:type" content="website"/>
            <meta property="og:description" content="Manage CX transformation program and achieve customer experience excellence." />
            <meta property="og:title" content="Persona | Empathy | Value | Journey Mapping | Innovation | Kanban | CXDeployer" />
            <meta property="og:image" content={`https://cxdeployer.com${Logo}`} />
            <meta property="og:url" content="https://cxdeployer.com/features" />

            {/* <!-- Twitter -- /> */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="https://cxdeployer.com/features" />
            <meta property="twitter:title" content="Persona | Empathy | Value | Journey Mapping | Innovation | Kanban | CXDeployer" />
            <meta property="twitter:description" content="Manage CX transformation program and achieve customer experience excellence" />
            <meta property="twitter:image" content={`https://cxdeployer.com${Logo}`}   />

          </MetaTags>
        </div>
      <div className="intro-text text-center py-md-5 mb-5 p-5">
        <div className="intro-desc mb-0">
          <h5>
            <u>The only solution you need to </u>
          </h5>
        </div>
        <div className="intro-lead-in text-uppercase ">
          <h1 className="text-first">
            <strong>Manage and Improve Your Customer’s Experience </strong>
          </h1>
        </div>
        <div className="intro-desc mt-5 lead mt-0">
          The best-integrated experience management and design thinking tool
          with all features to design personas, empathy mapping, journey
          mapping, business model canvas, capture ideas to improve the current
          experience and manage the implementation of the best idea to realize the
          future experience.
        </div>
        <div className="w-100 d-flex justify-content-center">
          <a
            rel="noopener noreferrer"
            href="https://app.cxdeployer.com/#/"
            target="_blank"
            className="btn btn-first mr-3 rounded-pill shadow-lg"
          >
            <font color="white">Try CX-Deployer for Free</font>
          </a>
          <a
            rel="noopener noreferrer"
            href="/pricing"
            target="_blank"
            className="btn btn-outline-first ml-3 rounded-pill shadow-lg"
          >
            <font>Check Pricing</font>
          </a>
        </div>
      </div>
      <div className="features-section bg-offwhite p-5 ">
        <h3 className="text-center  font-italic">Persona</h3>
        <h2 className="text-center my-3 ">Design your customer’s persona</h2>
        <div className="row">
          <div className="col-12 col-md-6 mt-5 order-2 order-sm-1 px-5 ">
            <div className="d-flex align-items-center mb-5">
              <img
                src={Tick}
                alt=""
                className="img-fluid mr-5"
                width="40"
                height="40"
              />
              <h5>Create custom layout</h5>
            </div>
            <div className="d-flex align-items-center mb-5">
              <img
                src={Tick}
                alt=""
                className="img-fluid mr-5"
                width="40"
                height="40"
              />
              <h5>Upload pictures</h5>
            </div>
            <div className="d-flex align-items-center mb-5">
              <img
                src={Tick}
                alt=""
                className="img-fluid mr-5"
                width="40"
                height="40"
              />
              <h5>Rich Text Editor</h5>
            </div>
            <div className="d-flex align-items-center mb-5">
              <img
                src={Tick}
                alt=""
                className="img-fluid mr-5"
                width="40"
                height="40"
              />
              <h5>Multiple Persona views</h5>
            </div>
          </div>
          <div className="col-12 col-md-6 order-1 order-sm-2">
            <img src={Img1} className="img-fluid" alt="" />
          </div>
        </div>
        <div className="text-center mt-3">
          <a
            rel="noopener noreferrer"
            href="https://app.cxdeployer.com/#/"
            target="_blank"
            className="btn btn-second text-white shadow-lg p-4"
          >
            DESIGN PERSONA ONLINE NOW
          </a>
        </div>
      </div>
      <div className="features-section p-5">
        <h3 className="text-center ">Empathy Map</h3>
        <h2 className="text-center my-3">
          Describe your customer’s thinking, feeling, fear, hope and dreams
        </h2>
        <div className="row">
          <div className="col-12 col-md-6  ">
            <img src={Img2} className="img-fluid" alt="" />
          </div>
          <div className="col-12 col-md-6 mt-5  p-5">
            <div className="d-flex align-items-center mb-5">
              <img
                src={Tick}
                alt=""
                className="img-fluid mr-5"
                width="40"
                height="40"
              />
              <h5>Map empathy for multiple personas</h5>
            </div>
            <div className="d-flex align-items-center mb-5">
              <img
                src={Tick}
                alt=""
                className="img-fluid mr-5"
                width="40"
                height="40"
              />
              <h5>Compare and analyze empathy maps</h5>
            </div>
            <div className="d-flex align-items-center mb-5">
              <img
                src={Tick}
                alt=""
                className="img-fluid mr-5"
                width="40"
                height="40"
              />
              <h5>Intuitive platform with zero learning curve</h5>
            </div>
            <div className="d-flex align-items-center mb-5">
              <img
                src={Tick}
                alt=""
                className="img-fluid mr-5"
                width="40"
                height="40"
              />
              <h5>A complete activity log history</h5>
            </div>
          </div>
        </div>
        <div className="text-center mt-3">
          <a
            rel="noopener noreferrer"
            href="https://app.cxdeployer.com/#/"
            target="_blank"
            className="btn  btn-second text-white border-0 shadow-lg  p-4"
          >
            CREATE EMPATHY MAP ONLINE NOW
          </a>
        </div>
      </div>
      <div className="features-section bg-offwhite p-5">
        <h3 className="text-center text-black">Business Model Canvas</h3>
        <h2 className="text-center text-black my-3">
          Design and analyze the solution’s value proposition
        </h2>
        <div className="row">
          <div className="col-12 col-md-6 mt-5 order-2 order-sm-1 p-5">
            <div className="d-flex align-items-center mb-5">
              <img
                src={Tick}
                alt=""
                className="img-fluid mr-5"
                width="40"
                height="40"
              />
              <h5>Easy to organize in a page</h5>
            </div>
            <div className="d-flex align-items-center mb-5">
              <img
                src={Tick}
                alt=""
                className="img-fluid mr-5"
                width="40"
                height="40"
              />
              <h5>Add multiple cards per section</h5>
            </div>
            <div className="d-flex align-items-center mb-5">
              <img
                src={Tick}
                alt=""
                className="img-fluid mr-5"
                width="40"
                height="40"
              />
              <h5>Real-time collaboration</h5>
            </div>
            <div className="d-flex align-items-center mb-5">
              <img
                src={Tick}
                alt=""
                className="img-fluid mr-5"
                width="40"
                height="40"
              />
              <h5>Comments and feedback</h5>
            </div>
          </div>
          <div className="col-12 col-md-6 order-1 order-sm-2 p-5">
            <img src={Img3} className="img-fluid" alt="" />
          </div>
        </div>
        <div className="text-center mt-3">
          <a
            rel="noopener noreferrer"
            href="https://app.cxdeployer.com/#/"
            target="_blank"
            className="btn  btn-second text-white shadow-lg p-4"
          >
            CREATE BUSINESS MODEL CANVAS ONLINE NOW
          </a>
        </div>
      </div>
      <div className="features-section p-5">
        <h3 className="text-center ">Customer Journey Map</h3>
        <h2 className="text-center my-3">
          Visualize your customer’s experience and create a professional looking
          journey map{" "}
        </h2>
        <div className="row">
          <div className="col-12 col-md-6 order-1 order-md-2">
            <img src={Img4} className="img-fluid" alt="" />
          </div>
          <div className="col-12 col-md-6 mt-5 order-2">
            <div className="d-flex align-items-center mb-5">
              <img
                src={Tick}
                alt=""
                className="img-fluid mr-5"
                width="40"
                height="40"
              />
              <h5>Natural layout to quickly onboard your team</h5>
            </div>
            <div className="d-flex align-items-center mb-5">
              <img
                src={Tick}
                alt=""
                className="img-fluid mr-5"
                width="40"
                height="40"
              />
              <h5>Export to PNG</h5>
            </div>
            <div className="d-flex align-items-center mb-5">
              <img
                src={Tick}
                alt=""
                className="img-fluid mr-5"
                width="40"
                height="40"
              />
              <h5>
                Multiple lane types – Phase, Card, Bubble, Line, Image and File
              </h5>
            </div>
            <div className="d-flex align-items-center mb-5">
              <img
                src={Tick}
                alt=""
                className="img-fluid mr-5"
                width="40"
                height="40"
              />
              <h5>Add visuals – icon and images</h5>
            </div>
          </div>
        </div>
        <div className="text-center mt-3">
          <a
            rel="noopener noreferrer"
            href="https://app.cxdeployer.com/#/"
            target="_blank"
            className="btn  btn-second text-white border-0 shadow-lg p-4"
          >
            MAP CUSTOMER JOURNEY ONLINE NOW
          </a>
        </div>
      </div>
      <div className="features-section bg-offwhite p-5">
        <h3 className="text-center ">Ideation</h3>
        <h2 className="text-center my-3">
          Involve and engage everyone to get ideas to improve customer
          experience{" "}
        </h2>
        <div className="row">
          <div className="col-12 col-md-6 mt-5 order-2 px-5 order-md-1">
            <div className="d-flex align-items-center mb-5">
              <img
                src={Tick}
                alt=""
                className="img-fluid mr-5"
                width="40"
                height="40"
              />
              <h5>Share and build on each other’s ideas</h5>
            </div>
            <div className="d-flex align-items-center mb-5">
              <img
                src={Tick}
                alt=""
                className="img-fluid mr-5"
                width="40"
                height="40"
              />
              <h5>Crowd vote and score ideas</h5>
            </div>
            <div className="d-flex align-items-center mb-5">
              <img
                src={Tick}
                alt=""
                className="img-fluid mr-5"
                width="40"
                height="40"
              />
              <h5>Categorize by benefit type and tag ideas</h5>
            </div>
            <div className="d-flex align-items-center mb-5">
              <img
                src={Tick}
                alt=""
                className="img-fluid mr-5"
                width="40"
                height="40"
              />
              <h5>Post idea anonymously</h5>
            </div>
          </div>
          <div className="col-12 col-md-6 order-1 order-md-2">
            <img src={Img6} className="img-fluid" alt="" />
          </div>
        </div>
        <div className="text-center mt-3">
          <a
            rel="noopener noreferrer"
            href="https://app.cxdeployer.com/#/"
            target="_blank"
            className="btn btn-second text-white border-0 shadow-lg p-4"
          >
            TRY CXDEPLOYER FOR IDEATION
          </a>
        </div>
      </div>
      <div className="features-section">
        <h3 className="text-center ">Kanban Board</h3>
        <h2 className="text-center my-3">
          Manage tasks to implement the best improvement idea{" "}
        </h2>
        <div className="row">
          <div className="col-12 col-md-6">
            <img src={Img5} className="img-fluid" alt="" />
          </div>
          <div className="col-12 col-md-6 mt-5 ml-2 ml-lg-0">
            <div className="d-flex align-items-center mb-5">
              <img
                src={Tick}
                alt=""
                className="img-fluid mr-5"
                width="40"
                height="40"
              />
              <h5>Select from a range of improvement methodologies</h5>
            </div>
            <div className="d-flex align-items-center mb-5">
              <img
                src={Tick}
                alt=""
                className="img-fluid mr-5"
                width="40"
                height="40"
              />
              <h5>Pre-built tasks to get you started</h5>
            </div>
            <div className="d-flex align-items-center mb-5">
              <img
                src={Tick}
                alt=""
                className="img-fluid mr-5"
                width="40"
                height="40"
              />
              <h5>Set the deadline to complete</h5>
            </div>
            <div className="d-flex align-items-center mb-5">
              <img
                src={Tick}
                alt=""
                className="img-fluid mr-5"
                width="40"
                height="40"
              />
              <h5>
                Drag and drop task as it progresses to easily change the status
              </h5>
            </div>
          </div>
        </div>
        <div className="text-center mt-3">
          <a
            rel="noopener noreferrer"
            href="https://app.cxdeployer.com/#/"
            target="_blank"
            className="btn btn-second text-white border-0 shadow-lg p-4"
          >
            MANAGE YOUR TASK WITH EASE
          </a>
        </div>
      </div>
    </div>
  );
};
