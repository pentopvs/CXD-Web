import React from "react";

const Heading2 = (props) => <div className="heading h3 ">{props.children}</div>;

const Heading3 = (props) => (
  <div className="heading h4 pl-5">{props.children}</div>
);

const Para = (props) => (
  <div className="para container pl-5">{props.children}</div>
);

const PolicySection = (props) => (
  <div className="section container">{props.children}</div>
);

export default () => {
  document.title = "Cookie Policy | CXDeployer";
  return (
    <div className="mt-5">
      <h1 className="text-center">Cookie Policy</h1>
      <div className="row">
        <div className="col-12 col-md-10 m-auto">
          <Para>
            We use cookies to help improve your experience of
            <a href="http://cxdeployer.com">http://cxdeployer.com</a>. This
            cookie policy is part of PVSQUARE PRIVATE LIMITED's privacy policy,
            and covers the use of cookies between your device and our site. We
            also provide basic information on third-party services we may use,
            who may also use cookies as part of their service, though they are
            not covered by our policy.
          </Para>
          <Para>
            If you don’t wish to accept cookies from us, you should instruct
            your browser to refuse cookies from
            <a href="http://cxdeployer.com">http://cxdeployer.com</a>, with the
            understanding that we may be unable to provide you with some of your
            desired content and services.
          </Para>
          <PolicySection>
            <Heading2>What is a cookie?</Heading2>
            <Para>
              A cookie is a small piece of data that a website stores on your
              device when you visit, typically containing information about the
              website itself, a unique identifier that allows the site to
              recognise your web browser when you return, additional data that
              serves the purpose of the cookie, and the lifespan of the cookie
              itself.
            </Para>
            <Para>
              Cookies are used to enable certain features (eg. logging in), to
              track site usage (eg. analytics), to store your user settings (eg.
              timezone, notification preferences), and to personalise your
              content (eg. advertising, language).
            </Para>
            <Para>
              Cookies set by the website you are visiting are normally referred
              to as “first-party cookies”, and typically only track your
              activity on that particular site. Cookies set by other sites and
              companies (ie. third parties) are called “third-party cookies”,
              and can be used to track you on other websites that use the same
              third-party service.
            </Para>
          </PolicySection>
          <PolicySection>
            <Heading2>Types of cookies and how we use them </Heading2>
            <Heading3>Essential cookies </Heading3>
            <Para>
              Essential cookies are crucial to your experience of a website,
              enabling core features like user logins, account management,
              shopping carts and payment processing. We use essential cookies to
              enable certain functions on our website.
            </Para>
            <Heading3>Performance cookies </Heading3>
            <Para>
              Performance cookies are used in the tracking of how you use a
              website during your visit, without collecting personal information
              about you. Typically, this information is anonymous and aggregated
              with information tracked across all site users, to help companies
              understand visitor usage patterns, identify and diagnose problems
              or errors their users may encounter, and make better strategic
              decisions in improving their audience’s overall website
              experience. These cookies may be set by the website you’re
              visiting (first-party) or by third-party services. We use
              performance cookies on our site.
            </Para>
            <Heading3>Functionality cookies</Heading3>
            <Para>
              Functionality cookies are used in collecting information about
              your device and any settings you may configure on the website
              you’re visiting (like language and timezone settings). With this
              information, websites can provide you with customised, enhanced or
              optimised content and services. These cookies may be set by the
              website you’re visiting (first-party) or by third-party service.
              We use functionality cookies for selected features on our site.
            </Para>
            <Heading3>Targeting/advertising cookies </Heading3>
            <Para>
              Targeting/advertising cookies are used in determining what
              promotional content is more relevant and appropriate to you and
              your interests. Websites may use them to deliver targeted
              advertising or to limit the number of times you see an
              advertisement. This helps companies improve the effectiveness of
              their campaigns and the quality of content presented to you. These
              cookies may be set by the website you’re visiting (first-party) or
              by third-party services. Targeting/advertising cookies set by
              third-parties may be used to track you on other websites that use
              the same third-party service. We use targeting/advertising cookies
              on our site.
            </Para>
            <Heading3>Third-party cookies on our site </Heading3>
            <Para>
              We may employ third-party companies and individuals on our
              websites—for example, analytics providers and content partners. We
              grant these third parties access to selected information to
              perform specific tasks on our behalf. They may also set
              third-party cookies in order to deliver the services they are
              providing. Third-party cookies can be used to track you on other
              websites that use the same third-party service. As we have no
              control over third-party cookies, they are not covered by PVSQUARE
              PRIVATE LIMITED's cookie policy.
            </Para>
            <Heading3>Our third-party privacy promise </Heading3>
            <Para>
              We review the privacy policies of all our third-party providers
              before enlisting their services to ensure their practices align
              with ours. We will never knowingly include third-party services
              that compromise or violate the privacy of our users.
            </Para>
            <Heading3>How you can control or opt out of cookies </Heading3>
            <Para>
              If you do not wish to accept cookies from us, you can instruct
              your browser to refuse cookies from our website. Most browsers are
              configured to accept cookies by default, but you can update these
              settings to either refuse cookies altogether, or to notify you
              when a website is trying to set or update a cookie.
            </Para>
            <Para>
              If you browse websites from multiple devices, you may need to
              update your settings on each individual device.
            </Para>
            <Para>
              Although some cookies can be blocked with little impact on your
              experience of a website, blocking all cookies may mean you are
              unable to access certain features and content across the sites you
              visit.
            </Para>
          </PolicySection>
        </div>
      </div>
    </div>
  );
};
