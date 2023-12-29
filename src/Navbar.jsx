import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-xxl">
      <a class="navbar-brand" href="#">barkhayadav</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-nav" aria-controls="#main-nav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button> 
      <div class="collapse navbar-collapse justify-content-end align-center" id="main-nav">
        <ul class="navbar-nav">
        <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/"><i class="bi bi-house-door"></i> Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/about"><i class="bi bi-person"></i> About</a>
          </li>
          {/* <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#"><i class="bi bi-rocket-takeoff"></i> Skills</a>
          </li> */}
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/projects"> <i class="bi bi-rocket-takeoff"></i> Projects</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="/contact"><i class="bi bi-person-lines-fill"></i> Contact</a>
          </li>
        </ul>
        </div>
      </div>
  </nav>
  )
}

export default Navbar