import React from 'react'
import './Main.css'
export const Main = () => {
  return (
    <main>
        <div className='td'>
      <div className="uno"><h2>Titulo de la tarea:</h2><input type="text" /></div>
      <div className="dos"><h2>Descripcion de la tarea:</h2> <input type="text" /></div>
      <button className='boto'>crear</button></div>
    </main>
  )
}
