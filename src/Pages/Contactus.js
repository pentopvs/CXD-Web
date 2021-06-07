import React from "react";
import Livechat from "../assets/Home/live chat.svg";
import Schedulemeeting from "../assets/Home/meeting.svg";
import Submitrequest from "../assets/Home/request.svg";
import { AiFillWechat } from "react-icons/ai";
import { FaHandshake } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import MetaTags from "react-meta-tags";
import {Helmet} from 'react-helmet';
import Logo from "../assets/Home/logo.png";

export default () => {
  document.title = "Contact us | CXDeployer";
  return (
    <div>
          <Helmet>
        <title>Contact us | CXDeployer</title>
            <meta name="title" content="Contact us | CXDeployer"/>
            <meta name="description" content="The best customer engagement and support"/>
            {/* <!-- Open Graph / Facebook --> */}
            <meta property="og:type" content="website"/>
            <meta property="og:description" content="The best customer engagement and support" />
            <meta property="og:title" content="Contact us | CXDeployer" />
            <meta property="og:image" content={`https://cxdeployer.com${Logo}`} />
            <meta property="og:url" content={`https://cxdeployer.com/contactus`} />

            {/* <!-- Twitter -- /> */}
            <meta property="twitter:card" content="Blog" />
            <meta property="twitter:url" content={`https://cxdeployer.com/contactus`} />
            <meta property="twitter:title" content="Contact us | CXDeployer" />
            <meta property="twitter:description" content="The best customer engagement and support" />
            <meta property="twitter:image" content={`https://cxdeployer.com${Logo}`} />
      </Helmet>

      <div className=" mt-5 mb-5 text-center container pt-5">
        <h1>Contact Us</h1>
      </div>
      <div className="container mt-5 mb-5">
        <div className="row text-center pb-5">
          <div className="col-lg-4 col-sm-12">
            <div>
              <AiFillWechat className="display-1 text-first" />
              <h3>Live Chat</h3>
              <p className="mb-0 text-muted">Wait time: less than 2 minutes</p>
              <p className="mt-0 text-muted"> Working hours: 8:00am - 3:00pm</p>
              <a
                rel="noopener noreferrer"
                href="https://api.whatsapp.com/send?phone=+971562258664"
                target="_blank"
                class="btn btn-first mt-4"
              >
                Chat Now
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12">
            <FaHandshake className="display-1 text-first" />
            <h3>Meeting</h3>
            <p className="mb-0 text-muted">Schedule a meeting with us.</p>
            <p className="mt-0 text-muted">Response Time : 24hrs</p>
            <a
              href="https://calendly.com/cxdeployer?hide_landing_page_details=1%22"
              className="btn btn-first  mt-4"
            >
              Schedule time{" "}
            </a>
          </div>
          <div className="col-lg-4 col-sm-12">
            <MdEmail className="display-1 text-first" />
            <h3>Mail Us</h3>
            <p className="mb-0 text-muted">Send a Email directly</p>
            <p className="mt-0 text-muted"> Response Time: 1 Working day</p>
            <a
              rel="noopener noreferrer"
              href="mailto:contact@cxdeployer.com"
              target="_blank"
              class="btn btn-first mt-4"
            >
              Submit
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  cardImg: {
    width: "100px",
    height: "100px",
    padding: "10px",
    marginBottom: "10px",
  },
};
