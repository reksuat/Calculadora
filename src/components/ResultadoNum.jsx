import React from "react";
import Card, { Secao, TituloSecao, Grid } from "./Card";

function ResultadoNum({ dados = {} }) {
  return (
    <Secao>
      <TituloSecao>📊 Estatísticas Numéricas</TituloSecao>
      <Grid>
        <Card titulo="Média" valor={dados.media} />
        <Card titulo="Mediana" valor={dados.mediana} />
        <Card titulo="Moda" valor={dados.moda} />
        <Card titulo="Mínimo" valor={dados.minimo} />
        <Card titulo="Máximo" valor={dados.maximo} />
        <Card titulo="Soma Total" valor={dados.soma} />
      </Grid>
    </Secao>
  );
}

export default ResultadoNum;
