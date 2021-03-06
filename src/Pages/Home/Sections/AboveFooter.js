import React from "react";
import { Link } from "react-router-dom";

export default () => (
  <div className="container">
    <div
      className="rounded-lg p-5 px-3 px-md-5  shadow-lg text-center"
      style={{ backgroundColor: "#EAF0F1" }}
    >
      <div className="h3">
        CXDeployer transforms the way you conduct
        design thinking workshops.
      </div>
      <div className="d-flex flex-column flex-md-row justify-content-center py-4">
        <div
          className="btn rounded-lg text-white px-4 py-2"
        >
          <a
            rel="noopener noreferrer"
            href="https://app.cxdeployer.com/#/"
            target="_blank"
            style={{borderRadius:'5rem !important'}}
            className="text-white btn-first"
          >
            Try for free
          </a>
        </div>
        <Link className="btn rounded-lg px-4 py-2 ml-md-4 mt-2 mt-md-0 text-first border text-dark" to="/contactus">
        Request a demo
          </Link>
        {/* <a className="btn rounded-lg px-4 py-2 ml-md-4 mt-2 mt-md-0 text-first border text-dark">
        </a> */}
      </div>
    </div>
  </div>
);
