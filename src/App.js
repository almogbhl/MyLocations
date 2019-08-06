import React from "react";
import styled from "styled-components";
import GlobalStyle from "./styles/global.style";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes/Routes";

function App() {
  return (
    <Wrapper>
      <GlobalStyle />

      <Router>

        <Header />
        <Routes />
        <Footer />
        
      </Router>


    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;
