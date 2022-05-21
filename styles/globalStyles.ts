import { createGlobalStyle } from 'styled-components';
import { IThemeProps } from './themes';

type GlobalThemeProps = {
  theme: IThemeProps;
};

export const GlobalStyle = createGlobalStyle<GlobalThemeProps>`
  * {
    margin: 0;
    padding: 0;
  }
  body {
    font-family: 'Raleway', sans-serif;
    background-color: ${({ theme }) => theme.body};
    transition: 0.5s background-color ;
  }
`;
