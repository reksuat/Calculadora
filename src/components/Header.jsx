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

function Header() {
  return (
    <HeaderContainer>
      <h1>Calculadora de estatísticas</h1>
      <p style={{ color: (p) => p.theme.textMuted }}>
        Insira os dados númericos ou palavras separados por vírgula para obter
        as estatísticas correspondentes.
      </p>
    </HeaderContainer>
  );
}
export default Header;
