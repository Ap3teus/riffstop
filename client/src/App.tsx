import { h } from 'preact';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import { theme } from './common/theme';
import AppRouter from './Router';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700;800&display=swap');


  body {
    margin: 0;
    font-family: 'Nanum Gothic', sans-serif;
    color: ${(props) => props.theme.colors.white()};
    background-color: ${(props) => props.theme.colors.gray.primary()}
  }
`;

export const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <AppRouter />
  </ThemeProvider>
);
