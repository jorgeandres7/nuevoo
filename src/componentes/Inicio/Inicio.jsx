import React from 'react'
import './Inicio.css'
import image from'../../assets/React.png'
import { Logo } from '../Logo/Logo'
export const Inicio = () => {
  return (
   <header>
       <h1>Lista de Tareas</h1>
      <div className='logo'><Logo content={image}></Logo></div>
   </header>
  )
}
