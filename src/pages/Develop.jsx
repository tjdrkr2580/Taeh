import React from "react";
import styled from "styled-components";
import PageTransition from "../components/PageTransition";
import Draggable from "react-draggable";

const DevelopWrapper = styled.section`
  width: 100vw;
  position: absolute;
  left: 50%;
  top: 50%;
`;

const Develop = () => {
  return (
    <PageTransition>
      <DevelopWrapper>Develop</DevelopWrapper>
    </PageTransition>
  );
};

export default Develop;
