import type { AppProps } from 'next/app';
import Script from 'next/script';
import { ThemeProvider } from 'styled-components';
import useTheme from '../hooks/useTheme';
import Layout from '../layouts/Layout';
import { GlobalStyle } from '../styles/globalStyles';
import { darkMode, lightMode } from '../styles/themes';

function MyApp({ Component, pageProps }: AppProps) {
  const { theme } = useTheme();
  console.log(process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS);
  return (
    <ThemeProvider theme={theme === 'light' ? lightMode : darkMode}>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script id="gtg" strategy="lazyOnload">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
            page_path: window.location.pathname,
            });
        `}
      </Script>
      <Layout>
        <GlobalStyle />
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
