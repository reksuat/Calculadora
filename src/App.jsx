import React, { useState } from "react";

import styled, { ThemeProvider } from "styled-components";
import EstiloGlobal from "./styles/estiloGlobal";
import { paleta } from "./styles/paleta";
import Header from "./components/Header";
import Input from "./components/Input";
import ResultadoNum from "./components/ResultadoNum";
import ResultadoString from "./components/ResultadoString";
import { calcularEstatisticasStrings } from "./utils/estatisticasStrings";

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

function parsearEntrada(texto) {
  return texto
    .split(",")
    .map((item) => {
      const trimmed = item.trim();
      const numero = Number(trimmed);
      return isNaN(numero) || trimmed === "" ? trimmed : numero;
    })
    .filter((item) => item !== "");
}

function App() {
  const [entrada, setEntrada] = useState("");
  const [dadosStrings, setDadosStrings] = useState({});

  function calcular() {
    const dadosBrutos = parsearEntrada(entrada);
    const statsStrings = calcularEstatisticasStrings(dadosBrutos);
    setDadosStrings(statsStrings);
  }

  return (
    <ThemeProvider theme={paleta}>
      <EstiloGlobal />
      <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <Header />
        <Input entrada={entrada} setEntrada={setEntrada} calcular={calcular} />
        <ResultadosContainer>
          <ResultadoNum />
          <ResultadoString dados={dadosStrings} />
        </ResultadosContainer>
      </div>
    </ThemeProvider>
  );
}

export default App;
