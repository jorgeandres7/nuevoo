import React from 'react'

export const ItemTask = ({idTask,content,tittleTask}) => {
  return (
    <li id={idTask }>
        <div></div>
        <h2>{tittleTask}</h2>
        <p>{content}</p>
    </li>
  )
}
