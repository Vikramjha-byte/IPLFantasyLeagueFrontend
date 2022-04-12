import React from 'react'
import { Link } from 'react-router-dom'
import "./adminheader.css"
function AdminHeader() {
  return (
    <>
        <>

    <nav class="navbar navbar-light bg-light" aria-label="IPLFANTASY">
      <div class="container-fluid">
        <Link class="navbar-brand" to="#">
        IPLFantasy
        </Link>
        <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample01" aria-controls="navbarsExample01" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
  
        <div class="navbar-collapse collapse" id="navbarsExample01" >
          <ul class="navbar-nav me-auto mb-2">
            <li class=" ms-3 nav-item">
              <Link class="nav-link active" aria-current="page" to="/home">Manage Tournament</Link>
            </li>
            <li class=" ms-3 nav-item">
              <Link class="nav-link active" aria-current="page" to="/about">Manage Team</Link>
            </li>
            <li class=" ms-3 nav-item">
              <Link class="nav-link active" aria-current="page" to="/contact">Match Statistics</Link>
            </li>
            <li class=" ms-3 nav-item">
              <Link class="nav-link active" aria-current="page" to="/write">Schedule Match</Link>
            </li>
            <li class=" ms-3 nav-item">
              <Link class="nav-link active" aria-current="page" to="/">Declare Result</Link>
            </li>
            <li class=" ms-3 nav-item">
              <Link class="nav-link active" aria-current="page" to="/">Update Match</Link>
            </li>
            <li class=" ms-3 nav-item">
              <Link class="nav-link active" aria-current="page" to="/">Bidder Details</Link>
            </li>
           </ul>
        </div>
      </div>
    </nav>
  </>
    </>
    
  )
}

export default AdminHeader