import React from "react";
import styled from "styled-components";

const ToggleWrapper = styled.button`
  cursor: pointer;
  border: none;
  position: fixed;
  bottom: 5%;
  right: 5%;
  width: 4.5rem;
  height: 4.5rem;
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
  };
  return (
    <ToggleWrapper onClick={onClickToggleBtn}>
      {darkmode ? "🌛" : "🌞"}
    </ToggleWrapper>
  );
};

export default ToggleMode;
