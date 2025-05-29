declare global {
    interface Window {
        gtag: (command: string, id: string, config: object) => void;
    }
}

export const GA_TRACKING_ID = "G-X1RG74KVW8"; // Replace with your ID

// Log pageview
export const pageview = (url: string) => {
    window.gtag("config", GA_TRACKING_ID, {
        page_path: url,
    });
};
