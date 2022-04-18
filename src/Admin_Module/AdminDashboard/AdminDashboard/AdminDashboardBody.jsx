import React from "react";
import { Link } from "react-router-dom";
import "./admindashboardbody.css";

function AdminDashboardBody({user}) {


  return (
    <div className="container-fluid p-0">
      <div className="d-flex flex-column align-items-center justify-content-center  text-center dashboard">
        <h3 className="dash_text">Hello, {user.username}</h3>
        <h4>Welcome to Admin Dashboard</h4>
        <Link
          to="/admin/managetournament"
          className="btn btn-success p-3 rounded-3 mt-4"
        >
          Manage Tournament
        </Link>
      </div>
    </div>
  );
}

export default AdminDashboardBody;
