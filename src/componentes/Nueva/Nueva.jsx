import React, { useState, useRef } from 'react';
import './Nueva.css'

const Nueva = () => {
 
  const [tasks, setTasks] = useState([]);
  
  
  const newTaskRef = useRef('');


  const [filter, setFilter] = useState('all');

  const addTask = () => {
    const newTaskText = newTaskRef.current.value.trim();
    if (newTaskText !== '') {
      setTasks([...tasks, { id: Date.now(), text: newTaskText, completed: false }]);
      newTaskRef.current.value = '';
    }
  };

  const toggleTaskCompletion = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const filteredTasks = () => {
    switch (filter) {
      case 'pending':
        return tasks.filter(task => !task.completed);
      case 'archived':
        return tasks.filter(task => task.completed);
      default:
        return tasks;
    }
  };

  return (
    
    <div>
      <div className='botones'>
        <button onClick={() => setFilter('pending')}>Ver tareas pendientes</button>
        <button onClick={() => setFilter('archived')}>Ver tareas archivadas</button>
        <button onClick={() => setFilter('all')}>Ver todas las tareas</button>
      </div>
      <div className="todo">
      <div className='cuadro'>
        <input
          type="text"
          placeholder="Nueva tarea"
          ref={newTaskRef}
          
        />
        <div className='cuadroo'>
          <input className='text' type="text" 
          placeholder="Nueva tarea"
          ref={newTaskRef}/>
        </div>
        </div>
        </div>
        <button onClick={addTask}>Crear tarea</button>
        <hr />
      
      
      <ul>
        {filteredTasks().map(task => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTaskCompletion(task.id)}
            />
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
              {task.text}
            </span>
            <button onClick={() => deleteTask(task.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Nueva;

