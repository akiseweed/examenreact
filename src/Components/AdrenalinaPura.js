import React, { useState } from 'react';
import './css/AdrenalinaPura.css';

const AdrenalinaPura = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images =[
      { src: "img/foto4.jpg", alt: "" },
      { src: "img/banner2.jpg", alt: "" },
      { src: "img/banner3.jpg", alt: "" },
      { src: "img/banner4.jpg", alt: "" },
    ];

  return (
    <div className="adrenalina-pura">
      <h2>Adrenalina Pura</h2>
      <div className="protection-equipment">
        <div className="img4">
          <img src="" alt="Helmet" />
          <p>Helmet - Protects your head</p>
        </div>
        <div className="equipment-item">
          <img src="/foto5.p" alt="Knee pads" />
          <p>Knee Pads - Protects your knees</p>
        </div>
        <div className="equipment-item">
          <img src="elbow-pads.jpg" alt="Elbow pads" />
          <p>Elbow Pads - Protects your elbows</p>  
        </div>
        <div className="equipment-item">
          <img src="gloves.jpg" alt="Gloves" />
          <p>Gloves - Protects your hands</p>
        </div>
      </div>
    </div>
  );
};

export default AdrenalinaPura;
