import React, { Component } from "react";

import axios from "axios";
import appsumo from "../../../assets/as-appsumo-logo-blk.png";

axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
export default class AppSumo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      email: "",
      country: "",
      product: [],
      plan: [],
      INR: 0,
      USD: "",
      gst: "",
      couponCode: "",
      discount: 0,
      applied: false,
      terms: "",
      couponMsg: "",
    };
  }
  componentDidMount = () => {
    // axios
    //   .get(
    //     "https://app.cxdeployer.com/api/admin/stripe/getPlan/" +
    //       this.props.match.params.planid
    //   )
    //   .then((res) => {
    //     this.setState({
    //       plan: res.data.data,
    //       INR: res.data.data.price.INR,
    //       USD: res.data.data.price.USD,
    //     });
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  validateCoupon = () => {
    let body = {
      firstName: this.state.fname,
      lastName: this.state.lname,
      email: this.state.email,
      activationKey: this.state.couponCode,
    };
    console.log(body);
    axios
      .post("https://app.cxdeployer.com/api/admin/appSumo", body)
      .then((res) => {
        console.log(res);
        alert(res.data.message);
      })
      .catch((error) => {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          alert(error.response.data.message);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message);
        }
        console.log(error.config);
      });
  };

  render() {
    let { fname, lname, terms, couponCode, email } = this.state;
    return (
      <div className="pt-5">
        <div className="container">
          <div className="container text-center" style={{ maxWidth: "800px" }}>
            <img className="mb-4" src={appsumo} style={{ height: "30px" }} />

            <h4 className="mb-4">
              Activate your Lifetime deal by filling this form.
            </h4>
            <form>
              <div class="form-group d-flex">
                <input
                  class="form-control mr-1"
                  type="text"
                  placeholder="First Name*"
                  name="fname"
                  onChange={(e) => this.handleChange(e)}
                  required
                ></input>
                <input
                  class="form-control"
                  type="text"
                  placeholder="Last Name*"
                  name="lname"
                  onChange={(e) => this.handleChange(e)}
                  required
                ></input>
              </div>
              <div class="form-group">
                <input
                  class="form-control mr-1  mb-1"
                  type="email"
                  placeholder="Email*"
                  name="email"
                  onChange={(e) => this.handleChange(e)}
                  required
                ></input>
                <small class="text-danger float-left text-left mb-1">
                  Note: Login Credentials will be sent to this email id. Please
                  ensure to check your email's spam folder, sometimes email may
                  land there. If you have already signed-up, your account will
                  be upgraded.
                </small>
              </div>

              <div class="form-group ">
                <input
                  class="form-control mr-1"
                  type="text"
                  placeholder="AppSumo Code*"
                  name="couponCode"
                  onChange={(e) => this.handleChange(e)}
                  required
                ></input>
              </div>

              <div className="mt-3">
                <div className="d-flex form-group justify-content-center">
                  <div style={{ width: "30px", marginTop: "5px" }}>
                    {" "}
                    <input
                      type="checkbox"
                      className="form-control"
                      required
                      name="terms"
                      onChange={(e) => this.handleChange(e)}
                      style={{ width: "15px", height: "15px" }}
                    />
                  </div>

                  <div>
                    I agree to the
                    <a href="https://cxdeployer.com/terms">
                      <u> terms of use</u>
                    </a>{" "}
                    and{" "}
                    <a href="https://cxdeployer.com/privacypolicy">
                      <u> privacy policy</u>
                    </a>{" "}
                  </div>
                </div>
              </div>
              <button
                type="button"
                class="btn btn-primary"
                onClick={() => this.validateCoupon()}
                disabled={
                  terms == "" ||
                  fname == "" ||
                  lname == "" ||
                  couponCode == "" ||
                  email == ""
                }
              >
                Redeem AppSumo Code
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
