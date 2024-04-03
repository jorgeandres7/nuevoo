import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Home } from './componentes/Pages/Home/Home'
import { Mitad } from './componentes/Mitad/Mitad'
import { Main } from './componentes/Layouts/Main/Main'









export const App = () => {
  return (
    <>
   
    <Mitad></Mitad>
    <Main></Main>
    </>
  )
}


export default App
