import React from 'react'
import './Mitad.css'

export const Mitad = (counter,setCounter) => {
  return (
    <>
        < h2 className='amarillo'>Usted tiene 2{counter}  tareas completadas y {counter} tareas pendientes</h2>
        <hr /> 
        <div className='separar'><h2>Filtrar :</h2>
        <select>
            <option value="">Todas las tareas</option>
            <option value="">Pendientes</option>
            <option value="">Resueltas</option>
        </select></div>
    </>
  )
}
