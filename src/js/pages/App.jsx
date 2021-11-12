import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Header from "../components/Header"
import Home from '../pages/Home'
import Profil from '../pages/Profil'
import Signup from '../pages/auth/Signup'
import Login from '../pages/auth/Login'
import ResetPassword from '../pages/auth/ResetPassword'
import ForgetPassword from '../pages/auth/ForgetPassword'
import Planets from "../pages/planets"
import People from '../pages/people'
import Starships from '../pages/starships'
import PlanetsDetails from "../pages/planets/Details"
import PeopleDetails from '../pages/people/Details'
import StarshipsDetails from '../pages/starships/Details'
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
        <Route path="/characters" element={<People />} />
        <Route path="/characters/:id" element={<PeopleDetails />} />
        <Route path="/planets" element={<Planets />} />
        <Route path="/planets/:id" element={<PlanetsDetails />} />
        <Route path="/starships" element={<Starships />} />
        <Route path="/starships/:id" element={<StarshipsDetails />} />
      </Routes>
    </Router>
  )
}

export default App
