import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { tasksProvider } from './componentes/Context/Context.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(<tasksProvider><App /></tasksProvider>,
)
