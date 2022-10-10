import React, { useEffect } from 'react';

import { useRouter } from 'next/router';
import Script from 'next/script';

import ids from '../data/ids.json';
import * as gtag from '../lib/gtag';

const App = () => {
    const router = useRouter();
    useEffect(() => {
        const handleRouteChange = (url: string) => {
            gtag.pageview(url);
        };

        router.events.on('routeChangeComplete', handleRouteChange);

        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, [router.events]);

    return (
        <>
            <Script strategy='afterInteractive' src={`https://www.googletagmanager.com/gtag/js?id=${ids.GA_TRACKING_ID}`} /> {/* remember to change tag data stream to actual site url */}
            <Script id='gtag-init' strategy='afterInteractive' dangerouslySetInnerHTML={{
                __html: `window.dataLayer = window.dataLayer || []; function gtag(){ dataLayer.push(arguments); } gtag('js', new Date()); gtag('config', '${ids.GA_TRACKING_ID}', { page_path: window.location.pathname });`,
            }} />
        </>
    );
};

export default App;