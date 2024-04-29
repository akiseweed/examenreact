import React, { useState, useEffect } from 'react';
import './FechaHora.css';

const FechaHora = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formattedTime = () => {
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: true,
    };
    return date.toLocaleTimeString('en-US', options);
  };

  const formattedDate = () => {
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    return date.toLocaleDateString('en-US', options);
  };

  return (
    <div className="fecha-hora">
      <div>{formattedTime()}</div>
      <div>{formattedDate()}</div>
    </div>
  );
};

export default FechaHora;
