import React, { useState } from 'react'
import { ItemTask } from '../../ItemTask/ItemTask'
import { Main } from '../../Layouts/Main/Main'
import { v4 as uuidv4 } from 'uuid';
import { Header } from '../../Layouts/Header/Header'
import { ContainerTask } from '../../Layouts/ContainerTasks/ContainerTask'

const tsk  =[
  {id: uuidv4(), title:'tarea ejemplo 1', description: 'Descripcion pendiente',status:false},
  {id: uuidv4(), title:'tarea ejemplo 2', description: 'Descripcion pendiente',status:true},
  {id: uuidv4(), title:'tarea ejemplo 3', description: 'Descripcion pendiente',status:false}
]

export const Home = () => {
  const [tasks, setTasks] = useState(tsk)
  return (
    <><Header>
   <><h1>gestor </h1></>
   </Header>
   <Main>
    <ContainerTask>
      {
        tasks.map(task => <ItemTask idTask={task.id} content={task.description} tittleTask={task.title}/>)
      }
    </ContainerTask>
   </Main>
   </>
  )
}
