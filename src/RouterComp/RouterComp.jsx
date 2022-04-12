import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Register from "../Register/Register";
import ListUser from "../components/ListUser"
import UpMatches from "../UpMatches/UpMatches";
import AdminLogin from "../AdminLogin/AdminLogin";
import AdminRegister from "../AdminRegister/AdminRegister";
import AdminDashboard from "../AdminDashboard/AdminDashboard";
function RouterComp() {
  return (
    <div>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/registerbidder" element={<Register/>}/>
          <Route path="/bidder" element={<Login/>}/>
          <Route path="/user" element={<ListUser/>}/>
          <Route path="/daily/home" element={<UpMatches/>}/>
          <Route path="/master_admin" element={<AdminLogin/>}/>
          <Route path="/registeradmin" element={<AdminRegister/>}/>
          <Route path="/admin/dashboard" element={<AdminDashboard/>}/>
      </Routes>
    </div>
  );
}

export default RouterComp;
