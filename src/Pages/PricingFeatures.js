import React from "react";
import { v4 as uuid } from "uuid";

/**
 * *** Order of below should not be changed in any condition. ***
 */

const features = [
  ["Users", "1", "Up to 5", "Unlimited", "Unlimited", "User"],
  ["Projects", "1", "Unlimited", "Unlimited", "Unlimited", "Project"],
  [
    "Customer Journey Map",
    "1",
    "Unlimited",
    "Unlimited",
    "Unlimited",
    "Customer Journey Map",
  ],
  [
    "Buisness Canvas Modal",
    "1",
    "Unlimited",
    "Unlimited",
    "Unlimited",
    "Buisness Modal Canvas",
  ],
  [
    "Personas",
    "1",
    "Unlimited",
    "Unlimited",
    "Unlimited",
    "Unlimited",
    "Persons",
  ],
  ["Ideations", 0, "Unlimited", "Unlimited", "Unlimited", "Ideation"],
  ["Kanban Boards", 0, "Unlimited", "Unlimited", "Unlimited", "Kanban Boards"],
  ["Comments", 0, "Unlimited", "Unlimited", "Unlimited", "Comments"],
  ["Views", "Unlimited", "Unlimited", "Unlimited", "Unlimited", "Views"],
  [
    "Export to",
    "PDF & PNG",
    "PDF, PNG & SVG",
    "PDF, PNG & SVG",
    "PDF, PNG & SVG",
  ],
  ["Storage", "50MB", "1GB", "Unlimited", "Unlimited", "Storage"],
  ["Audit Trial", true, true, true, true],
  [
    "Support",
    "Community",
    "Email",
    "Live chat & Email",
    "Single Sign-On",
    "Support",
  ],
];

export default () => {
  return (
    <div className="container mt-5">
      <div className="table-responsive">
        <table className="table table-borderless table-hover">
          <thead className="border-bottom">
            <tr className="text-center">
              <th className="text-left">Features</th>
              <th>Free</th>
              <th className="bg-info text-white">
                {" "}
                <div className="p-1 rounded">$10</div> Startup
              </th>
              <th className="bg-info text-white">
                {" "}
                <div className="p-1 rounded">$20</div> Growth
              </th>
              <th>Enterpise</th>
            </tr>
          </thead>
          <tbody>
            {features.map((data) => {
              const [feature, free, startup, growth, enterpise] = data;

              return (
                <tr className="border-bottom text-center" key={uuid()}>
                  <td className="text-left align-middle"> {feature} </td>
                  <td className="align-middle">
                    {typeof free === "string" ? (
                      free
                    ) : free ? (
                      <i className="fas fa-check-circle"></i>
                    ) : (
                      <i className="fas fa-times-circle"></i>
                    )}
                  </td>
                  <td className="text-center align-middle">
                    {typeof startup === "string" ? (
                      startup
                    ) : startup ? (
                      <i className="fas fa-check-circle"></i>
                    ) : (
                      <i className="fas fa-times-circle"></i>
                    )}
                  </td>
                  <td className="align-middle">
                    {typeof growth === "string" ? (
                      growth
                    ) : growth ? (
                      <i className="fas fa-check-circle"></i>
                    ) : (
                      <i className="fas fa-times-circle"></i>
                    )}
                  </td>
                  <td className="align-middle">
                    {typeof enterpise === "string" ? (
                      enterpise
                    ) : enterpise ? (
                      <i className="fas fa-check-circle"></i>
                    ) : (
                      <i className="fas fa-times-circle"></i>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
