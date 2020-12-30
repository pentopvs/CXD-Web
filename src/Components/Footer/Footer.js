import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import Logo1 from "../../assets/Logo1.png";
import {
  FaFacebookF,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaGoogle,
  FaYoutube,
} from "react-icons/fa";

export default () => {
  return (
    <footer className="w-100  pt-5 mt-5">
      <div className="row text-center">
        <img src={Logo1} alt="Footer Logo" className=" mx-auto" height="50px" />
      </div>
      <div className="w-100 mt-4">
        <div className="foot mx-auto d-flex justify-content-between px-5">
          <Link to="/terms" className="footer-pages">
            Terms Of Use
          </Link>
          <Link to="/privacypolicy" className="footer-pages">
            Privacy Policy
          </Link>
          <Link to="/cookies" className="footer-pages">
            Cookie Policy
          </Link>
        </div>
      </div>
      <div className="w-100 d-flex justify-content-center mt-4">
        <div className=" d-flex justify-content-around w-25">
          <a
            href="https://www.linkedin.com/company/cxdeployer/"
            target="_blank"
          >
            <FaLinkedin className="Footer-links" />
          </a>
          <a href="https://www.facebook.com/CXDeployer/" target="_blank">
            <FaFacebookF className="Footer-links" />
          </a>
          {/* <FaInstagram className="Footer-links" /> */}
          {/* <FaTwitter className="Footer-links" /> */}
          <a
            href="https://www.youtube.com/channel/UCBrH6aV8pSM4dpPPjJ5dkaA"
            target="_blank"
          >
            <FaYoutube className="Footer-links" />
          </a>
          {/* <FaGoogle className="Footer-links" /> */}
        </div>
      </div>
      <div className="text-center mt-3">
        <span className="footer-pages">2020 Cxdeployer. All Rights Reserved.</span>
      </div>
    </footer>
  );
};
