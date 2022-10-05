import Document, { Html, Head, Main, NextScript } from 'next/document';

import { config } from '../utils/config';

export default class MainDocument extends Document {
    render() {
        return (
            <Html lang={config.locale}>
                <Head />

                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}