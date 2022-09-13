import React from "react";
import styled, { keyframes } from "styled-components";
import PageTransition from "./PageTransition";

const StrokeAnimation = keyframes`
 0% {
    stroke-dashoffset: 326px;
  }
  100% {
    stroke-dashoffset: 0px;
  }
`;

const LoadingWrapper = styled.section`
  width: 100vw;
  height: 100vh;

  svg {
    fill: transparent;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    text {
      font-family: "Mrs Saint Delafield", cursive;
      font-size: 5em;
      stroke-width: 1px;
      stroke: ${(props) => props.theme.textColor};
      stroke-dasharray: 326px;
      animation: ${StrokeAnimation} 3s linear;
    }
  }
`;

const Loading = () => {
  return (
    <PageTransition>
      <LoadingWrapper>
        <svg viewBox="-225 -80 550 160">
          <text>Taeh</text>
        </svg>
      </LoadingWrapper>
    </PageTransition>
  );
};

export default Loading;
