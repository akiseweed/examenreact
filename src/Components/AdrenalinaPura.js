import React from 'react';
import './AdrenalinaPura.css';


const AdrenalinaPura = () => {
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
