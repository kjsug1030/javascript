import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    border: 0;
    padding: 0;
  }

  body {
    width:100vw;
    height:100vh;
    background-size: cover;
    background-image: url('../public/리코리스.jpg');
    background-repeat: no-repeat;
		font-family: 'Noto Sans JP', sans-serif;
  }

	ul, ol {
    list-style: none;
  }

  a {
      text-decoration: none
  }
`;

export default GlobalStyle;
