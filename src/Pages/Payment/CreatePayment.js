import React, { Component } from "react";
// import CardElements from "./CardElement";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { parse } from "uuid";

axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
export default class CreatePayment extends Component {
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
    axios
      .get(
        "https://app.cxdeployer.com/api/admin/stripe/getPlan/" +
          this.props.match.params.planid
      )
      .then((res) => {
        this.setState({
          plan: res.data.data,
          INR: res.data.data.price.INR,
          USD: res.data.data.price.USD,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  makePayment = (token) => {
    let body = {
      token,
      product: {
        planId: this.props.match.params.planid,
        firstName: this.state.fname,
        lastName: this.state.lname,
        email: this.state.email,
        couponCode: this.state.couponCode,
        country: this.state.country,
      },
    };
    console.log(body);
    axios
      .post(
        "https://https://app.cxdeployer.com/api/admin/stripe/payment/",
        body
      )
      .then((res) => {
        alert(res.data.msg);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  validateCoupon = () => {
    const body = {
      couponCode: this.state.couponCode,
      planId: this.props.match.params.planid,
      country: this.state.country,
    };
    axios
      .post("https://app.cxdeployer.com/api/admin/stripe/validateCoupon", body)
      .then((res) => {
        if (res.data.message == "Offer code is valid")
          this.setState({
            discount: res.data.data.discount_percent,
            applied: true,
          });
        else {
          this.setState({ couponMsg: "Invalid Coupon Code" });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    let {
      INR,
      USD,
      country,
      plan,
      discount,
      applied,
      fname,
      lname,
      couponMsg,
      terms,
    } = this.state;
    discount = parseFloat(discount) / 100;
    let tax = ((parseFloat(INR) - parseFloat(INR) * discount) * 0.18).toFixed(
      2
    );
    return (
      <div className="pt-5">
        <div className="container">
          <div className="container text-center" style={{ maxWidth: "800px" }}>
            <form>
              <div class="form-group d-flex">
                <input
                  class="form-control mr-1"
                  type="text"
                  placeholder="First Name"
                  name="fname"
                  onChange={(e) => this.handleChange(e)}
                  required
                ></input>
                <input
                  class="form-control"
                  type="text"
                  placeholder="Last Name"
                  name="lname"
                  onChange={(e) => this.handleChange(e)}
                  required
                ></input>
              </div>
              <div class="form-group">
                <input
                  class="form-control mr-1  mb-1"
                  type="email"
                  placeholder="Email"
                  name="email"
                  onChange={(e) => this.handleChange(e)}
                  required
                ></input>
                <small class="text-danger float-left  mb-1">
                  Note: Login Credentials will be sent to this email id
                </small>
              </div>
              <div class="form-group mt-2">
                <select
                  class="form-control mr-1"
                  onChange={(e) => this.handleChange(e)}
                  name="country"
                  required
                  value={this.state.country}
                >
                  <option value="">Select Your Country</option>
                  <option value="India">India</option>
                  <option value="Others">Others</option>
                </select>
              </div>
              {this.state.plan.length != 0 && (
                <div>
                  <h4>ORDER SUMMARY</h4>
                  <hr class></hr>
                  <div class="order-details">
                    <div class="d-flex justify-content-between">
                      <span class="font-weight-bold">Product</span>
                      <span class="font-weight-bold">Price</span>
                    </div>
                    <hr></hr>
                    <div class="d-flex justify-content-between">
                      <span>{plan.planName}</span>
                      <span>
                        {country != "India"
                          ? "USD " + parseFloat(USD).toFixed(2)
                          : "INR " + parseFloat(INR).toFixed(2)}
                      </span>
                    </div>
                    {applied && (
                      <React.Fragment>
                        <div class="d-flex justify-content-between">
                          <span>
                            {"Discount " + parseFloat(discount) * 100 + "%"}
                          </span>
                          <span>
                            {country != "India"
                              ? "USD " + (parseFloat(USD) * discount).toFixed(2)
                              : "INR " +
                                (parseFloat(INR) * discount).toFixed(2)}
                          </span>
                        </div>
                        <div class="d-flex justify-content-between">
                          <span>SubTotal</span>
                          <span>
                            {country != "India"
                              ? "USD " +
                                (
                                  parseFloat(USD) -
                                  parseFloat(USD) * discount
                                ).toFixed(2)
                              : "INR " +
                                (
                                  parseFloat(INR) -
                                  parseFloat(INR) * discount
                                ).toFixed(2)}
                          </span>
                        </div>
                      </React.Fragment>
                    )}
                    <div class="d-flex justify-content-between">
                      <span>
                        Sales Tax{country != "India" ? "" : "(18% GST)"}
                      </span>
                      <span>
                        {country != "India" ? "USD 0.00" : "INR " + tax}
                      </span>
                    </div>
                  </div>
                  <hr></hr>
                  <div class="d-flex justify-content-between">
                    <span class="font-weight-bold">Total</span>
                    <span class="font-weight-bold">
                      {country != "India"
                        ? "USD " +
                          (
                            parseFloat(USD) -
                            parseFloat(USD) * discount
                          ).toFixed(2)
                        : "INR " +
                          (
                            parseFloat(INR) -
                            parseFloat(INR) * discount +
                            parseFloat(tax)
                          ).toFixed(2)}
                    </span>
                  </div>
                  <hr></hr>
                </div>
              )}
              <div class="form-group d-flex">
                <input
                  class="form-control mr-1"
                  type="text"
                  placeholder="Coupon code"
                  name="couponCode"
                  onChange={(e) => this.handleChange(e)}
                  required
                ></input>
                {applied ? (
                  <button
                    type="button"
                    class="btn btn-primary"
                    onClick={() => this.validateCoupon()}
                    disabled
                  >
                    APPLIED
                  </button>
                ) : (
                  <button
                    type="button"
                    class="btn btn-primary"
                    onClick={() => this.validateCoupon()}
                  >
                    APPLY
                  </button>
                )}
              </div>
              <span class="text-danger">{couponMsg}</span>
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
              <StripeCheckout
                stripeKey="pk_test_51HzeKULCEpd65swkmCDA73B1S31FodnQBeKVqurugHtDqsCRdnn4HNCnjn6T0h8zMysmLmRM3PdRpXMxlDqiC7Xa00s6JVgk68"
                token={this.makePayment}
                name="Subscribe Now"
                // amount={
                //   country != "India" ? USD : (INR + INR * 0.18).toFixed(2)
                // }
              >
                <button
                  class="btn btn-dark"
                  type="button"
                  disabled={
                    this.state.plan.length == 0 ||
                    terms === "" ||
                    fname == "" ||
                    lname == "" ||
                    country == ""
                  }
                >
                  <i class="fa fa-credit-card"></i> Debit or Credit Card
                </button>
              </StripeCheckout>
              {/*<div class="collapse" id="collapseExample">
              <CardElements />
    </div>*/}
            </form>
          </div>
        </div>
      </div>
    );
  }
}
