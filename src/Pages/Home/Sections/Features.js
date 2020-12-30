import React from "react";
import FeatureImg1 from "../../../assets/Home/real-time-collaboration.png";
import FeatureImg2 from "../../../assets/Home/Audit-log.png";
import FeatureImg3 from "../../../assets/Home/connected-maps.png";
import FeatureImg4 from "../../../assets/Home/Download in any format.png";
import FeatureImg5 from "../../../assets/Home/Cloud-storage.png";

const PillTabs = ({ image, index, title, subtitle }) => {
  return (
    <div
      className={`tab-pane fade show ${index === "1" && "active"}`}
      id={`v-pills-tab-${index}`}
      role="tabpanel"
      aria-labelledby={`v-pills-${index}`}
    >
      <div className="d-flex flex-column col-lg-10 col-12 align-items-center text-center justify-content-center mx-auto p-0">
        <div
          className={`d-flex col-lg-10 col-12 col-md-12 features-container key-feature-image-container py-5 px-3 v-pills-bg-${index}`}
        >
          <img
            alt=""
            src={image}
            className="overview-image key-feature-image px-4"
          />
        </div>
        <p className="h2 my-3 font-weight-regular">{title}</p>
        <p className="text-center">{subtitle}</p>
      </div>
    </div>
  );
};

export default () => {
  return (
    <section className="Features">
      <div className="row">
        <div className="col-12 col-md-8">
          <div className="tab-content" id="v-pills-tabContent">
            <PillTabs
              index="1"
              image={FeatureImg1}
              title="Designed for collaboration"
              subtitle="Comments and discussions in a project"
            />
            <PillTabs
              index="2"
              image={FeatureImg3}
              title="Connected maps"
              subtitle="Avoid confusion and duplication by linking journey maps with persona, empathy and business model canvas"
            />
            <PillTabs
              index="3"
              image={FeatureImg4}
              title="Export maps in multiple formats"
              subtitle="Export to PDF, PNG or CSV and Create impactful presentations."
            />
            <PillTabs
              index="4"
              image={FeatureImg2}
              title="House of templates"
              subtitle="Designed by industry professionals with beautiful preset themes to jump start"
            />

            <PillTabs
              index="5"
              image={FeatureImg5}
              title="Simple and flexible interface"
              subtitle="Straight forward, intuitive and configurable layout"
            />
          </div>
        </div>

        <div className="col-12 col-md-4">
          <div
            className="nav flex-column nav-pills"
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical"
          >
            <a
              className="nav-link active"
              id="v-pills-1"
              data-toggle="pill"
              href="#v-pills-tab-1"
              role="tab"
              aria-controls="v-pills-home"
            >
              <h5>Designed for collaboration</h5>
            </a>
            <a
              className="nav-link"
              id="v-pills-2"
              data-toggle="pill"
              href="#v-pills-tab-2"
              role="tab"
              aria-controls="v-pills-messages"
            >
              <h5> Connected maps </h5>
            </a>
            <a
              className="nav-link"
              id="v-pills-3"
              data-toggle="pill"
              href="#v-pills-tab-3"
              role="tab"
              aria-controls="v-pills-settings"
            >
              <h5>Export maps in multiple formats</h5>
            </a>
            <a
              className="nav-link"
              id="v-pills-4"
              data-toggle="pill"
              href="#v-pills-tab-4"
              role="tab"
              aria-controls="v-pills-settings"
            >
              <h5>House of templates</h5>
            </a>

            <a
              className="nav-link"
              id="v-pills-5"
              data-toggle="pill"
              href="#v-pills-tab-5"
              role="tab"
              aria-controls="v-pills-settings"
            >
              <h5> Simple and flexible interface</h5>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
