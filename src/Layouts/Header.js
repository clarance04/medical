import React from 'react'
import { Link } from 'react-router-dom'
// import { Link } from 'react-router-dom'
import '../Layouts/header.css'

export default function Header() {
  return (
          <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">MedSpot</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/Registeration">Registeration</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/appointment">Appointment</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/contact">Contact</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/getapi">GetApi</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/apidatatable">ApiDataTable</Link>
        </li>
       
        
      </ul>
    </div>
  </div>
</nav>
          </div>
  )
}
