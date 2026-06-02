import React from "react";

import EstiloGlobal from "./styles/estiloGlobal";
import { ThemeProvider } from "styled-components";
import { paleta } from "./styles/paleta";
import Header from "./components/Header";
import Input from "./components/Input";
import ResultadoNum from "./components/ResultadoNum";
import ResultadoString from "./components/ResultadoString";
function App() {
  return (
    <ThemeProvider theme={paleta}>
      <EstiloGlobal />
      <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <Header />
        <Input />
        <ResultadoNum />
        <ResultadoString />
      </div>
    </ThemeProvider>
  );
}

export default App;
