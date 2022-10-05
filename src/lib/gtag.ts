/* eslint-disable @typescript-eslint/no-explicit-any */
import ids from '../data/ids.json';

declare global {
    interface Window {
        gtag: any;
    }
}

export const pageview = (url: string) => {
    window.gtag('config', ids.GA_TRACKING_ID, {
        page_path: url,
    });
};

export const event = ({ action, category, label, value }: { action: any; category: any; label: any; value: any; }) => {
    window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value,
    });
};