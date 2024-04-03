import React, { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';


export const taskContext = createContext( )
const tsk  =[
    {id: uuidv4(), title:'tarea ejemplo 1', description: 'Descripcion pendiente',status:false},
    {id: uuidv4(), title:'tarea ejemplo 2', description: 'Descripcion pendiente',status:true},
    {id: uuidv4(), title:'tarea ejemplo 3', description: 'Descripcion pendiente',status:false}
]


export const TaskProvider = ({ children }) =>{
    const [tasks, setTasks] = useState(tsk)
    const [filteredTasks, setFilteredTasks] = useState(tsk)
return(
    <taskContext.Provider value={{tasks,setTasks,filteredTasks,setFilteredTasks}}></taskContext.Provider>
)
}