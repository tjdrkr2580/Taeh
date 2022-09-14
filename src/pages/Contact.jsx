import React from "react";
import styled, { keyframes } from "styled-components";
import PageTransition from "../components/PageTransition";
import { VscGithub } from "react-icons/vsc";
import { RiKakaoTalkFill } from "react-icons/ri";
import { AiFillMediumSquare } from "react-icons/ai";
import { SiMinutemailer } from "react-icons/si";

const textEffect = keyframes`
  0% {
    filter: blur(2rem);
  }
  100% {
    filter: blur(0);
  }
`;

const ContactWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: ${textEffect} 1.2s ease forwards;
  .text-box {
    width: 100%;
    gap: 1.2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h1 {
      font-size: 1.3rem;
      font-family: "Gowun Dodum", sans-serif;
    }
  }
`;

const IconsWrapper = styled.ul`
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  color: cyan;
`;

const Contact = () => {
  return (
    <PageTransition>
      <ContactWrapper>
        <div className="text-box">
          <h1>Mari</h1>
          <h1>Kim Tae Hyun</h1>
          <h1>Intec.</h1>
        </div>
        ㅡ
        <IconsWrapper>
          <li>
            <a
              href="https://github.com/tjdrkr2580"
              target="_blank"
              rel="noopener noreferrer"
            >
              {<VscGithub size={36} />}
            </a>
          </li>
          <li>
            <a
              href="https://open.kakao.com/o/sfNWlNue"
              target="_blank"
              rel="noopener noreferrer"
            >
              {<RiKakaoTalkFill size={36} />}
            </a>
          </li>
          <li>
            <a
              href="https://kimmarigold.medium.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              {<AiFillMediumSquare size={36} />}
            </a>
          </li>
        </IconsWrapper>
        .<br />.<br />.
        <a
          href="mailto:tjdrkr2580@naver.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiMinutemailer size={36} />
        </a>
      </ContactWrapper>
    </PageTransition>
  );
};

export default Contact;
