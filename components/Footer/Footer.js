import React from "react";
import { Footer, Num2019Market, Comment, PrivacyPolicy } from "./Footer.style";

const FooterComponent = () => {
  return (
      <>
    <Footer>
      <Num2019Market>©2019 Market</Num2019Market>
      <Comment>•</Comment>
      <PrivacyPolicy>Privacy Policy</PrivacyPolicy>
    </Footer>
    </>
  );
};

export default FooterComponent;
