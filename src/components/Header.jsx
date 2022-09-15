import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 45px;
  display: flex;
  align-items: center;
  padding-top: 50px;
  align-items: center;
  justify-content: space-around;
  z-index: 500;
  background-color: transparent;
  transition: 0.25s;
  h1 {
    font-size: 2.8rem;
    font-family: "Mrs Saint Delafield", cursive;
  }
  ul {
    display: flex;
    align-items: center;
    gap: 2rem;
    li {
      transition: 0.25s letter-spacing;
      &:hover {
        letter-spacing: 0.1rem;
      }
    }
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <StyledLink to="/">
        <h1>Taeh</h1>
      </StyledLink>
      <ul>
        <StyledLink to="/">
          <li>Home</li>
        </StyledLink>
        <StyledLink to="/develop">
          <li>Develop</li>
        </StyledLink>
        <StyledLink to="/contact">
          <li>Contact</li>
        </StyledLink>
      </ul>
    </HeaderWrapper>
  );
};

export default Header;
