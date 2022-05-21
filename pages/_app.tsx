import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import useTheme from '../hooks/useTheme';
import Layout from '../layouts/Layout';
import { GlobalStyle } from '../styles/globalStyles';
import { darkMode, lightMode } from '../styles/themes';

function MyApp({ Component, pageProps }: AppProps) {
  const { theme } = useTheme();
  
  return (
    <ThemeProvider theme={theme === 'light' ? lightMode : darkMode}>
      <Layout>
        <GlobalStyle />
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
