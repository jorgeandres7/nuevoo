import React from 'react'

<<<<<<< HEAD
export const ItemTask = ({children}) => {
  return (
    <li>
        {children}
=======
export const ItemTask = ({idTask,content,tittleTask}) => {
  return (
    <li id={idTask }>
        <div></div>
        <h2>{tittleTask}</h2>
        <p>{content}</p>
>>>>>>> 8c2cd2338d9c3605205cceadde65480d2da19871
    </li>
  )
}
