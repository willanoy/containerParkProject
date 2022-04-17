declare global {
    interface Window {
      dataLayer: Record<string, any>;
    }
  }

export let dataLayer = window.dataLayer;