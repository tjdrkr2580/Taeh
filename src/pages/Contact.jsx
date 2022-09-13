import React from "react";
import styled from "styled-components";
import PageTransition from "../components/PageTransition";

const ContactWrapper = styled.section`
  width: 100vw;
  position: absolute;
  left: 50%;
  top: 50%;
`;

const Contact = () => {
  return (
    <PageTransition>
      <ContactWrapper>Contact</ContactWrapper>
    </PageTransition>
  );
};

export default Contact;
