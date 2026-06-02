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
        transform: translateY(-5px);
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

function Card({ titulo, valor }) {
  return (
    <CardContainer>
      <Titulo>{titulo}</Titulo>
      <Valor>{valor}</Valor>
    </CardContainer>
  );
}
export default Card;
