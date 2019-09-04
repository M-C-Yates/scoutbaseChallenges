import React from 'react';
import AppRouter from './Router/AppRouter';
import { ApolloProvider } from '@apollo/react-hooks';
import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`


  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    border: none;
    font-size: inherit;
  }

  ul,
  ol {
    list-style: none;
  }

  html {
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
    font-size: 62.5%;

    --font-color: #18131a;
    --bg-white: #FBF7FF;
    --bg-primary: #DB7E2A

    --boxshadow: 1rem 1rem 0 var(--bg-primary);

    --br: 2px;
  }

  body {
    font-size: 1.8rem;
  }

  a {
    color: var(--font-color);
    border-bottom: 3px solid transparent;

    text-decoration: none;
    transition: all 0.3s ease;


    &:hover {
      border-bottom: 3px solid var(--bg-primary);
    }
  }

  h1 {
    font-size: 4rem;
    font-family: 'Lato', sans-serif;
  }

  h2 {
    font-size: 3.5rem;
    font-family: 'Lato', sans-serif;
  }

  h3 {
    font-size: 3rem;
    font-family: 'Lato', sans-serif;
  }

  h4 {
    font-size: 2.8rem;
    font-family: 'Lato', sans-serif;
  }
  h5 {
    font-size: 2.5rem;
    font-family: 'Lato', sans-serif;
  }

  h6 {
    font-size: 2.2rem;
    font-family: 'Lato', sans-serif;
  }
`


function App(props) {
  return (
    <ApolloProvider client={props.client}>
    <GlobalStyle />
    <AppRouter />
    </ApolloProvider>
  );
}

export default App;
