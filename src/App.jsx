import Router from "./Router";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import { dark, light } from "./GlobalTheme";
import { useEffect, useState } from "react";
import Snowfall from "react-snowfall";
import { useMediaQuery } from "react-responsive";
import { useMemo } from "react";

function App() {
  const [darkmode, setDarkmode] = useState(false);
  const systemPrefers = useMediaQuery({
    query: "(prefers-color-scheme: dark)",
  });
  useEffect(() => {
    if (systemPrefers === true) {
      setDarkmode(true);
    }
  }, []);
  const GlobalStyle = createGlobalStyle`
  * {
    list-style: none;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    color: ${(props) => props.theme.textColor};
  }

  body {
    /* font-family: 'Gowun Dodum', sans-serif;
    font-family: 'Mrs Saint Delafield', cursive;
    font-family: 'Source Sans Pro', sans-serif; */
    user-select: none;
    overflow-x: hidden;
    font-family: "Gowun Dodum", sans-serif;
    font-family: "Mrs Saint Delafield", cursive;
    font-family: "Source Sans Pro", sans-serif;
    transition: 0.25s;
    font-size: 16px;
    background: ${(props) => props.theme.bgColor};
  }
`;

  const style = useMemo(
    () => ({
      position: "fixed",
      width: "100vw",
      height: "100vh",
    }),
    []
  );

  return (
    <ThemeProvider theme={darkmode ? dark : light}>
      <GlobalStyle />
      <Snowfall
        color={darkmode ? "#fff" : "#b0b0b0"}
        snowflakeCount={50}
        style={style}
      />
      <Router darkmode={darkmode} setDarkmode={setDarkmode} />
    </ThemeProvider>
  );
}

export default App;
