'use client';

import { useEffect } from 'react';

const SiteSeal = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.rapidscansecure.com/siteseal/siteseal.js?code=17,7C70D3B9BC708BE61ACF757B8647FA2D9352435E';
    script.type = 'text/javascript';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleClick = () => {
    window.open(
      'https://rapidscansecure.com/siteseal/Verify.aspx?code=17,7C70D3B9BC708BE61ACF757B8647FA2D9352435E',
      'SiteSealPopup',
      'width=800,height=700,scrollbars=yes,resizable=yes'
    );
  };

  return (
    <div className="text-center mt-4">
      {/* Script will load the actual seal image here */}
      <div id="ss_img_wrapper_115-115_image_en" />

      {/* Fallback verify button */}
      <button
        onClick={handleClick}
        style={{
        
          cursor: 'pointer'
        }}
      >
        <img src="/assets/img/logo/Seal.jpg" alt="seal-img" />
      </button>
    </div>
  );
};

export default SiteSeal;
