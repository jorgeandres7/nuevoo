import React, { useState } from 'react';
import './Main.css';
import { Mitad } from '../Mitad/Mitad';

export const Main = () => {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(counter + 1); // Incrementa el contador en 1
  };

  return (
    <main>
      <div className='td'>
        <div className="uno"><h2>Titulo de la tarea:</h2><input type="text" /></div>
        <div className="dos"><h2>Descripcion de la tarea:</h2> <input type="text" /></div>
        <button onClick={incrementCounter} className='boto'>crear</button>
      </div>
      <Mitad counter={counter} setCounter={setCounter} />
    </main>
  );
};
