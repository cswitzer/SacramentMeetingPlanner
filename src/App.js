import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Button from "@mui/material/Button"

import Home from "./pages/Home"
import SacramentPlan from "./pages/SacramentPlan"
import Navbar from "./components/Navbar"
import "./App.css"

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/sacrament-plan' element={<SacramentPlan />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
