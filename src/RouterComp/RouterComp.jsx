import { Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import Login from "../User_Module/Login/Login";
import Register from "../User_Module/Register/Register";
import ListUser from "../components/ListUser";
import UpMatches from "../User_Module/UpMatches/UpMatches";
import AdminLogin from "../Admin_Module/AdminLogin/AdminLogin";
import AdminRegister from "../Admin_Module/AdminRegister/AdminRegister";
import AdminDashboard from "../Admin_Module/AdminDashboard/AdminDashboard";
import ManageTournament from "../Admin_Module/ManageTournament/ManageTournament";
import ManageTeam from "../Admin_Module/ManageTeam/ManageTeam";
import UpdateTeam from "../Admin_Module/AdminDashboard/UpdateTeam/UpdateTeam";
import MatchStatistics from "../Admin_Module/MatchStatistics/MatchStatistics";
import UpdateResult from "../Admin_Module/UpdateResult/UpdateResult";
import AddTeam from "../Admin_Module/AddTeam/AddTeam";
import TeamStatistics from "../User_Module/TeamStatistics/TeamStatistics";
import Leaderboard from "../User_Module/LeaderBoard/Leaderboard";
import AddTournament from "../Admin_Module/AdminDashboard/AddTournament/AddTournament";
import Reschedulematch from "../Admin_Module/RescheduleMatch/Reschedulematch";
import Bid from "../User_Module/Bid/Bid";
import CreateMatch from "../Admin_Module/CreateMatch/CreateMatch";
import BidderDetails from "../Admin_Module/AdminDashboard/BidderDetails/BidderDetails";
import BidDetails from "../Admin_Module/BidDetails/BidDetails";

function RouterComp() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registerbidder" element={<Register />} />
        <Route path="/bidder" element={<Login />} />
        <Route path="/user" element={<ListUser />} />
        <Route path="/daily/home" element={<UpMatches />} />
        <Route path="/master_admin" element={<AdminLogin />} />
        <Route path="/registeradmin" element={<AdminRegister />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/managetournament" element={<ManageTournament />} />
        <Route path="/admin/manageteams" element={<ManageTeam />} />
        <Route path="/admin/updateteam/:team_id" element={<UpdateTeam />} />
        <Route path="/admin/matchstats" element={<MatchStatistics />} />
        <Route path="/admin/result/:match_id" element={<UpdateResult />} />
        <Route path="/admin/newteam" element={<AddTeam />} />
        <Route path="/daily/teamstats" element={<TeamStatistics />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/admin/newtournament" element={<AddTournament />} />
        <Route
          path="/admin/reschedule/:match_id"
          element={<Reschedulematch />}
        />
        <Route path="/bid/:match_id" element={<Bid />} />
        <Route path="/admin/creatematch" element={<CreateMatch />} />
        <Route path="/admin/bidderdetails" element={<BidderDetails />} />
        <Route path="/admin/biddetails/:match_id" element={<BidDetails />} />
        
      </Routes>
    </div>
  );
}

export default RouterComp;
