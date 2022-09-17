import React from "react";
import styled from "styled-components";
import PageTransition from "../components/PageTransition";
import Draggable from "react-draggable";

const DevelopWrapper = styled.section`
  width: 100vw;
`;

const ProjectWrapper = styled.ul`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0.8rem;
  li {
    font-family: "Gowun Dodum", sans-serif;
    font-size: 2.5vw;
  }
`;

const Develop = () => {
  return (
    <PageTransition>
      <DevelopWrapper>
        <ProjectWrapper>
          <li>
            <h1>Paint Canvas</h1>
            <p></p>
          </li>
          <li>Wow Chat</li>
          <li>Example Portfolio</li>
          <li>mIIu</li>
          <li>Kim Tae Hyun OS</li>
          <li>CoinTracker</li>
          <li>Mari SNS</li>
          <li>Portfolio</li>
        </ProjectWrapper>
      </DevelopWrapper>
    </PageTransition>
  );
};

export default Develop;
