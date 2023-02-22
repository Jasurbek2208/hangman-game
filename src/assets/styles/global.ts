import { createGlobalStyle } from "styled-components";
import "./fonts.css";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .container {
        padding: 0px 16px;
        margin: 0 auto;
        max-width: 700px;
        height: 100vh;
        font-family: 'Inter', sans-serif;
    }
`;
