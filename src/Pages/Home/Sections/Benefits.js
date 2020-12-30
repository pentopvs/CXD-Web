import React from "react";
import Achieveexperienceexcellence from "../../../assets/Home/Benifit1.svg";
import Clearlydefinetheserviceofferings from "../../../assets/Home/Benifit2.svg";
import SupportOperationalExcellence from "../../../assets/Home/Benifit3.svg";
import Seethebigpicture from "../../../assets/Home/Benifit4.svg";
import Powerfulvisualcommunication from "../../../assets/Home/Benifit5.svg";
import Realizebenefitsfaster from "../../../assets/Home/Benifit6.svg";
import Increaseproductivity from "../../../assets/Home/Benifit7.svg";
import BetterCustomerExperiences from "../../../assets/Home/Benifit8.svg";
import Benefit9 from "../../../assets/Home/Benifit9.svg";

const BenefitsCard = ({ img, title, text }) => {
  return (
    <div
      className="card shadow-lg d-flex text-center justify-content-center align-content-center c-pointer rounded-lg border-0  mb-5 "
      style={{
        height: "360px",
        backgroundColor: "#f2f4f5",
      }}
    >
      <img
        src={img}
        style={{
          width: "120px",
          height: "120px",
          padding: "10px",
          margin: "20px 0",
        }}
        className="card-img-top mx-auto"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title text-left  d-flex flex-column justify-content-start">
          {title}
        </h5>
        <p className="card-text text-left d-flex flex-column justify-content-start">
          {text}
        </p>
      </div>
    </div>
  );
};

export default () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-4">
          <BenefitsCard
            img={Achieveexperienceexcellence}
            title="Achieve experience excellence"
            text="Create As-Is and To-Be journey map, identify improvement ideas and execute those ideas."
          />
        </div>
        <div className="col-12 col-md-4">
          <BenefitsCard
            img={Clearlydefinetheserviceofferings}
            title="Clearly define the service offerings"
            text="Draw and articulate the service offerings to your customers and enhance the customer experience."
          />
        </div>
        <div className="col-12 col-md-4">
          <BenefitsCard
            img={SupportOperationalExcellence}
            title="Support operational excellence"
            text="Enable current-state insights, improvement opportunity analysis, and better decision making."
          />
        </div>
      </div>

      <div className="row">
        <div className="col-12 col-md-4">
          <BenefitsCard
            img={Seethebigpicture}
            title="See the big picture"
            text="Develop a clear vision of the future by mapping end-to-end of a journey."
          />
        </div>
        <div className="col-12 col-md-4">
          <BenefitsCard
            img={Powerfulvisualcommunication}
            title="Powerful visual communication"
            text="Increate the retention – 80% of what we see, 20% of what we read and 10% of what we hear."
          />
        </div>
        <div className="col-12 col-md-4">
          <BenefitsCard
            img={Realizebenefitsfaster}
            title="Realize benefits faster"
            text="Involve everyone, get ideas and easily implement those ideas."
          />
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-4">
          <BenefitsCard
            img={Increaseproductivity}
            title="Increase productivity"
            text="Organize everything in one place to complete your improvement project in one place and execute faster across distributed teams."
          />
        </div>

        <div className="col-12 col-md-4">
          <BenefitsCard
            img={BetterCustomerExperiences}
            title="Better customer experiences"
            text="Visualize and validate different ideas and enhance your customer experience."
          />
        </div>
        <div className="col-12 col-md-4">
          <BenefitsCard
            img={Benefit9}
            title="Realize the tacit potential of everyone"
            text="Involve everyone, connect and get insights and ideas across teams from any location."
          />
        </div>
      </div>
    </div>
  );
};
