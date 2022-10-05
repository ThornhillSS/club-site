import { AppProps } from 'next/app';

import '../styles/main.css';

const MainApp = ({ Component, pageProps }: AppProps) => (
    <Component {...pageProps} />
);

export default MainApp;