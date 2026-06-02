import { createGlobalStyle } from "styled-components";

const EstiloGlobal = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&family=Roboto+Slab:wght@600;700&display=swap');
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

    body {
    font-family: 'Roboto', sans-serif;
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
    min-height: 100vh;
    }
        h1 {font-size: 2rem;}
        h3 {font-size: 1.4rem;}
        h1, h3 {
        color: ${(props) => props.theme.primaria};
        font-family: 'Roboto Slab', serif;
        margin-bottom: 10px;
        text-align: center;
        }

`;

export default EstiloGlobal;
