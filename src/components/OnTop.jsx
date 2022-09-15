import React from "react";
import styled, { keyframes } from "styled-components";
import { HiOutlineArrowUp } from "react-icons/hi";

const onTopOpacity = keyframes`
  0% { 
    filter: opacity(0);
  }
  100% {
    filter: opacity(1);
  }
`;

const OnTopBtn = styled.button`
  border: none;
  position: fixed;
  bottom: 5%;
  left: 5%;
  width: 4.5rem;
  height: 4.5rem;
  border-radius: 50%;
  background: ${(props) => props.theme.toggleModeBtn};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.25s;
  animation: ${onTopOpacity} 1s linear forwards;

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
