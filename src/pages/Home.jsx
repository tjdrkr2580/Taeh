import React from "react";
import styled, { keyframes } from "styled-components";
import PageTransition from "../components/PageTransition";
import Draggable from "react-draggable";
import profile from "../assets/profile.jpg";
import { FaCarSide } from "react-icons/fa";

const IntroductionAnimation = keyframes`
  0% {
      transform: translateY(0px);
  }
  50%{
    transform: translateY(5px);
  }
  100%{
    transform: translateY(0px);
  }
`;

const Introduction = styled.section`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  img {
    width: 150px;
    height: 150px;
  }
  h1 {
    font-family: "Gowun Dodum", sans-serif;
    font-size: 1rem;
  }
  .animation-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.2rem;
    animation: ${IntroductionAnimation} 2s infinite linear;
  }
`;

const Textwrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
`;

const HomeWrapper = styled.section`
  width: 100vw;
  display: flex;
  flex-direction: column;
`;

const ShiftCar = keyframes`
  0% {
    left: -5vw;
  }
  10% {
    transform: translateY(3px);
  }
  20% {
    transform: translateY(0px);
  }
  30% {
    transform: translateY(-3px);
  }
  40% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(3px);
  }
  60% {
    transform: translateY(0px);
  }
  70% {
    transform: translateY(-3px);
  }
  80% {
    transform: translateY(0px);
  }
  90% {
    transform: translateY(3px);
  }
  100% {
    transform: translateY(0px);
    left: 105vw;
  }
`;

const CarWrapper = styled.section`
  cursor: pointer;
  position: fixed;
  bottom: -1.8%;
  width: auto;
  height: auto;
  animation: ${ShiftCar} 7.5s linear infinite;
`;

const Home = () => {
  return (
    <PageTransition>
      <HomeWrapper>
        <Introduction>
          <div className="animation-box">
            <img src={profile} alt="Profile" />
            <Textwrapper>
              <h1>움직이는 자동차를 마우스로</h1>
              <h1>살포시 눌러보시겠어요?</h1>
            </Textwrapper>
          </div>
        </Introduction>
        <CarWrapper>
          <FaCarSide size={64} />
        </CarWrapper>
      </HomeWrapper>
    </PageTransition>
  );
};

export default Home;
