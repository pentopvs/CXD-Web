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
  Features,
} from "./Pages";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; // very important for Routing
import AllBlogs from "./Pages/Blog/AllBlogs";
import Blog from "./Pages/Blog/Blog";
import PostPage from "./Pages/Blog/PostPage";

function App() {
  return (
    <div>
      <Router>
        <ScrollToTop>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Pricing" component={Pricing} />
            <Route path="/Contactus" component={Contactus} />
            <Route path="/Cookies" component={Cookies} />
            <Route exact path={"/blog/:title"} component={PostPage} />
            <Route path="/privacypolicy" component={PrivacyPolicy} />
            <Route path="/terms" component={TermsOfUse} />
            <Route path="/features" component={Features} />
            <Route path="/blogs" component={AllBlogs} />
            {/* <Route path="/blog/:slug" component={Blog} />*/}
          </Switch>
          <Footer />
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
