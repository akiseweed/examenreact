import React, { useState, useEffect } from 'react';
import './Banner.css';

const Banner = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images =[
      { src: "img/banner1.jpg", alt: "bnnr1" },
      { src: "img/banner2.jpg", alt: "bnnr2" },
      { src: "img/banner3.jpg", alt: "bnnr3" },
      { src: "img/banner4.jpg", alt: "bnnr4" },
    ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="banner">
      <img src={images[currentImage]} alt="Banner" />
    </div>
  );        
};

export default Banner;
