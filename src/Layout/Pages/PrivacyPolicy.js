import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import React from "react";
import WhiteBlock from "../../components/UI/Blocks/WhiteBlock";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <>
      <WhiteBlock className="text-center">
        <strong>Privacy Policy</strong>
      </WhiteBlock>
      <WhiteBlock>
        This Privacy Policy governs the manner in which IndianRailways.info
        collects, uses, maintains and discloses information collected from users
        (each, a "User") of the IndianRailways.info website ("Site").
      </WhiteBlock>
      <WhiteBlock>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <p className="m-0">Personal identification information</p>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              We may collect personal & non-personal identification information
              from Users in a variety of ways, including, but not limited to,
              when Users visit our site, register on the site, place an order,
              fill out a form, respond to a survey, and in connection with other
              activities, services, features or resources we make available on
              our Site. Users may be asked for, as appropriate, name, email
              address, mailing address, phone number. Users may, however, visit
              our Site anonymously. We will collect personal identification
              information from Users only if they voluntarily submit such
              information to us. Users can always refuse to supply personally
              identification information, except that it may prevent them from
              engaging in certain Site related activities.
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <p className="m-0">Web browser cookies</p>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              Our Site may use "cookies" to enhance User experience. User's web
              browser places cookies on their hard drive for record-keeping
              purposes and sometimes to track information about them. User may
              choose to set their web browser to refuse cookies, or to alert you
              when cookies are being sent. If they do so, note that some parts
              of the Site may not function properly.
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <p className="m-0">How we use collected information</p>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              IndianRailways.info may collect and use Users personal information
              for the following purposes: To run and operate our Site We may
              need your information display content on the Site correctly. To
              improve customer service Information you provide helps us respond
              to your customer service requests and support needs more
              efficiently. To personalize user experience We may use information
              in the aggregate to understand how our Users as a group use the
              services and resources provided on our Site. To improve our Site
              We may use feedback you provide to improve our products and
              services. To run a promotion, contest, survey or other Site
              feature To send Users information they agreed to receive about
              topics we think will be of interest to them. To send periodic
              emails We may use the email address to send User information and
              updates pertaining to their order. It may also be used to respond
              to their inquiries, questions, and/or other requests.
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4a-content"
            id="panel4a-header"
          >
            <p className="m-0">How we protect your information</p>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              We adopt appropriate data collection, storage and processing
              practices and security measures to protect against unauthorized
              access, alteration, disclosure or destruction of your personal
              information, username, password, transaction information and data
              stored on our Site.
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel5a-content"
            id="panel5a-header"
          >
            <p className="m-0">Sharing your personal information</p>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              We may share or sell information with third parties for marketing
              or other purposes.We may use third party service providers to help
              us operate our business and the Site or administer activities on
              our behalf, such as sending out newsletters or surveys. We may
              share your information with these third parties for those limited
              purposes provided that you have given us your permission.
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel6a-content"
            id="panel6a-header"
          >
            <p className="m-0">Electronic newsletters</p>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              If User decides to opt-in to our mailing list, they will receive
              emails that may include company news, updates, related product or
              service information, etc. We may use third party service providers
              to help us operate our business and the Site or administer
              activities on our behalf, such as sending out newsletters or
              surveys. We may share your information with these third parties
              for those limited purposes provided that you have given us your
              permission.
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel7a-content"
            id="panel7a-header"
          >
            <p className="m-0">Third party websites</p>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              Users may find advertising or other content on our Site that link
              to the sites and services of our partners, suppliers, advertisers,
              sponsors, licencors and other third parties. We do not control the
              content or links that appear on these sites and are not
              responsible for the practices employed by websites linked to or
              from our Site. In addition, these sites or services, including
              their content and links, may be constantly changing. These sites
              and services may have their own privacy policies and customer
              service policies. Browsing and interaction on any other website,
              including websites which have a link to our Site, is subject to
              that website's own terms and policies.
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel8a-content"
            id="panel8a-header"
          >
            <p className="m-0">Advertising</p>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              Ads appearing on our site may be delivered to Users by advertising
              partners, who may set cookies. These cookies allow the ad server
              to recognize your computer each time they send you an online
              advertisement to compile non personal identification information
              about you or others who use your computer. This information allows
              ad networks to, among other things, deliver targeted
              advertisements that they believe will be of most interest to you.
              This privacy policy does not cover the use of cookies by any
              advertisers.
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel9a-content"
            id="panel9a-header"
          >
            <p className="m-0">Changes to this privacy policy</p>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              IndianRailways.info has the discretion to update this privacy
              policy at any time. When we do, we will post a notification on the
              main page of our Site. We encourage Users to frequently check this
              page for any changes to stay informed about how we are helping to
              protect the personal information we collect. You acknowledge and
              agree that it is your responsibility to review this privacy policy
              periodically and become aware of modifications.
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel10a-content"
            id="panel10a-header"
          >
            <p className="m-0">Your acceptance of these terms</p>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              By using this Site, you signify your acceptance of this policy. If
              you do not agree to this policy, please do not use our Site. Your
              continued use of the Site following the posting of changes to this
              policy will be deemed your acceptance of those changes.
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel11a-content"
            id="panel11a-header"
          >
            <p className="m-0">Contacting us</p>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              If you have any questions about this Privacy Policy, the practices
              of this site, or your dealings with this site, please{" "}
              <Link to="/contact-us">contact us</Link>
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel12a-content"
            id="panel12a-header"
          >
            <p className="m-0">About IndianRailways.info</p>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              This website is purely informational and for travel related
              information. It does not guarantee for veacity of any of the data.
              This is not an official website of The Ministry of Railways,
              Government of India. This website is not affiliated in any way
              with the aforesaid government entity i.e Indian Railways, IRCTC or
              any ofits subsidiaries etc. Please do not contact us for
              grievances or queries related to PNR Status, Reservation,
              Cancellation, Refund, Lost Ticket etc. You may like to visit the
              official website{" "}
              <a href="http://www.indianrail.gov.in" target="_blank" rel="noreferrer">
                http://www.indianrail.gov.in
              </a>{" "}
              for such enquiries.
            </p>
          </AccordionDetails>
        </Accordion>
      </WhiteBlock>
    </>
  );
};

export default PrivacyPolicy;
