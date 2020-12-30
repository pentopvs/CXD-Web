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
  document.title = "Privacy Policy | CXDeployer";
  return (
    <div className="mt-5">
      <h1 className="text-center">Privacy Policy </h1>
      <div className="row">
        <div className="col-12 col-md-10  m-auto">
          <div className="mt-3">
            Your privacy is important to us. It is PVSQUARE PRIVATE LIMITED's
            policy to respect your privacy regarding any information we may
            collect from you across our website,{" "}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href=" http://cxdeployer.com"
            >
              http://cxdeployer.com
            </a>
            , and other sites we own and operate.
          </div>
          <div>
            We use your data to provide and improve the Service. By using the
            Service, you agree to the collection and use of information in
            accordance with this policy. Unless otherwise defined in this
            Privacy Policy, terms used in this Privacy Policy have the same
            meanings as in our Terms of Service.
          </div>

          <PolicySection>
            <Heading2>1. Information we collect</Heading2>
            <Heading3>Log data</Heading3>
            <Para>
              When you visit our website, our servers may automatically log the
              standard data provided by your web browser. It may include your
              computer’s Internet Protocol (IP) address, your browser type and
              version, the pages you visit, the time and date of your visit, the
              time spent on each page, and other details.
            </Para>

            <Heading3>Device data</Heading3>
            <Para>
              We may also collect data about the device you’re using to access
              our website. This data may include the device type, operating
              system, unique device identifiers, device settings, and
              geo-location data. What we collect can depend on the individual
              settings of your device and software. We recommend checking the
              policies of your device manufacturer or software provider to learn
              what information they make available to us.
            </Para>

            <Heading3>Personal information</Heading3>
            <Para>
              We may ask for personal information, such as your:
              <ul>
                <li>Name</li>
                <li>Email</li>
                <li>Social media profiles </li>
                <li>Date of birth </li>
                <li>Phone/mobile number </li>
                <li>Home/Mailing address </li>
                <li>Work address </li>
              </ul>
            </Para>

            <Heading3>User Content</Heading3>
            <Para>
              The data or information that you actively create while using our
              services. It may include, but is not limited to text, images,
              diagrams, comments, messages, sharing invitations, documents,
              audio material, video material and audio-visual material are
              regarded as user content. We store your content securely and only
              provide access by your security credentials unless the diagram
              data has been made public by you.
            </Para>
          </PolicySection>

          <PolicySection>
            <Heading2>2. Legal bases for processing</Heading2>
            <Para>
              We will process your personal information lawfully, fairly and in
              a transparent manner. We collect and process information about you
              only where we have legal bases for doing so.
            </Para>
            <Para>
              These legal bases depend on the services you use and how you use
              them, meaning we collect and use your information only where:
              <ul>
                <li>
                  it’s necessary for the performance of a contract to which you
                  are a party or to take steps at your request before entering
                  into such a contract (for example, when we provide a service
                  you request from us);
                </li>
                <li>
                  it satisfies a legitimate interest (which is not overridden by
                  your data protection interests), such as for research and
                  development, to market and promote our services, and to
                  protect our legal rights and interests;
                </li>
                <li>
                  you give us consent to do so for a specific purpose (for
                  example, you might consent to us sending you our newsletter);
                  or
                </li>
                <li>
                  we need to process your data to comply with a legal
                  obligation.
                </li>
              </ul>
            </Para>
            <Para>
              Where you consent to our use of information about you for a
              specific purpose, you have the right to change your mind at any
              time (but this will not affect any processing that has already
              taken place).
            </Para>
            <Para>
              We don’t keep personal information for longer than is necessary.
              While we retain this information, we will protect it within
              commercially acceptable means to prevent loss and theft, as well
              as unauthorised access, disclosure, copying, use or modification.
              That said, we advise that no method of electronic transmission or
              storage is 100% secure and cannot guarantee absolute data
              security. If necessary, we may retain your personal information
              for our compliance with a legal obligation or in order to protect
              your vital interests or the vital interests of another natural
              person.
            </Para>
          </PolicySection>

          <PolicySection>
            <Heading2>3. Collection and use of information</Heading2>
            <Para>
              We may collect, hold, use and disclose information for the
              following purposes and personal information will not be further
              processed in a manner that is incompatible with these purposes:
              <ul>
                <li>
                  to enable you to customise or personalise your experience of
                  our website;
                </li>
                <li>to contact and communicate with you;</li>
                <li>
                  for internal record keeping and administrative purposes;
                </li>
                <li>
                  for analytics, market research and business development,
                  including to operate and improve our website, associated
                  applications and associated social media platforms;
                </li>
                <li>
                  to run competitions and/or offer additional benefits to you;
                </li>
                <li>
                  for advertising and marketing, including to send you
                  promotional information about our products and services and
                  information about third parties that we consider may be of
                  interest to you;
                </li>
                <li>
                  to comply with our legal obligations and resolve any disputes
                  that we may have; and
                </li>
                <li>to consider your employment application.</li>
              </ul>
            </Para>
          </PolicySection>

          <PolicySection>
            <Heading2>
              4. Disclosure of personal information to third parties
            </Heading2>
            <Para>
              We may disclose personal information to:
              <ul>
                <li>
                  third party service providers for the purpose of enabling them
                  to provide their services, including (without limitation) IT
                  service providers, data storage, web-hosting and server
                  providers, debt collectors, maintenance or problem-solving
                  providers, marketing or advertising providers, professional
                  advisors and payment systems operators;
                </li>
                <li>our employees, contractors and/or related entities;</li>
                <li>sponsors or promoters of any competition we run;</li>
                <li>
                  credit reporting agencies, courts, tribunals and regulatory
                  authorities, in the event you fail to pay for goods or
                  services we have provided to you;
                </li>
                <li>
                  courts, tribunals, regulatory authorities and law enforcement
                  officers, as required by law, in connection with any actual or
                  prospective legal proceedings, or in order to establish,
                  exercise or defend our legal rights;
                </li>
                <li>
                  third parties, including agents or sub-contractors, who assist
                  us in providing information, products, services or direct
                  marketing to you; and
                </li>
                <li>third parties to collect and process data.</li>
              </ul>
            </Para>
          </PolicySection>

          <PolicySection>
            <Heading2>
              5. International transfers of personal information
            </Heading2>
            <Para>
              The personal information we collect is stored and processed in
              India, United States and Singapore, or where we or our partners,
              affiliates and third-party providers maintain facilities. By
              providing us with your personal information, you consent to the
              disclosure to these overseas third parties.
            </Para>
            <Para>
              We will ensure that any transfer of personal information from
              countries in the European Economic Area (EEA) to countries outside
              the EEA will be protected by appropriate safeguards, for example
              by using standard data protection clauses approved by the European
              Commission, or the use of binding corporate rules or other legally
              accepted means.
            </Para>
            <Para>
              Where we transfer personal information from a non-EEA country to
              another country, you acknowledge that third parties in other
              jurisdictions may not be subject to similar data protection laws
              to the ones in our jurisdiction. There are risks if any such third
              party engages in any act or practice that would contravene the
              data privacy laws in our jurisdiction and this might mean that you
              will not be able to seek redress under our jurisdiction’s privacy
              laws.
            </Para>
          </PolicySection>

          <PolicySection>
            <Heading2>
              6. Your rights and controlling your personal information
            </Heading2>
            <Para>
              <strong className="mr-1">Choice and consent:</strong>
              By providing personal information to us, you consent to us
              collecting, holding, using and disclosing your personal
              information in accordance with this privacy policy. If you are
              under 18 (Eighteen) years of age, you must have, and warrant to
              the extent permitted by law to us, that you have your parent or
              legal guardian’s permission to access and use the website and they
              (your parents or guardian) have consented to you providing us with
              your personal information. You do not have to provide personal
              information to us, however, if you do not, it may affect your use
              of this website or the products and/or services offered on or
              through it.
            </Para>
            <Para>
              <strong className="mr-1">Information from third parties:</strong>
              If we receive personal information about you from a third party,
              we will protect it as set out in this privacy policy. If you are a
              third party providing personal information about somebody else,
              you represent and warrant that you have such person’s consent to
              provide the personal information to us.
            </Para>
            <Para>
              <strong className="mr-1">Restrict:</strong>
              You may choose to restrict the collection or use of your personal
              information. If you have previously agreed to us using your
              personal information for direct marketing purposes, you may change
              your mind at any time by contacting us using the details below. If
              you ask us to restrict or limit how we process your personal
              information, we will let you know how the restriction affects your
              use of our website or products and services.
            </Para>
            <Para>
              <strong className="mr-1">Access and data portability:</strong>
              You may request details of the personal information that we hold
              about you. You may request a copy of the personal information we
              hold about you. Where possible, we will provide this information
              in CSV format or other easily readable machine format. You may
              request that we erase the personal information we hold about you
              at any time. You may also request that we transfer this personal
              information to another third party.
            </Para>
            <Para>
              <strong className="mr-1">Correction</strong>
              If you believe that any information we hold about you is
              inaccurate, out of date, incomplete, irrelevant or misleading,
              please contact us using the details below. We will take reasonable
              steps to correct any information found to be inaccurate,
              incomplete, misleading or out of date.
            </Para>
            <Para>
              <strong className="mr-1">Notification of data breaches:</strong>
              We will comply laws applicable to us in respect of any data
              breach.
            </Para>
            <Para>
              <strong className="mr-1">Complaints</strong>
              If you believe that we have breached a relevant data protection
              law and wish to make a complaint, please contact us using the
              details below and provide us with full details of the alleged
              breach. We will promptly investigate your complaint and respond to
              you, in writing, setting out the outcome of our investigation and
              the steps we will take to deal with your complaint. You also have
              the right to contact a regulatory body or data protection
              authority in relation to your complaint.
            </Para>
            <Para>
              <strong className="mr-1">Unsubscribe</strong>
              To unsubscribe from our e-mail database or opt-out of
              communications (including marketing communications), please
              contact us at
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="mailto:contact@cxdeployer.com"
              >
                contact@cxdeployer.com
              </a>
              or opt-out using the opt-out facilities provided in the
              communication.
            </Para>
          </PolicySection>

          <PolicySection>
            <Heading2>7. Service Providers</Heading2>
            <Para>
              We may employ third party companies and individuals to facilitate
              our Service ("Service Providers"), to provide the Service on our
              behalf, to perform Service-related services or to assist us in
              analyzing how our Service is used.
            </Para>
            <Para>
              These third parties have access to your Personal Data only to
              perform these tasks on our behalf and are obligated not to
              disclose or use it for any other purpose.
            </Para>
            <Heading3>Analytics</Heading3>
            <Para>
              Google Analytics is a web analytics service offered by Google that
              tracks and reports website traffic. Google uses the data collected
              to track and monitor the use of our Service. This data is shared
              with other Google services. Google may use the collected data to
              contextualize and personalize the ads of its own advertising
              network.
            </Para>
            <Para>
              For more information on the privacy practices of Google, please
              visit the Google Privacy Terms web page:
              http://www.google.com/intl/en/policies/privacy/
            </Para>

            <Heading3>Google AdWords</Heading3>
            <Para>
              Google AdWords remarketing service is provided by Google Inc.
            </Para>
            <Para>
              You can opt-out of Google Analytics for Display Advertising and
              customize the Google Display Network ads by visiting the Google
              Ads Settings page:
              <a
                rel="noopener noreferrer"
                target="_blank"
                href=" http://www.google.com/settings/ads "
              >
                http://www.google.com/settings/ads
              </a>
            </Para>
            <Para>
              Google also recommends installing the Google Analytics Opt-out
              Browser Add-on -
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://tools.google.com/dlpage/gaoptout"
              >
                https://tools.google.com/dlpage/gaoptout
              </a>
              - for your web browser. Google Analytics Opt-out Browser Add-on
              provides visitors with the ability to prevent their data from
              being collected and used by Google Analytics.
            </Para>
            <Para>
              For more information on the privacy practices of Google, please
              visit the Google Privacy Terms web page:
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="http://www.google.com/intl/en/policies/privacy/  "
              >
                http://www.google.com/intl/en/policies/privacy/
              </a>
            </Para>
            <Heading3>Payments</Heading3>
            <Para>
              We provide paid products and services within the Service. In that
              case, we use third-party services for payment processing (e.g.
              payment processors).
            </Para>
            <Para>
              We will not store or collect your payment card details. That
              information is provided directly to our third-party payment
              processors whose use of your personal information is governed by
              their Privacy Policy. These payment processors adhere to the
              standards set by PCI-DSS as managed by the PCI Security Standards
              Council, which is a joint effort of brands like Visa, MasterCard,
              American Express and Discover. PCI-DSS requirements help ensure
              the secure handling of payment information.
            </Para>
            <Para>
              The payment processor we work with is:{" "}
              <i>PayPal and Braintree </i>
              <br />
              Their Privacy Policy can be viewed at
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.paypal.com/webapps/mpp/ua/privacy-full"
              >
                https://www.paypal.com/webapps/mpp/ua/privacy-full
              </a>
            </Para>

            <Heading3>Cookies</Heading3>
            <Para>
              We use “cookies” to collect information about you and your
              activity across our site. A cookie is a small piece of data that
              our website stores on your computer, and accesses each time you
              visit, so we can understand how you use our site. This helps us
              serve you content based on preferences you have specified. Please
              refer to our Cookie Policy for more information.
            </Para>
          </PolicySection>

          <PolicySection>
            <Heading2>9. Business transfers</Heading2>
            <Para>
              If we or our assets are acquired, or in the unlikely event that we
              go out of business or enter bankruptcy, we would include data
              among the assets transferred to any parties who acquire us. You
              acknowledge that such transfers may occur, and that any parties
              who acquire us may continue to use your personal information
              according to this policy.
            </Para>
          </PolicySection>

          <PolicySection>
            <Heading2>10. Limits of our policy</Heading2>
            <Para>
              Our website may link to external sites that are not operated by
              us. Please be aware that we have no control over the content and
              policies of those sites, and cannot accept responsibility or
              liability for their respective privacy practices.
            </Para>
          </PolicySection>

          <PolicySection>
            <Heading2>11. Changes to this policy</Heading2>
            <Para>
              At our discretion, we may change our privacy policy to reflect
              current acceptable practices. We will take reasonable steps to let
              users know about changes via our website. Your continued use of
              this site after any changes to this policy will be regarded as
              acceptance of our practices around privacy and personal
              information.
            </Para>
            <Para>
              If we make a significant change to this privacy policy, for
              example changing a lawful basis on which we process your personal
              information, we will ask you to re-consent to the amended privacy
              policy.
            </Para>
          </PolicySection>

          <PolicySection>
            <Heading2>12. Contact Us</Heading2>
            <Para>
              If you have any questions about this Privacy Policy, please
              contact us at contact@cxdeployer.com
            </Para>
            <Para>This policy is effective as of 1 March 2020.</Para>
          </PolicySection>
        </div>
      </div>
    </div>
  );
};
