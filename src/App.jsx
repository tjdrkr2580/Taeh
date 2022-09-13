import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ToggleMode from "./components/ToggleMode";
import Home from "./pages/Home";
import Study from "./pages/Study";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { dark, light } from "./GlobalTheme";

const GlobalStyle = createGlobalStyle`
  * {
    list-style: none;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.textColor}
  }
`;

function App() {
  const [darkmode, setDarkmode] = useState(false);
  return (
    <ThemeProvider theme={darkmode ? dark : light}>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stack" element={<Home />} />
          <Route path="/study" element={<Study />} />
        </Routes>
        <ToggleMode setDarkmode={setDarkmode} />
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
