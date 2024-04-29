import React, { useState, useEffect } from 'react';
import './Banner.css';
import banner1 from '../img/banner1.jpg';
import banner2 from '../img/banner2.jpg';
import banner3 from '../img/banner3.jpg';  
import banner4 from '../img/banner4.jpg';

const Banner = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = ['/image', 'image2.jpg', 'image3.jpg'];

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
