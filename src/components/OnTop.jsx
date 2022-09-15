import React from "react";
import styled from "styled-components";
import { HiOutlineArrowUp } from "react-icons/hi";

const OnTopBtn = styled.button`
  border: none;
  position: fixed;
  bottom: 5%;
  left: 5%;
  cursor: pointer;
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

const OnTop = () => {
  return (
    <OnTopBtn>
      <HiOutlineArrowUp size={24} />
    </OnTopBtn>
  );
};

export default OnTop;
