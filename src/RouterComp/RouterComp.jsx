import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import Login from "../User_Module/Login/Login";
import Register from "../User_Module/Register/Register";
import ListUser from "../components/ListUser"
import UpMatches from "../User_Module/UpMatches/UpMatches";
import AdminLogin from "../Admin_Module/AdminLogin/AdminLogin";
import AdminRegister from "../Admin_Module/AdminRegister/AdminRegister";
import AdminDashboard from "../Admin_Module/AdminDashboard/AdminDashboard";
import ManageTournament from "../Admin_Module/ManageTournament/ManageTournament";
import ManageTeam from "../Admin_Module/ManageTeam/ManageTeam";
import UpdateTeam from "../Admin_Module/AdminDashboard/UpdateTeam/UpdateTeam";
import MatchStatistics from "../Admin_Module/MatchStatistics/MatchStatistics";
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
          <Route path="/admin/managetournament" element={<ManageTournament/>}/>
          <Route path="/admin/manageteams" element={<ManageTeam/>}/>
          <Route path="/admin/updateteam/:team_id" element={<UpdateTeam />} />
          <Route path="/admin/matchstats" element={<MatchStatistics/>}/>
      </Routes>
    </div>
  );
}

export default RouterComp;
