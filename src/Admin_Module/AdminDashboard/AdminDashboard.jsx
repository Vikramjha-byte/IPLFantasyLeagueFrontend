import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminDashboardBody from "./AdminDashboard/AdminDashboardBody";
import AdminHeader from "./AdminHeader/AdminHeader";

function AdminDashboard() {
  const [admin, setAdmin] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const loggedInUser = localStorage.getItem("admin");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setAdmin(foundUser);
    }
  }, []);
  if (admin==="") {
    return navigate("/master_admin");
  }
  return (
    <div>
      <AdminHeader />
      <AdminDashboardBody user={admin}/>
    </div>
  );
}

export default AdminDashboard;
