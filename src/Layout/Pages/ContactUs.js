import React from 'react'
import { Link } from "react-router-dom";
import WhiteBlock from "../../components/UI/Blocks/WhiteBlock";

const ContactUs = () => {
  return (
    <WhiteBlock>
      <h4>
        Contact us at{" "}
        <a href="mailto:support@indianrailwaysinfo.com">
          support@indianrailwaysinfo.com
        </a>{" "}
        for any queries and advertisement!
      </h4>
    </WhiteBlock>
  );
}

export default ContactUs