import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`


    :root{

        --background: #171717;
        --purple: #610094;
        --grey: #444444;

    }


    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }


    html{
        
        width: 100%;
        height: 100%;

        background: var(--background);
        @media (max-width: 1080px){
            font-size: 93.75%; //15px
        }

        @media (max-width: 720px){
            font-size: 87.5%; // 14px
        }
    }

    body{
        background: var(--background);
        --webkit-font-smoothing: antialiased;
        
    }

    body, input, textarea,button {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
    }

    h1, h2, strong{
        font-weight: 600;
    }

    button{
        cursor: pointer;
    }
    
    [disabled]{
        opacity: 0.6;
        cursor: not-allowed;
    }
`;
