import React from "react";
import styled from "styled-components";
import PageTransition from "../components/PageTransition";
import { DiGithubFull } from "react-icons/di";
import { SiKakao } from "react-icons/si";
import { GrMedium } from "react-icons/gr";

const ContactWrapper = styled.section`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const IconsWrapper = styled.ul`
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: center;

  li {
    cursor: pointer;
  }
`;

const Contact = () => {
  return (
    <PageTransition>
      <ContactWrapper>
        <h1>
          계속해서 앞으로 나아가는 개발자 <span>김태현</span>이 되겠습니다.
        </h1>
        <IconsWrapper>
          <li>
            <a
              href="https://github.com/tjdrkr2580"
              target="_blank"
              rel="noopener noreferrer"
            >
              {<DiGithubFull size={64} />}
            </a>
          </li>
          <li>
            <a
              href="https://github.com/tjdrkr2580"
              target="_blank"
              rel="noopener noreferrer"
            >
              {<SiKakao size={64} />}
            </a>
          </li>
          <li>
            <a
              href="https://github.com/tjdrkr2580"
              target="_blank"
              rel="noopener noreferrer"
            >
              {<GrMedium size={36} />}
            </a>
          </li>
        </IconsWrapper>
      </ContactWrapper>
    </PageTransition>
  );
};

export default Contact;
