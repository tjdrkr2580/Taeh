import React from "react";
import styled from "styled-components";

const ToggleWrapper = styled.section`
  position: absolute;
  bottom: 7%;
  right: 5%;
  cursor: pointer;
  width: 75px;
  height: 75px;
  border-radius: 50%;
  background: ${(props) => props.theme.toggleModeBtn};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.25s;

  &:hover {
    background: ${(props) => props.theme.HoverToggleBtn};
  }
`;

const ToggleMode = ({ setDarkmode, darkmode }) => {
  const onClickToggleBtn = () => {
    setDarkmode(!darkmode);
    console.log(darkmode);
  };
  return (
    <ToggleWrapper onClick={onClickToggleBtn}>
      {darkmode ? "🌛" : "🌞"}
    </ToggleWrapper>
  );
};

export default ToggleMode;
