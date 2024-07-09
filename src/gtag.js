// src/gtag.js
export const logPageView = () => {
  window.gtag('event', 'page_view', {
    page_path: window.location.pathname,
  });
};

export const logEvent = (action, category, label, value) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
