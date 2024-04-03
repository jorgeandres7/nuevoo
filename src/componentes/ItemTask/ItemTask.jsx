import React, { useState } from 'react';
import "./ItemTask.css";

export const ItemTask = ({ children }) => {
  const [isChecked, setIsChecked] = useState(false); // Estado para el estado del checkbox

  const cambiarColor = () => {
    setIsChecked(!isChecked); // Cambia el estado del checkbox al contrario del estado actual
  };

  return (
    <li>
      <div className={isChecked ? 'circulo verde' : 'circulo'}></div>
      {children}
      <input className='box' type="checkbox" checked={isChecked} onChange={cambiarColor} />
    </li>
  );
};
