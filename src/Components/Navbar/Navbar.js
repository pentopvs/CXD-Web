import React, { useEffect } from "react";
import Logo1 from "../../assets/Logo1.png";
import { Link } from "react-router-dom";
import './Offer.css';
import Offermodal from "./Offermodal";

const $ = window.$;
const location = window.location;

export default () => {
  useEffect(() => {
    $("body").ready(() => {
      // Toggle navbar-shrink class when page is scrolled
      var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
          $("#mainNav").addClass("navbar-shrink");
        } else {
          $("#mainNav").removeClass("navbar-shrink");
        }
      };
      navbarCollapse();
      $(window).scroll(navbarCollapse);

      // Smooth scrolling
      $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
          location.pathname.replace(/^\//, "") ===
          this.pathname.replace(/^\//, "") &&
          location.hostname === this.hostname
        ) {
          var target = $(this.hash);
          target = target.length
            ? target
            : $("[name=" + this.hash.slice(1) + "]");
          if (target.length) {
            $("html, body").animate(
              {
                scrollTop: target.offset().top - 56,
              },
              1000,
              "easeInOutExpo"
            );
            return false;
          }
        }
      });

      // Closes responsive menu when a scroll trigger link is clicked
      $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
      });

      // Activate scrollspy to add active class to navbar items on scroll
      $("body").scrollspy({
        target: "#mainNav",
        offset: 56,
      });
    });
  }, []);

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-first fixed-top sticky-top"
      id="mainNav"
    >
      {/* <Offermodal open={true} />*/}
      <div className="container">
        <Link className="navbar-brand js-scroll-trigger" to="/">
          <img
            src={Logo1}
            tintcolor="red"
            alt="CXDeployer"
            width="150"
            height="50"
          />
        </Link>
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav text-uppercase ml-auto" >
            {/* <li className="nav-item">
						<a className="nav-link js-scroll-trigger" href="#benefits">Benefits</a>
					</li> */}
            <li className="nav-item dropdown" >
              <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" >Products 
              <span class="caret"></span>
              </a>
              <ul class="dropdown-menu">
                <li>
                  <Link className="nav-link js-scroll-trigger black-text" to="/cjm">
                    Journey Maps
                  </Link>
                </li>
                <li>
                  <Link className="nav-link js-scroll-trigger black-text" to="/persona">
                    Personas
                  </Link>
                </li>
                <li>
                  <Link className="nav-link js-scroll-trigger black-text" to="/empathy">
                    Empathy Maps
                  </Link>
                </li>
                <li >
                  <Link className="nav-link js-scroll-trigger black-text" to="/bmc">
                    Business Model Canvas
                  </Link>
                </li>
                
                <li>
                  <Link className="nav-link js-scroll-trigger black-text" to="/idea">
                    Idea Management
                  </Link>
                </li>
                <li>
                  <Link className="nav-link js-scroll-trigger black-text" to="/task">
                    Task Management
                  </Link>
                </li>
                <li>
                  <Link className="nav-link js-scroll-trigger" to="/features">
                    All Features
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link js-scroll-trigger" to="/pricing">
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link js-scroll-trigger" to="/blog">
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link js-scroll-trigger" to="/contactus">
                Contact US
              </Link>
            </li>
            <li className="nav-item">
              <a
                className="nav-link js-scroll-trigger "
                href="https://app.cxdeployer.com/#/sign-in"
              >
                Login
              </a>
            </li>
            <li className="nav-item">
              <a
                rel="noopener noreferrer"
                href="https://app.cxdeployer.com/#/"
                target="_blank"
                className="nav-link px-5 btn btn-light rounded-pill"
              >
                <font color="black ">Try for free</font>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
