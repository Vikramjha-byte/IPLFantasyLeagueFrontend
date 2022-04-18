import React from 'react'
import { Link } from 'react-router-dom'
import "./adminheader.css"
function AdminHeader() {
  return (
    <>
        <>

  

    <nav className="navbar navbar-light position-fixed  w-100 admin_nav" aria-label="IPLFANTASY">
      <div className="container-fluid">
        <Link className="navbar-brand btn btn-dark text-white" to="/admin/dashboard">
        IPLFantasy
        </Link>
        <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample01" aria-controls="navbarsExample01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
  
        <div className="navbar-collapse collapse" id="navbarsExample01" >
          <ul className="navbar-nav me-auto mb-2">
            <li className=" ms-3 nav-item">
              <Link className="nav-link  fw-bold" aria-current="page" to="/admin/managetournament">Manage Tournament</Link>
            </li>
            <li className=" ms-3 nav-item">
              <Link className="nav-link  fw-bold" aria-current="page" to="/admin/manageteams">Manage Team</Link>
            </li>
            <li className=" ms-3 nav-item">
              <Link className="nav-link fw-bold" aria-current="page" to="/admin/matchstats">Match Statistics</Link>
            </li>
            <li className=" ms-3 nav-item">
              <Link className="nav-link fw-bold" aria-current="page" to="/admin/creatematch">Create Match</Link>
            </li>
            <li className=" ms-3 nav-item">
              <Link className="nav-link fw-bold" aria-current="page" to="/admin/bidderdetails">Bidder Details</Link>
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