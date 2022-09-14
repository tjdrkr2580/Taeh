import React from "react";
import styled from "styled-components";
import PageTransition from "../components/PageTransition";
import Draggable from "react-draggable";
import profile from "../assets/profile.jpg";

const Introduction = styled.section`
  display: flex;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  img {
    width: 150px;
    height: 150px;
  }
`;

const HomeWrapper = styled.section`
  width: 100vw;
  display: flex;
  flex-direction: column;
`;

const Home = () => {
  return (
    <PageTransition>
      <HomeWrapper>
        <Introduction>
          <img src={profile} alt="Profile Image" />
        </Introduction>
      </HomeWrapper>
    </PageTransition>
  );
};

export default Home;
