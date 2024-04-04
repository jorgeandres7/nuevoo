import React, { useState } from 'react';
import './Mitad.css';
import { Task } from '../Task/Task';
import { ItemTask } from '../ItemTask/ItemTask';

export const Mitad = () => {
  const [tareas, setTareas] = useState([]); // Estado para almacenar las tareas
  const [tituloTarea, setTituloTarea] = useState(''); // Estado para el título de la tarea
  const [descripcionTarea, setDescripcionTarea] = useState(''); // Estado para la descripción de la tarea

  const agregarTarea = () => {
    // Agregar la nueva tarea al estado de tareas
    setTareas([...tareas, { titulo: tituloTarea, descripcion: descripcionTarea, completada: false }]);
    // Limpiar los campos de entrada después de agregar la tarea
    setTituloTarea('');
    setDescripcionTarea('');
  };

  const Completada = (index) => {
    const nuevasTareas = [...tareas];
    nuevasTareas[index].completada = !nuevasTareas[index].completada;
    setTareas(nuevasTareas);
  };

  return (
    <>
      <main>
        <div className='td'>
          <div className="uno"><h2>Título de la tarea:</h2><input type="text" value={tituloTarea} onChange={(e) => setTituloTarea(e.target.value)} /></div>
          <div className="dos"><h2>Descripción de la tarea:</h2> <input type="text" value={descripcionTarea} onChange={(e) => setDescripcionTarea(e.target.value)} /></div>
          <button className='boto' onClick={agregarTarea}>crear</button>
        </div>
      </main>
      <h2 className='amarillo'>Usted tiene {tareas.filter(tarea => !tarea.completada).length} tareas pendientes y {tareas.filter(tarea => tarea.completada).length} tareas completadas</h2>
      <div>
        <hr /> 
        <div className='separar'>
          <h2>Filtrar:</h2>
          <select>
            <option value="">Todas las tareas</option>
            <option value="">Pendientes</option>
            <option value="">Resueltas</option>
          </select>
        </div>
      </div>
      <Task>
        {tareas.map((tarea, index) => (
          <ItemTask key={index} className={tarea.completada ? 'verde' : 'rojo'}>
            <span>{tarea.titulo} - {tarea.descripcion}</span>
            <input className='box' type="checkbox" checked={tarea.completada} onChange={() =>  Completada(index)} />
          </ItemTask>
        ))}
      </Task>
    </>
  );
};
