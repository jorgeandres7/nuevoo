// Mitad.js
import React from 'react';
import './Mitad.css';
import { Task } from '../Task/Task';
import { ItemTask } from '../ItemTask/ItemTask';

export const Mitad = ({ tareasPendientes, agregarTarea, obtenerUno, obtenerDOS, Mostrar }) => {
  return (
    <>
      <main>
        <div className='td'>
          <div className="uno"><h2>Titulo de la tarea:</h2><input type="text" ref={obtenerUno} /></div>
          <div className="dos"><h2>Descripcion de la tarea:</h2> <input type="text" ref={obtenerDOS} /></div>
          <button className='boto' onClick={agregarTarea}>crear</button>
        </div>
      </main>
      <h2 className='amarillo'>Usted tiene {tareasPendientes} tareas pendientes</h2>
      <div>
        <hr /> 
        <div className='separar'>
          <h2>Filtrar :</h2>
          <select>
            <option value="">Todas las tareas</option>
            <option value="">Pendientes</option>
            <option value="">Resueltas</option>
          </select>
        </div>
      </div>
      <Task>
        {Arreglo.map((tarea, index) => (
          <ItemTask key={index}>{tarea}</ItemTask>
        ))}
      </Task>
    </>
  );
};
