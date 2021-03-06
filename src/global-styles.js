import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    :root {
        --primary-color: rgb(0, 120, 215);
        --secondary-color: rgb(43, 43, 43);
        --light-color: rgb(170, 170, 170);
    }

    * {
        margin: 0;
        padding: 0;
    }

    body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
            'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
            'Helvetica Neue', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
            monospace;
    }

    h2,h3,h4,h5,h6 {
        font-family: 'Roboto Slab', serif;
    }

`;

export const LockBody = createGlobalStyle`
    body {
        overflow: hidden
    }
`;

export const ReleaseBody = createGlobalStyle`
    body {
        overflow: visible
    }
`;

export default GlobalStyles;
