import React from "react";
import styled from "styled-components";
import Card, { Secao, TituloSecao, Grid } from "./Card";

const ListaFrequencia = styled.ul`
  list-style: none;
  padding: 0;
  margin: 12px 0 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ItemFrequencia = styled.li`
  background-color: ${(props) => props.theme.card};
  border: 1px solid ${(props) => props.theme.borda};
  border-radius: 10px;
  padding: 10px 12px;
  color: ${(props) => props.theme.text};
  display: flex;
  justify-content: space-between;
  gap: 12px;
  word-break: break-word;
`;

const TextoFrequencia = styled.span`
  color: ${(props) => props.theme.text};
  font-weight: 600;
`;

const ContadorFrequencia = styled.span`
  color: ${(props) => props.theme.textMuted};
  white-space: nowrap;
`;

function ResultadoString({ dados = {} }) {
  const frequencia = Array.isArray(dados.frequenciaStrings)
    ? dados.frequenciaStrings
    : Object.entries(dados.frequenciaStrings || {});

  return (
    <Secao>
      <TituloSecao>📊 Estatísticas de Texto</TituloSecao>

      <Grid>
        <Card titulo="Total de Strings" valor={dados.totalStrings} />
        <Card titulo="Strings únicas" valor={dados.stringsUnicas} />
        <Card titulo="String mais longa" valor={dados.stringMaisLonga} />
        <Card titulo="String mais curta" valor={dados.stringMaisCurta} />
      </Grid>

      <ListaFrequencia>
        <ItemFrequencia>
          <TextoFrequencia>Frequência das Strings</TextoFrequencia>
          <ContadorFrequencia>quantidade</ContadorFrequencia>
        </ItemFrequencia>
        {frequencia.length > 0 ? (
          frequencia.map(([texto, quantidade]) => (
            <ItemFrequencia key={`${texto}-${quantidade}`}>
              <TextoFrequencia>{texto}</TextoFrequencia>
              <ContadorFrequencia>{quantidade}</ContadorFrequencia>
            </ItemFrequencia>
          ))
        ) : (
          <ItemFrequencia>
            <TextoFrequencia>Nenhuma palavra registrada ainda.</TextoFrequencia>
            <ContadorFrequencia>0</ContadorFrequencia>
          </ItemFrequencia>
        )}
      </ListaFrequencia>
    </Secao>
  );
}

export default ResultadoString;
