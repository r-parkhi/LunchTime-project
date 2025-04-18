import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Route, Routes } from "react-router"
import './index.css'
import AppLayout from "./layouts/AppLayout.jsx"
import About from "./pages/about/About.jsx"
import Calendar from "./pages/Calendar.jsx"
import Home from './pages/home/Home.jsx'
import Help from './pages/help/Help.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route element={<AppLayout />} >
          <Route index element={<Home />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<Help />} />
        </Route>
      </Routes>
    </HashRouter>
  </StrictMode>,
)
