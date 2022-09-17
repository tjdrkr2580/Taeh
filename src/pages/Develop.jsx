import React from "react";
import styled from "styled-components";
import PageTransition from "../components/PageTransition";
import ProjectSlider from "../components/ProjectSlider";

const DeveloperWrapper = styled.section`
  margin-top: 12rem;
  .introduce {
    font-family: "Gowun Dodum", sans-serif;
    text-align: center;
    margin-bottom: 2rem;
  }
`;

const Develop = () => {
  return (
    <PageTransition>
      <DeveloperWrapper>
        <h1 className="introduce">
          옆으로 넘기시면 더 많은 정보를 확인하실 수 있습니다!
        </h1>
        <ProjectSlider />
      </DeveloperWrapper>
    </PageTransition>
  );
};

export default Develop;
