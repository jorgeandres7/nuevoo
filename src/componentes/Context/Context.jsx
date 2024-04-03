import React, { useState } from 'react'
import { createContext } from 'react'


export const taskContext = createContext()
export const tasksProvider = ({children}) => {
    const [tasks, setTasks] = useState('iniciando app')
  return (
<taskContext.Provider value={{tasks,setTasks}}>{children}</taskContext.Provider>
    
  )
}
