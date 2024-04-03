// Main.js
import React, { useRef, useState } from 'react';
import './Main.css';
import { Mitad } from '../Mitad/Mitad';

export const Main = () => {
  const [Arreglo, setArreglo] = useState([]);
  const obtenerUno = useRef(null);
  const obtenerDOS = useRef(null);
  const Mostrar = useRef(null);

  const funcion = () => {
    const Nuevo = obtenerUno.current.value;
    setArreglo([...Arreglo, Nuevo]);
  };

  return (
    <Mitad tareasPendientes={Arreglo.length} agregarTarea={funcion} obtenerUno={obtenerUno} obtenerDOS={obtenerDOS} Mostrar={Mostrar} />
  );
};
