import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Button from "@mui/material/Button"

import Home from "./pages/Home"
import AddSacramentPlanForm from "./pages/AddSacramentPlanForm"
import AddMemberForm from "./pages/AddMemberForm"
import Navbar from "./components/Navbar"
import "./App.css"

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/add-plan' element={<AddSacramentPlanForm />} />
          <Route path='/add-member' element={<AddMemberForm />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
