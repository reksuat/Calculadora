import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  background-color: ${(props) => props.theme.card};
  border: 2px solid ${(props) => props.theme.borda};
  border-radius: 12px;
  padding: 16px;
  max-width: 400px;
  gap: 10px;
  text-align: center;
  transition: transform 0.2s ease;
  &:hover {
    transform: translateY(-2px);
  }
`;
const Titulo = styled.h3`
  color: ${(props) => props.theme.textMuted};
  text-transform: uppercase;
  margin-bottom: 8px;
  font-size: 1rem;
`;
const Valor = styled.p`
  color: ${(props) => props.theme.text};
  font-size: 1.5rem;
  font-weight: bold;
  word-break: break-all;
`;

export const Secao = styled.section`
  width: 100%;
  max-width: 100%;
  margin: 20px 0;
  padding: 0;
  flex: 1 1 320px;
`;

export const TituloSecao = styled.h3`
  color: ${(props) => props.theme.secundaria};
  text-transform: uppercase;
  padding-bottom: 8px;
  margin-bottom: 8px;
  font-size: 1rem;
`;
export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 12px;
`;

function Card({ titulo, valor }) {
  const valorFinal =
    valor !== undefined && valor !== null && valor !== "" ? valor : "-";
  return (
    <CardContainer>
      <Titulo>{titulo}</Titulo>
      <Valor>{valorFinal}</Valor>
    </CardContainer>
  );
}
export default Card;
