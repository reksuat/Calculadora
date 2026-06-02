import styled from "styled-components";

const BotaoStyled = styled.button`
  width: 60%;
  background-color: ${(p) => p.theme.primaria};
  border: none;
  color: ${(p) => p.theme.text};
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  margin: 4px 2px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: ${(p) => p.theme.secundaria};
  }
`;

function Botao({ children, onClick }) {
  return <BotaoStyled onClick={onClick}>{children}</BotaoStyled>;
}
export default Botao;
