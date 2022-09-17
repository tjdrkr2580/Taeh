import React from "react";
import { Projects } from "../Project";
import Slider from "react-slick";
import { VscGithub } from "react-icons/vsc";
import { SiNotion } from "react-icons/si";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

const Tags = styled.ul`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  li {
    color: white;
    width: auto;
    padding: 0 5px;
    height: 20px;
    text-align: center;
    background-color: #333;
    transition: 0.4s background-color;
    &:hover {
      background-color: #919191;
    }
  }
`;

const ProjectCard = styled.ul`
  .project-box {
    img {
      width: 450px;
      height: 250px;
    }
    .canvas {
      width: 350px;
      height: 350px;
    }
    gap: 0.8rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Icons = styled.ul`
  display: flex;
  align-items: center;
  gap: 1.25rem;
`;

const ProjectSlider = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    speed: 500,
  };
  return (
    <Slider {...settings}>
      {Projects.map((project) => (
        <ProjectCard key={project.id}>
          <section className="project-box">
            <img
              src={project.image}
              alt={project.name}
              className={project.id === 1 ? "canvas" : "default"}
            />
            <h1>{project.name}</h1>
            <p>{project.desc}</p>
            <Tags>
              {project.stack.map((stack) => (
                <li key={stack}>{stack}</li>
              ))}
            </Tags>
            <Icons>
              <li>
                <a
                  href={project.notion}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiNotion size={28} />
                </a>
              </li>
              <li>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <VscGithub size={28} />
                </a>
              </li>
            </Icons>
          </section>
        </ProjectCard>
      ))}
    </Slider>
  );
};

export default ProjectSlider;
