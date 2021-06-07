import React from "react";
import ScrollToTop from "./Components/ScrollTop";
import { Navbar, Footer } from "./Components";
import {
  Home,
  Pricing,
  Contactus,
  Cookies,
  PrivacyPolicy,
  TermsOfUse,
  Features
} from "./Pages";
import bmc from "./Pages/BMC/bmc"
import cjm from "./Pages/CJM/cjm"
import empathy from "./Pages/Empathy/empathy"
import idea from "./Pages/Idea/idea"
import persona from "./Pages/Persona/persona"
import task from "./Pages/Task/task"
import CreatePayment from "./Pages/Payment/CreatePayment";
import AppSumo from "./Pages/Payment/AppSumo/AppSumo";
import { BrowserRouter as Router , Route, Switch } from "react-router-dom"; // very important for Routing
import AllBlogs from "./Pages/Blog/AllBlogs";
import Blog from "./Pages/Blog/Blog";
import PostPage from "./Pages/Blog/PostPage";
import ErrorPage from "./Pages/ErrorPage";

function App() {
  return (
    <div>
      <Router>
        <ScrollToTop>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/pricing" component={Pricing} />
            <Route path="/contactus" component={Contactus} />
            <Route path="/cookies" component={Cookies} />
            <Route exact path={"/blog/:title"} component={PostPage} />
            <Route path="/privacypolicy" component={PrivacyPolicy} />
            <Route path="/terms" component={TermsOfUse} />
            <Route path="/features" component={Features} />
            <Route path="/blog" component={AllBlogs} />
            <Route path="/createpayment/:planid" component={CreatePayment} />
            <Route path="/appsumo" component={AppSumo} />
            <Route path="/bmc" component={bmc} />
            <Route path="/cjm" component={cjm} />
            <Route path="/empathy" component={empathy} />
            <Route path="/idea" component={idea} />
            <Route path="/persona" component={persona} />
            <Route path="/task" component={task} />

            <Route component={ErrorPage} />
          </Switch>
          <Footer />
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
