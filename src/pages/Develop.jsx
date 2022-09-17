import React from "react";
import styled from "styled-components";
import PageTransition from "../components/PageTransition";
import ProjectSlider from "../components/ProjectSlider";

const DeveloperWrapper = styled.section`
  margin-top: 13rem;
  h1 {
    text-align: center;
    margin-bottom: 2rem;
  }
`;

const Develop = () => {
  return (
    <PageTransition>
      <DeveloperWrapper>
        <h1>드래그 해라</h1>
        <ProjectSlider />
      </DeveloperWrapper>
    </PageTransition>
  );
};

export default Develop;
