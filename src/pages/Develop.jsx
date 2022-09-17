import React from "react";
import styled from "styled-components";
import PageTransition from "../components/PageTransition";
import Draggable from "react-draggable";
import { Projects } from "../Project";

const DevelopWrapper = styled.section`
  width: 100vw;
`;

const ProjectWrapper = styled.ul`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  gap: 1.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
      font-size: 2.2rem;
    }
    span {
      font-size: 1rem;
    }
  }
`;

const Develop = () => {
  return (
    <PageTransition>
      <DevelopWrapper>
        <ProjectWrapper>
          {Projects.map((project) => (
            <li>
              <h1>{project.name}</h1>
              <span>{project.desc}</span>
            </li>
          ))}
        </ProjectWrapper>
      </DevelopWrapper>
    </PageTransition>
  );
};

export default Develop;
