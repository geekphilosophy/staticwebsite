import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import App from './App.jsx'
import Dev from './Dev.jsx'
import Recipes from './Recipes.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/dev" element={<Dev />} />
        <Route path="/recipes" element={<Recipes />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)