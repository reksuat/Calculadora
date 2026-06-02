import React from "react";

import styled, { ThemeProvider } from "styled-components";
import EstiloGlobal from "./styles/estiloGlobal";
import { paleta } from "./styles/paleta";
import Header from "./components/Header";
import Input from "./components/Input";
import ResultadoNum from "./components/ResultadoNum";
import ResultadoString from "./components/ResultadoString";

const ResultadosContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px 24px;

  @media (min-width: 980px) {
    align-items: stretch;
  }
`;

function App() {
  return (
    <ThemeProvider theme={paleta}>
      <EstiloGlobal />
      <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <Header />
        <Input />
        <ResultadosContainer>
          <ResultadoNum />
          <ResultadoString />
        </ResultadosContainer>
      </div>
    </ThemeProvider>
  );
}

export default App;
