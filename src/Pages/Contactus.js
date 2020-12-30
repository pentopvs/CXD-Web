import React from "react";
import Livechat from "../assets/Home/live chat.svg";
import Schedulemeeting from "../assets/Home/meeting.svg";
import Submitrequest from "../assets/Home/request.svg";
import { AiFillWechat } from "react-icons/ai";
import { FaHandshake } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default () => {
  document.title = "Contact us | CXDeployer";
  return (
    <div>
      {/* <div className="container mt-3">
        <div class="card-deck">
          <div className="card border-0 shadow-lg">
            <div className="d-flex justify-content-center">
              <img
                className="card-img-top pt-4"
                src={Livechat}
                style={styles.cardImg}
                alt="Card cap2"
                style={{ height: "180px" }}
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">Live Chat</h5>
              <p className="card-text">Wait time: less than 2 minutes</p>
              <p> Working hours: 8:00am - 3:00pm</p>
            </div>
            <div class="card-footer mb-3 text-center bg-transparent border-top-0">
              <a
                rel="noopener noreferrer"
                href="https://api.whatsapp.com/send?phone=+919669911101"
                target="_blank"
                class="btn btn-primary"
              >
                Chat Now
              </a>
            </div>
          </div>
          <div className="card border-0 shadow-lg">
            <div className="d-flex justify-content-center">
              <img
                className="card-img-top pt-4"
                src={Schedulemeeting}
                style={styles.cardImg}
                alt="Card cap1"
                style={{ height: "180px" }}
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">Schedule a meeting</h5>
              <p>Get a call within 24hrs</p>
            </div>
            <div className="card-footer mb-3 text-center bg-transparent border-top-0">
        
            <a href="https://calendly.com/gharatanurag778/15min"  >Schedule time </a>
            </div>
          </div>
          <div className="card border-0 shadow-lg">
            <div className="d-flex justify-content-center">
              <img
                className="card-img-top pt-4"
                src={Submitrequest}
                style={styles.cardImg}
                alt="Card cap3"
                style={{ height: "180px" }}
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">Submit a request</h5>
              <p className="card-text">Send a request directly to us!</p>
              <p>Maximun response time: within 1 business day</p>
            </div>
            <div class="card-footer mb-3 text-center bg-transparent border-top-0">
              <a
                rel="noopener noreferrer"
                href="mailto:contact@xsdeployer.com"
                target="_blank"
                class="btn btn-primary"
              >
                Submit
              </a>
            </div>
          </div>
        </div>
      </div> */}
      <div className=" mt-5 mb-5 text-center container">
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
                href="https://api.whatsapp.com/send?phone=+919669911101"
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
