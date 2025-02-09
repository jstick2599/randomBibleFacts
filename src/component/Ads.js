import React from "react";
import "../styling/Ads.css";
import { Helmet } from "react-helmet"; // Importing Helmet for SEO and meta tags

import React, { useEffect } from "react";
import { Helmet } from "react-helmet"; // Importing Helmet for managing head tags

function Ads({ client, slot, format = "auto", style = { display: "block" } }) {
  useEffect(() => {
    // Ensure the AdSense script is loaded
    const script = document.createElement("script");
    script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
    script.async = true;
    script.onload = () => {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    };
    document.head.appendChild(script);
  }, []);

  return (
    <>
      {/* Add the meta tag to the head */}
      <Helmet>
        <meta name="google-adsense-account" content="ca-pub-6840780798204022" />
      </Helmet>

      {/* AdSense ad unit */}
      <ins
        className="adsbygoogle"
        style={style}
        data-ad-client={client}
        data-ad-slot={slot}
        data-ad-format={format}
      ></ins>
    </>
  );
}

export default Ads;
