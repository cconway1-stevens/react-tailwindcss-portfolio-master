import React, { useEffect } from 'react';

function GTag() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = process.env.REACT_APP_GTAG_URL;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, []);

  return null;
}

export default GTag;


