import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Header from "../components/Header"
import Home from '../pages/Home'
import Profil from '../pages/Profil'
import Signup from '../pages/auth/Signup'
import Login from '../pages/auth/Login'
import ResetPassword from '../pages/auth/ResetPassword'
import ForgetPassword from '../pages/auth/ForgetPassword'
import '../../css/App.css'

function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/profil" element={<Profil />} />
      </Routes>
    </Router>
  )
}

export default App
