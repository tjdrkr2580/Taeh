import React from "react";
import styled, { keyframes } from "styled-components";
import PageTransition from "../components/PageTransition";
import ProjectSlider from "../components/ProjectSlider";

const textEffect = keyframes`
  0% {
    filter: blur(0.2rem);
  }
  100% {
    filter: blur(0);
  }
`;

const DeveloperWrapper = styled.section`
  margin-top: 10rem;
  .introduce {
    font-size: 1.2rem;
    font-family: "Gowun Dodum", sans-serif;
    text-align: center;
    margin-bottom: 2rem;
  }
  animation: ${textEffect} 0.5s ease-in-out forwards;
`;

const Develop = () => {
  return (
    <PageTransition>
      <DeveloperWrapper>
        <h1 className="introduce">
          옆으로 넘기시면 더 많은 정보를
          <br />
          확인하실 수 있습니다!
        </h1>
        <ProjectSlider />
      </DeveloperWrapper>
    </PageTransition>
  );
};

export default Develop;
