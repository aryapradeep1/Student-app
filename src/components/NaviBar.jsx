import React from 'react'

const NaviBar = () => {
  return (
    <div>


<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Student App</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Add Student</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/search">Search</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/delete">Delete</a>
        </li>
         <li class="nav-item">
          <a class="nav-link" href="/view">View</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            More
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">About</a></li>
            <li><a class="dropdown-item" href="#">Help</a></li>
            <li><a class="dropdown-item" href="#">Contact us</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default NaviBar