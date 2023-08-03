'use client';
import Script from 'next/script';

const GoogleAnalytics = () => {
  return (
    <>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-S9N5XJ40DL" />
      <Script id="google-analgytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'GA_MEASUREMENT_ID');
        `}
      </Script>
    </>
  );
};
export default GoogleAnalytics;
