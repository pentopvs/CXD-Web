import React, { Component } from "react";
// import CardElements from "./CardElement";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { parse } from "uuid";
import PaypalExpressBtn from "react-paypal-express-checkout";
import ReactPaypal from "./Paypal";

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
      .post("https://app.cxdeployer.com/api/admin/stripe/payment/", body)
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
  onSuccess = (payment, total) => {
    // Congratulation, it came here means everything's fine!

    let data = {
      payment: {
        amount: total,

        payment,
      },
      product: {
        planId: this.props.match.params.planid,
        firstName: this.state.fname,
        lastName: this.state.lname,
        email: this.state.email,
        couponCode: this.state.couponCode,
        country: this.state.country,
      },
    };

    console.log("The payment was succeeded!", payment);
    axios
      .post(`https://app.cxdeployer.com/api/admin/stripe/paypal/payment`, data)
      .then((res) => {
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

    // You can bind the "payment" object's value to your state or props or whatever here, please see below for sample returned data
  };
  onCancel = (data) => {
    // User pressed "cancel" or close Paypal's popup!
    console.log("The payment was cancelled!", data);
    alert("The payment was cancelled!");
    // You can bind the "data" object's value to your state or props or whatever here, please see below for sample returned data
  };

  onError = (err) => {
    // The main Paypal's script cannot be loaded or somethings block the loading of that script!
    console.log("Error!", err);
    alert("Internal Server Error");
    // Because the Paypal's main script is loaded asynchronously from "https://www.paypalobjects.com/api/checkout.js"
    // => sometimes it may take about 0.5 second for everything to get set, or for the button to appear
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
      email,
    } = this.state;
    discount = parseFloat(discount) / 100;
    let tax = ((parseFloat(INR) - parseFloat(INR) * discount) * 0.18).toFixed(
      2
    );
    let env = "production";
    const client = {
      sandbox:
        "ASiugEW4Jwn9OqSqTzI4chSPzfY-Bv3nA6nVUYE63ERPtoPwvvxTNnCsYiKzG-ebkk_biw-QzUhrULEi",
      production:
        "AUjh7o7-DtZiwWrR2FeuT8R4LB1Dw7hCmdUVRodv3SMX-bEUZTDZ0ockAnFungJWfhwkIZmP5xr3ptF2",
    };
    return (
      <div className="pt-5">
        <div className="container">
          <div className="container text-center" style={{ maxWidth: "800px" }}>
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
                <small class="text-danger float-left text-left  mb-1">
                  Note: Login Credentials will be sent to this email id. Please
                  ensure to check your email's spam folder, sometimes email may
                  land there. If you have already signed-up, your account will
                  be upgraded.
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
                  <option value="">Select Your Country*</option>
                  {[
                    "Afghanistan",
                    "Albania",
                    "Algeria",
                    "America",
                    "Andorra",
                    "Angola",
                    "Antigua",
                    "Argentina",
                    "Armenia",
                    "Australia",
                    "Austria",
                    "Azerbaijan",
                    "Bahamas",
                    "Bahrain",
                    "Bangladesh",
                    "Barbados",
                    "Belarus",
                    "Belgium",
                    "Belize",
                    "Benin",
                    "Bhutan",
                    "Bissau",
                    "Bolivia",
                    "Bosnia",
                    "Botswana",
                    "Brazil",
                    "British",
                    "Brunei",
                    "Bulgaria",
                    "Burkina",
                    "Burma",
                    "Burundi",
                    "Cambodia",
                    "Cameroon",
                    "Canada",
                    "Cape Verde",
                    "Central African Republic",
                    "Chad",
                    "Chile",
                    "China",
                    "Colombia",
                    "Comoros",
                    "Congo",
                    "Costa Rica",
                    "country debt",
                    "Croatia",
                    "Cuba",
                    "Cyprus",
                    "Czech",
                    "Denmark",
                    "Djibouti",
                    "Dominica",
                    "East Timor",
                    "Ecuador",
                    "Egypt",
                    "El Salvador",
                    "Emirate",
                    "England",
                    "Eritrea",
                    "Estonia",
                    "Ethiopia",
                    "Fiji",
                    "Finland",
                    "France",
                    "Gabon",
                    "Gambia",
                    "Georgia",
                    "Germany",
                    "Ghana",
                    "Great Britain",
                    "Greece",
                    "Grenada",
                    "Grenadines",
                    "Guatemala",
                    "Guinea",
                    "Guyana",
                    "Haiti",
                    "Herzegovina",
                    "Honduras",
                    "Hungary",
                    "Iceland",
                    "India",
                    "Indonesia",
                    "Iran",
                    "Iraq",
                    "Ireland",
                    "Israel",
                    "Italy",
                    "Ivory Coast",
                    "Jamaica",
                    "Japan",
                    "Jordan",
                    "Kazakhstan",
                    "Kenya",
                    "Kiribati",
                    "Korea",
                    "Kosovo",
                    "Kuwait",
                    "Kyrgyzstan",
                    "Laos",
                    "Latvia",
                    "Lebanon",
                    "Lesotho",
                    "Liberia",
                    "Libya",
                    "Liechtenstein",
                    "Lithuania",
                    "Luxembourg",
                    "Macedonia",
                    "Madagascar",
                    "Malawi",
                    "Malaysia",
                    "Maldives",
                    "Mali",
                    "Malta",
                    "Marshall",
                    "Mauritania",
                    "Mauritius",
                    "Mexico",
                    "Micronesia",
                    "Moldova",
                    "Monaco",
                    "Mongolia",
                    "Montenegro",
                    "Morocco",
                    "Mozambique",
                    "Myanmar",
                    "Namibia",
                    "Nauru",
                    "Nepal",
                    "Netherlands",
                    "New Zealand",
                    "Nicaragua",
                    "Niger",
                    "Nigeria",
                    "Norway",
                    "Oman",
                    "Pakistan",
                    "Palau",
                    "Panama",
                    "Papua",
                    "Paraguay",
                    "Peru",
                    "Philippines",
                    "Poland",
                    "Portugal",
                    "Qatar",
                    "Romania",
                    "Russia",
                    "Rwanda",
                    "Samoa",
                    "San Marino",
                    "Sao Tome",
                    "Saudi Arabia",
                    "scotland",
                    "scottish",
                    "Senegal",
                    "Serbia",
                    "Seychelles",
                    "Sierra Leone",
                    "Singapore",
                    "Slovakia",
                    "Slovenia",
                    "Solomon",
                    "Somalia",
                    "South Africa",
                    "South Sudan",
                    "Spain",
                    "Sri Lanka",
                    "St. Kitts",
                    "St. Lucia",
                    "St Kitts",
                    "St Lucia",
                    "Saint Kitts",
                    "Santa Lucia",
                    "Sudan",
                    "Suriname",
                    "Swaziland",
                    "Sweden",
                    "Switzerland",
                    "Syria",
                    "Taiwan",
                    "Tajikistan",
                    "Tanzania",
                    "Thailand",
                    "Tobago",
                    "Togo",
                    "Tonga",
                    "Trinidad",
                    "Tunisia",
                    "Turkey",
                    "Turkmenistan",
                    "Tuvalu",
                    "UAE",
                    "Uganda",
                    "Ukraine",
                    "United Kingdom",
                    "United States",
                    "Uruguay",
                    "Uzbekistan",
                    "Vanuatu",
                    "Vatican",
                    "Venezuela",
                    "Vietnam",
                    "Wales",

                    "Yemen",
                    "Zambia",
                    "Zimbabwe",
                  ].map((countryName) => (
                    <option value={countryName}>{countryName}</option>
                  ))}
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
                      id="check"
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
              {/*<PaypalExpressBtn
                  env={env}
                  client={client}
                  currency={country == "India" ? "INR" : "USD"}
                  total={
                    country != "India"
                      ? (parseFloat(USD) - parseFloat(USD) * discount).toFixed(
                          2
                        )
                      : (
                          parseFloat(INR) -
                          parseFloat(INR) * discount +
                          parseFloat(tax)
                        ).toFixed(2)
                  }
                  onError={this.onError}
                  onSuccess={(payment) =>
                    this.onSuccess(
                      payment,
                      country != "India"
                        ? (
                            parseFloat(USD) -
                            parseFloat(USD) * discount
                          ).toFixed(2)
                        : (
                            parseFloat(INR) -
                            parseFloat(INR) * discount +
                            parseFloat(tax)
                          ).toFixed(2)
                    )
                  }
                  onCancel={this.onCancel}
                  disabled={
                    this.state.plan.length == 0 ||
                    terms === "" ||
                    fname == "" ||
                    lname == "" ||
                    country == ""
                  }
                  style={{ shape: "rect", size: "medium" }}
                />*/}
              {this.state.plan.length == 0 ||
              terms === "" ||
              fname == "" ||
              lname == "" ||
              country == "" ||
              email == "" ? (
                <StripeCheckout
                  stripeKey="pk_live_51HzeKULCEpd65swkRql1zlYWU04ZyPcHxtxEWelqlnIMUW5jDkop189FZl2dlBlaYarw4XpAf0PVuFhCiaTg8i0U00qzUKi6IL"
                  token={this.makePayment}
                  name="Subscribe Now"
                  // amount={
                  //   country != "India" ? USD : (INR + INR * 0.18).toFixed(2)
                  // }
                >
                  <button
                    class="btn btn-dark btn-block"
                    type="button"
                    disabled={
                      this.state.plan.length == 0 ||
                      terms === "" ||
                      fname == "" ||
                      lname == "" ||
                      country == "" ||
                      email == ""
                    }
                  >
                    <i class="fa fa-credit-card"></i> Debit or Credit Card
                  </button>
                </StripeCheckout>
              ) : (
                <React.Fragment>
                  {" "}
                  {plan.hasOwnProperty("validity") &&
                  plan.validity != "Monthly" ? (
                    <ReactPaypal
                      currency={country == "India" ? "INR" : "USD"}
                      total={
                        country != "India"
                          ? (
                              parseFloat(USD) -
                              parseFloat(USD) * discount
                            ).toFixed(2)
                          : (
                              parseFloat(INR) -
                              parseFloat(INR) * discount +
                              parseFloat(tax)
                            ).toFixed(2)
                      }
                      onSuccess={this.onSuccess}
                    />
                  ) : (
                    ""
                  )}
                  <hr></hr>
                  <div class="p-1">
                    <StripeCheckout
                      stripeKey="pk_live_51HzeKULCEpd65swkRql1zlYWU04ZyPcHxtxEWelqlnIMUW5jDkop189FZl2dlBlaYarw4XpAf0PVuFhCiaTg8i0U00qzUKi6IL"
                      token={this.makePayment}
                      name="Subscribe Now"
                      // amount={
                      //   country != "India" ? USD : (INR + INR * 0.18).toFixed(2)
                      // }
                    >
                      <button
                        class="btn btn-dark btn-block"
                        type="button"
                        disabled={
                          this.state.plan.length == 0 ||
                          terms === "" ||
                          fname == "" ||
                          lname == "" ||
                          country == "" ||
                          email == ""
                        }
                      >
                        <i class="fa fa-credit-card"></i> Debit or Credit Card
                      </button>
                    </StripeCheckout>
                  </div>
                </React.Fragment>
              )}
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
