import React from "react";
import Banner1 from "../../../assets/Home/CX-deployer-banner-3.png";
import Banner2 from "../../../assets/Home/CX-deployer-banner-2.png";
import Banner3 from "../../../assets/Home/CX-deployer-banner-1.png";
import Banner4 from "../../../assets/Home/CX-deployer-banner-4.png";
import Banner1Sm from "../../../assets/Home/CX-deployer-banner-9.png";
import Banner2Sm from "../../../assets/Home/CX-deployer-banner-2-sm.png";
import Banner3Sm from "../../../assets/Home/CX-deployer-banner-1-sm.png";
import Banner4Sm from "../../../assets/Home/CX-deployer-banner-4-sm.png";
import Slider1 from "../../../assets/Home/slider1.png";
import Slider2 from "../../../assets/Home/slider2.jpg";
import Slider3 from "../../../assets/Home/slider3.png";
import Slider4 from "../../../assets/Home/slider4.png";
import { Grid } from "@material-ui/core";
import "../../../index.css";
// Gradient
// #0a1d44 top
// #3360d9

// 1040
// 951

export default () => {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel bg-white rounded-lg slide"
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to={0}
          className="active"
        />
        <li data-target="#carouselExampleIndicators" data-slide-to={1} />
        <li data-target="#carouselExampleIndicators" data-slide-to={2} />
        <li data-target="#carouselExampleIndicators" data-slide-to={3} />
      </ol>
      <div className="carousel-inner">
        <div
          className="carousel-item rounded active"
          style={{
            minHeight: "80vh",
          }}
        >
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
            className="carousel-div mx-auto"
            xs={11}
          >
            <Grid item md={12} lg={6} className="d-md-none">
              <img src={Banner1Sm} alt="" className="img-fluid" />
            </Grid>
            <Grid item md={12} lg={5}>
              <div className="intro-text p-md-5">
                <div className="intro-lead-in text-uppercase ">
                  <font style={{ fontFamily: "arial" }}>
                    <strong>
                      Transform your customer <br /> experience{" "}
                    </strong>
                  </font>
                </div>
                <div className="intro-desc">
                  <font style={{ fontFamily: "Arial" }}>
                    The design thinking platform for you and your team for
                    designing personas and business models, mapping customer
                    journeys, experience innovation and execution management to
                    improve customer experience.
                  </font>
                </div>
                <div style={{ textAlign: "center" }}>
                  <a
                    rel="noopener noreferrer"
                    href="https://app.cxdeployer.com/#/"
                    target="_blank"
                    className="btn btn-first"
                    style={{ zIndex: "100", align: "left", width: "10" }}
                  >
                    <font color="white">Try for free</font>
                  </a>
                  <p>
                    <small>No Credit Card Required!</small>
                  </p>
                </div>
              </div>
            </Grid>
            <Grid
              item
              container
              direction="row"
              justify="center"
              alignItems="center"
              lg={7}
              className="d-none d-md-block"
            >
              <img
                src={Banner1Sm}
                alt=""
                className="img-fluid"
                style={{ height: "400px !important" }}
              />
            </Grid>
          </Grid>
        </div>
        <div
          className="carousel-item rounded"
          style={{
            minHeight: "88vh",
          }}
        >
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
            className="carousel-div mx-auto"
            xs={11}
          >
            <Grid item md={12} lg={6} className="d-md-none">
              <img
                src={Banner2Sm}
                alt=""
                style={{ minHeight: "10px" }}
                className="img-fluid"
              />
            </Grid>

            <Grid item md={12} lg={5}>
              <div className="intro-text p-md-5">
                <div className="intro-lead-in text-uppercase ">
                  <font style={{ fontFamily: "arial" }}>
                    <strong>Collaborate and map the current experience</strong>
                  </font>
                </div>
                <div className="intro-desc">
                  <font style={{ fontFamily: "Arial" }}>
                    The simplest tool to capture the current experience along
                    with collaborating and sharing feedback with the team in
                    real-time for mapping persona, empathy and customer journey.
                  </font>
                </div>
                <div style={{ textAlign: "center" }}>
                  <a
                    rel="noopener noreferrer"
                    href="https://app.cxdeployer.com/#/"
                    target="_blank"
                    className="btn btn-first"
                    style={{ zIndex: "100", align: "left", width: "10" }}
                  >
                    <font color="white">Try for free</font>
                  </a>
                  <p>
                    <small>No Credit Card Required!</small>
                  </p>
                </div>
              </div>
            </Grid>
            <Grid
              item
              container
              direction="row"
              justify="center"
              alignItems="center"
              lg={7}
              className="d-none d-md-block"
            >
              <img
                src={Banner2Sm}
                alt=""
                style={{ minHeight: "10px" }}
                className="img-fluid"
              />
            </Grid>
          </Grid>
        </div>
        <div
          className="carousel-item third rounded"
          style={{
            minHeight: "88vh",
          }}
        >
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
            className="carousel-div mx-auto"
            xs={11}
          >
            <Grid item md={12} lg={6} className="d-md-none">
              <img
                src={Banner3Sm}
                alt=""
              />
            </Grid>

            <Grid item md={12} lg={5}>
              <div className="intro-text p-md-5">
                <div className="intro-lead-in text-uppercase ">
                  <font style={{ fontFamily: "arial" }}>
                    <strong>Capture ideas to improve experience</strong>
                  </font>
                </div>
                <div className="intro-desc">
                  <font style={{ fontFamily: "Arial" }}>
                    A powerful and intuitive tool to capture and discover the
                    most impactful ideas from everyone to innovate on user
                    experience.
                  </font>
                </div>
                <div style={{ textAlign: "center" }}>
                  <a
                    rel="noopener noreferrer"
                    href="https://app.cxdeployer.com/#/"
                    target="_blank"
                    className="btn btn-first"
                    style={{ zIndex: "100", align: "left", width: "10" }}
                  >
                    <font color="white">Try for free</font>
                  </a>
                  <p>
                    <small>No Credit Card Required!</small>
                  </p>
                </div>
              </div>
            </Grid>
            <Grid
              item
              container
              direction="row"
              justify="center"
              alignItems="center"
              lg={7}
              className="d-none d-md-block"
            >
              <img src={Banner3Sm} alt="" />
            </Grid>
          </Grid>
        </div>
        <div
          className="carousel-item fourth rounded"
          style={{
            minHeight: "88vh",
          }}
        >
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
            className="carousel-div mx-auto"
            xs={11}
          >
            <Grid item md={12} lg={6} className="d-md-none">
              <img
                src={Banner4Sm}
                alt=""
              />
            </Grid>

            <Grid item md={12} lg={5}>
              <div className="intro-text p-md-5">
                <div className="intro-lead-in text-uppercase ">
                  <font style={{ fontFamily: "arial" }}>
                    <strong>Manage deployment of the best idea </strong>
                  </font>
                </div>
                <div className="intro-desc">
                  <font style={{ fontFamily: "Arial" }}>
                    An integrated software to project manage the execution of
                    the best idea with visual task management to realize the
                    future state of the customer experience.
                  </font>
                </div>
                <div style={{ textAlign: "center" }}>
                  <a
                    rel="noopener noreferrer"
                    href="https://app.cxdeployer.com/#/"
                    target="_blank"
                    className="btn btn-first"
                    style={{ zIndex: "100", align: "left", width: "10" }}
                  >
                    <font color="white">Try for free</font>
                  </a>
                  <p>
                    <small>No Credit Card Required!</small>
                  </p>
                </div>
              </div>
            </Grid>
            <Grid
              item
              container
              direction="row"
              justify="center"
              alignItems="center"
              lg={7}
              className="d-none d-md-block"
            >
              <img
                src={Banner4Sm}
                alt=""
              />
            </Grid>
          </Grid>
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};
