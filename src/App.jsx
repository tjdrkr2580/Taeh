import Router from "./Router";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { dark, light } from "./GlobalTheme";
import { useState } from "react";
import Snowfall from "react-snowfall";

function App() {
  const [darkmode, setDarkmode] = useState(true);
  const GlobalStyle = createGlobalStyle`
  * {
    list-style: none;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    color: ${(props) => props.theme.textColor};
  }

  body {
    user-select: none;
    /* font-family: 'Gowun Dodum', sans-serif;
    font-family: 'Mrs Saint Delafield', cursive;
    font-family: 'Source Sans Pro', sans-serif; */
    overflow-x: hidden;
    font-family: "Gowun Dodum", sans-serif;
    font-family: "Mrs Saint Delafield", cursive;
    font-family: "Source Sans Pro", sans-serif;
    transition: 0.25s;
    font-size: 16px;
    background: ${(props) => props.theme.bgColor};
  }
`;
  return (
    <ThemeProvider theme={darkmode ? dark : light}>
      <GlobalStyle />
      <Snowfall color={darkmode ? "#fff" : "#3c7c7c7"} snowflakeCount={35} />
      <Router darkmode={darkmode} setDarkmode={setDarkmode} />
    </ThemeProvider>
  );
}

export default App;
