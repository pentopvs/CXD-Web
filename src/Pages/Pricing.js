import React, { useState, useEffect } from "react";
import "../index.css";
import $ from "jquery";
import Free from "../assets/Pricing/free.svg";
import Startup from "../assets/Pricing/startup.svg";
import Growth from "../assets/Pricing/growth.svg";
import Enterprise from "../assets/Pricing/enterprise.svg";
import { Link } from "react-router-dom";
import MetaTags from "react-meta-tags";
import Logo from "../assets/Home/logo.png";
import "../index.css";
// const Collapse = ({ question, answer, id }) => (
//   <div className="accordion" id="accordionExample">
//     <div className="card">
//       <div className="card-header" id="headingOne">
//         <h2
//           className="mb-0 c-pointer"
//           data-toggle="collapse"
//           data-target={`#question${id}`}
//           aria-expanded="true"
//           aria-controls="collapseOne"
//         >
//           <button className="btn" type="button">
//             {question}
//           </button>
//         </h2>
//       </div>
//       <div
//         id={`question${id}`}
//         className="collapse"
//         aria-labelledby="headingOne"
//         data-parent="#accordionExample"
//       >
//         <div className="card-body">{answer}</div>
//       </div>
//     </div>
//   </div>
// );

export default () => {
  const [isYearly, setIsYearly] = useState(true);
  useEffect(() => {
    $("#toggle").click();
  });
  return (
    <section
      className="Pricing"
      id="pricinghome"
      style={{ color: isYearly ? "col1" : "col2" }}
    >
      <MetaTags>
        <title>
          User Journey Map | Service Blueprint | Forever Free | CXDeployer
        </title>
        <meta
          name="description"
          content="Lifetime free. Affordable pricing for individuals, small and large organizations"
        />
        <meta
          property="og:title"
          content="User Journey Map | Service Blueprint | Forever Free | CXDeployer"
        />
        <meta property="og:image" content={Logo} />
      </MetaTags>

      <div className="container mt-5">
        <div className="h3  pricing-lead-fourth text-center">
          <font color=" #999999">CXDeployer</font>
        </div>
        <div className="h3  pricing-lead text-center">
          Simple pricing for customer<br></br> experience transformation.
        </div>
        <div className="h4  pricing-lead-second text-center">
          <font color="#8c8c8c">
            No fees to get started. You don’t even have to input a credit card.
          </font>
        </div>
        <p></p>
        <br></br>
        <div className="row" style={{ marginLeft: "39%" }}>
          <div className="btn-group" role="group">
            <button
              type="button"
              onClick={setIsYearly.bind(this, false)}
              className={`btn border btn-${isYearly ? "light" : "primary"}`}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={setIsYearly.bind(this, true)}
              className={`btn border btn-${isYearly ? "primary" : "light"}`}
            >
              Annualy
            </button>
          </div>
          <div id="menu1">
            <font color="blue">
              <strong>
                <div></div>
              </strong>
            </font>
          </div>
        </div>
        <div className="text-center row">
        <a
                  href="https://app.cxdeployer.com/"
                  target="_blank"
                  without
                  rel="noopener noreferrer"
                  className="btn btn-block btn-green bg-success text-uppercase mt-4 col-auto mx-auto px-5"
                >
Get started with free forever account
                </a>
        </div>
        <section className="pricing py-5">
          {/* Free Tier */}
          <div className="card-deck">
            <div className="card mb-5 mb-lg-0">
              <div className="card-body">
                <img src={Free} className="card-img-top  p-3" alt="..." />
                <h5 className="card-title text-muted text-uppercase text-center">
                  Life time
                </h5>
                <hr />
                <div className="text-center mb-2">
                  All features unlimited and upto 1 GB storage*
                </div>
                <div style={{ fontSize: "13px" }} className="pt-3 text-center">
                  &nbsp; *buy additional storage on demand &nbsp;
                </div>

                <h6 className="card-price text-center pt-2">
                  $499
                  {/* <span className="period">/month</span> */}
                </h6>
                <div className="text-center">
                  <small>&nbsp;(no monthly fee fever)</small>
                </div>
                <a
                  href="https://app.cxdeployer.com/"
                  target="_blank"
                  without
                  rel="noopener noreferrer"
                  className="btn btn-block bg-danger text-white text-uppercase mt-4"
                >
                  Order Now
                </a>
                {/* <div className="pt-3 text-center">
                  &nbsp; <br /> &nbsp;
                </div> */}
                <hr />
                <ol
                  style={{ listStyleType: "decimal" }}
                  className="fa-ul priceList"
                >
                  <li>1 User</li>
                  <li>Unlimited Project</li>
                  <li>Unlimited Persona</li>
                  <li>Unlimited Journey Map</li>
                  <li>Unlimited Empathy Map</li>
                  <li>Unlimited Business Model Canvas</li>
                  <li>Unlimited Idea Capture</li>
                  <li>Unlimited Idea Voting</li>
                  <li>Unlimited Idea Evaluation</li>
                  <li>Unlimited Idea Collaboration</li>
                  <li>Unlimited Kanban Board</li>
                  <li>Unlimited Tasks</li>
                  <li>Unlimited Views</li>
                  <li>Upto 1 GB Storage</li>
                  <li>Create Own Templates </li>
                  <li>Includes Audit Trail</li>
                  <li>Real-time Mapping</li>
                  <li>Export to PNG</li>
                  <li>Email Support</li>
                </ol>
              </div>
            </div>
            <div className="card mb-5 mb-lg-0">
              <div className="card-body">
                <img src={Startup} className="card-img-top  p-3" alt="..." />
                <h5 className="card-title text-muted text-uppercase text-center">
                  Startup
                </h5>
                <hr />
                <div className="text-center mb-2">
                  All features unlimited and upto 50 GB storage
                </div>
                <div style={{ fontSize: "13px" }} className="pt-3 text-center">
                  &nbsp; <br/> &nbsp;
                </div>

                <h6 className="card-price text-center pt-2">
                  ${isYearly ? "10" : "12"}
                  <span className="period">per user/month</span>
                </h6>
                <div className="text-center">
                  <small>(paid annually)</small>
                </div>
                <a
                  href="https://app.cxdeployer.com/"
                  target="_blank"
                  without
                  rel="noopener noreferrer"
                  className="btn btn-block btn-first text-uppercase mt-4"
                >
                  Try for free
                </a>
                {/* <div className="pt-3 text-center">
                  * Subscribe now and get this price for next 12 months
                </div> */}
                <hr />
                <ol
                  style={{ listStyleType: "decimal" }}
                  className="fa-ul priceList"
                >
                  {/* <li>
                    <strong>Startup Plan Includes:</strong>
                  </li> */}

                  <li>Up to 5 Users</li>
                  <li>Unlimited Project</li>
                  <li>Unlimited Persona</li>
                  <li>Unlimited Journey Map</li>
                  <li>Unlimited Empathy Map</li>
                  <li>Unlimited Business Model Canvas</li>
                  <li>Unlimited Idea Capture</li>
                  <li>Unlimited Idea Voting</li>
                  <li>Unlimited Idea Evaluation</li>
                  <li>Unlimited Idea Collaboration</li>
                  <li>Unlimited Kanban Board</li>
                  <li>Unlimited Tasks</li>
                  <li>Unlimited Views</li>
                  <li>Upto 50GB Storage</li>
                  <li>Create Own Templates </li>
                  <li>Includes Audit Trai</li>
                  <li>Real-time Mapping</li>
                  <li>Export to PNG</li>
                  <li>Email Support</li>
                  <li>Email & Live Chat Support</li>
                </ol>
              </div>
            </div>
            {/* Plus Tier */}
            <div className="card mb-5 mb-lg-0">
              <img src={Growth} className="card-img-top  p-3" alt="..." />
              <div className="card-body">
                <h5 className="card-title text-muted text-uppercase text-center">
                  Growth
                </h5>
                <hr />
                <div className="text-center mb-2">
                  All features unlimited and unlimited storage
                </div>
                <div style={{ fontSize: "13px" }} className="pt-3 text-center">
                  &nbsp; <br/> &nbsp;
                </div>

                <h6 className="card-price text-center pt-2">
                  ${isYearly ? "20" : "24"}
                  <span className="period">per user/month</span>
                </h6>
                <div className="text-center">
                  <small>(paid annually)</small>
                </div>
                <a
                  href="https://app.cxdeployer.com/"
                  target="_blank"
                  without
                  rel="noopener noreferrer"
                  className="btn btn-block btn-first text-uppercase mt-4"
                >
                  Try for free
                </a>
                {/* <div className="pt-3 text-center">
                  * Subscribe now and get this price for next 12 months
                </div> */}
                <hr />
                <ol
                  style={{ listStyleType: "decimal" }}
                  className="fa-ul priceList"
                >
                  {/* <li>
                    <strong>Startup Plan Includes:</strong>
                  </li> */}

                  <li>Unlimited Users</li>
                  <li>Unlimited Project</li>
                  <li>Unlimited Persona</li>
                  <li>Unlimited Journey Map</li>
                  <li>Unlimited Empathy Map</li>
                  <li>Unlimited Business Model Canvas</li>
                  <li>Unlimited Idea Capture</li>
                  <li>Unlimited Idea Voting</li>
                  <li>Unlimited Idea Evaluation</li>
                  <li>Unlimited Idea Collaboration</li>
                  <li>Unlimited Kanban Board</li>
                  <li>Unlimited Tasks</li>
                  <li>Unlimited Views</li>
                  <li>Unlimited Storage</li>
                  <li>Create Own Templates </li>
                  <li>Includes Audit Trai</li>
                  <li>Real-time Mapping</li>
                  <li>Export to PNG</li>
                  <li>Email Support</li>
                  <li>Email & Live Chat Support</li>
                </ol>
              </div>
            </div>
            {/* Pro Tier */}
            <div className="card">
              <img src={Enterprise} className="card-img-top p-3" alt="..." />
              <div className="card-body">
                <h5 className="card-title text-muted text-uppercase text-center">
                  Enterprise
                </h5>
                <hr />
                <div className="text-center mb-2">
                  Install on your private server
                </div>
                <div style={{ fontSize: "13px" }} className="pt-3 text-center">
                  &nbsp; <br/> &nbsp;
                </div>

                <h6 className="card-price text-center pt-2">
                  <div className="h5 my-4 py-2">Contact us for the quote</div>
                </h6>
                <Link className="btn btn-block btn-first text-uppercase mt-4">
                  Contact us
                </Link>
                {/* <div className="pt-3 text-center">
                  &nbsp; <br /> &nbsp;
                </div> */}
                <hr />
                <ol
                  style={{ listStyleType: "decimal" }}
                  className="fa-ul priceList"
                >
                  {/* <li>
                    <strong>Startup Plan Includes:</strong>
                  </li> */}

                  <li>Unlimited Users</li>
                  <li>Unlimited Project</li>
                  <li>Unlimited Persona</li>
                  <li>Unlimited Journey Map</li>
                  <li>Unlimited Empathy Map</li>
                  <li>Unlimited Business Model Canvas</li>
                  <li>Unlimited Idea Capture</li>
                  <li>Unlimited Idea Voting</li>
                  <li>Unlimited Idea Evaluation</li>
                  <li>Unlimited Idea Collaboration</li>
                  <li>Unlimited Kanban Board</li>
                  <li>Unlimited Tasks</li>
                  <li>Unlimited Views</li>
                  <li>Unlimited Storage</li>
                  <li>Create Own Templates </li>
                  <li>Includes Audit Trai</li>
                  <li>Real-time Mapping</li>
                  <li>Export to PNG</li>
                  <li>Email Support</li>
                  <li>Email & Live Chat Support</li>
                  <li>Sign sign-on</li>
                  <li>Customization</li>
                  <li>White labeling</li>
                </ol>
              </div>
            </div>
          </div>
        </section>
      </div>
      <br></br>
      {/* <div class="container">
        <div className="col-12 text-justify col-md-10 m-auto pt-5">
          <div className="mt-5">
            <p>
              <h1 className="text-center">Frequently Asked Questions</h1>{" "}
              <h4 className="my-4 text-center">
                Here are the answers to the most common questions we get
              </h4>
            </p>
            <Collapse
              question="What if I need to add someone new to my team?"
              answer="If you need to add new members, you can do that. The value charged per new user will be the same for the other members included in the plan chosen by your company"
              id="1"
            />
            <Collapse
              question="Can I change plans anytime I want? How long are the contracts?"
              answer="CXDeployer plans work on a month-to-month basis. You can start/stop or make changes to your plan any time you want – however, we won’t give refunds for cancellation or plan downgrades."
              id="2"
            />
            <Collapse
              question="Do I need any advanced technical skills or professional support services to implement CXDeployer?"
              answer="CXDeployer is designed to be simple and easy, allowing anyone to configure their own processes and workflows. However, in large and complex operations some companies like to have the support of our professional consultants – in this case we can recommend companies that offer those services."
              id="3"
            />
            <Collapse
              question="Will my data be private and safe?"
              answer="Short answer: Yes. Long answer: take a look at all the security measures we take to protect your business and your customers by checking out our security whitepaper."
              id="4"
            />
            <Collapse
              question="Does CXDeployer integrate with other systems and applications?"
              answer="You can integrate CXDeployer with over 500 web apps using Zapier. Also, you can pretty much build anything you want via our open developer API."
              id="5"
            />
          </div>
        </div>
      </div> */}
    </section>
  );
};
