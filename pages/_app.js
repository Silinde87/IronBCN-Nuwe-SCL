import Head from 'next/head';
import GlobalStyle from '../styles/global.styled';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import { Provider } from 'next-auth/client';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
	return (
		<Provider session={pageProps.session}>
			<Head>
				<title>IronBCN - NUWE - Summer Coding League</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<GlobalStyle />
			<ThemeProvider theme={theme}>
				<Component {...pageProps} />
			</ThemeProvider>
		</Provider>
	);
}
