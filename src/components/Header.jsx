import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  background-color: ${(p) => p.theme.card};
  border-bottom: 2px solid ${(p) => p.theme.borda};
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;
const Subtitulo = styled.p`
  color: ${(p) => p.theme.textMuted || "#64748b"};
  max-width: 600px;
  margin: 0 auto;
  font-size: 1rem;
  line-height: 1.5;
`;

function Header() {
  return (
    <HeaderContainer>
      <h1>Calculadora de estatísticas</h1>
      <Subtitulo>
        Insira os dados númericos ou palavras separados por vírgula para obter
        as estatísticas correspondentes.
      </Subtitulo>
    </HeaderContainer>
  );
}
export default Header;
