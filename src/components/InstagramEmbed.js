import React, { useEffect } from "react";

const InstagramEmbed = ({ embedCode }) => {
  useEffect(() => {
    const loadInstagramScript = () => {
      if (!document.getElementById('instagram-embed-script')) {
        const script = document.createElement("script");
        script.src = "https://www.instagram.com/embed.js";
        script.id = "instagram-embed-script";
        script.async = true;
        document.body.appendChild(script);
        script.onload = () => {
          if (window.instgrm) window.instgrm.Embeds.process();
        };
      } else {
        if (window.instgrm) window.instgrm.Embeds.process();
      }
    };
  
    loadInstagramScript();
  }, []);

  return (
    <div
      dangerouslySetInnerHTML={{ __html: embedCode }}
    />
  );
};

export default InstagramEmbed;
