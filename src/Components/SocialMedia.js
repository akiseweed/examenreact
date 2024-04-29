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
        <div>
            {/* Aquí va el código JSX para mostrar las redes sociales */}
        </div>
    );
};

export default SocialMedia;
