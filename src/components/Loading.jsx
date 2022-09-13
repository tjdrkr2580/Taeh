import React from "react";
import styled, { keyframes } from "styled-components";

const LoadingWrapper = styled.section`
  width: 100vw;
  height: 100vh;
`;

const TextAnimation = keyframes`
`;

const Loading = () => {
  return <LoadingWrapper>Loading</LoadingWrapper>;
};

export default Loading;
