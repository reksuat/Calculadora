import Botao from "./Botao";
import styled from "styled-components";

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 100%;
  margin: 25px auto;
  max-width: 400px;
  padding: 0 20px;
`;
const Label = styled.label`
  font-size: 1rem;
  margin-bottom: 5px;
  color: ${(props) => props.theme.text};
`;

const InputStyle = styled.input`
  width: 100%;
  box-sizing: border-box;
  padding: 14px 10px;
  font-size: 1rem;
  border-radius: 8px;
  border: 2px solid ${(props) => props.theme.primaria};
  background-color: transparent;
  color: ${(props) => props.theme.text};
`;

function Input({ entrada, setEntrada, calcular }) {
  return (
    <InputContainer>
      <Label htmlFor="entrada">Entrada de dados:</Label>
      <InputStyle
        id="entrada"
        type="text"
        value={entrada}
        onChange={(e) => setEntrada(e.target.value)}
        placeholder="ex: 10, amora, 20, gato"
      />
      <Botao onClick={calcular}>Calcular</Botao>
    </InputContainer>
  );
}

export default Input;
