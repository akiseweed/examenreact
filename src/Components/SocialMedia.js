import React, { useState } from 'react';
import './css/SocialMedia.css';

const SocialMedia = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const images =[
        { src: "img/facebook.jpg", alt: "" },
        { src: "img/twitter.jpg", alt: "" },
        { src: "img/instagram.jpg", alt: "" },
        
    ];

    return (
      <div className="social-media-container">
          {images.map((image, index) => (
              <img
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  className={index === currentImage ? "active" : ""}
                  onMouseEnter={() => setCurrentImage(index)}
                  onMouseLeave={() => setCurrentImage(0)} // Cambiarlo a 0 si quieres que vuelva a la primera imagen al salir del hover
              />
          ))}
      </div>
  );
};

export default SocialMedia;