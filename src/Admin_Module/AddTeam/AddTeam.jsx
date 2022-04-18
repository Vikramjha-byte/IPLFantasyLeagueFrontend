import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminService from "../../Services/AdminService";
import AdminHeader from "../AdminDashboard/AdminHeader/AdminHeader";
import "./addteam.css";
function AddTeam() {
  const [teamName, setTeamName] = useState("");
  const [teamIntial, setTeamIntial] = useState("");
  const [homeground, setHomeground] = useState("");
  const [teamIcon, setTeamIcon] = useState("");
  const [players, setPlayers] = useState("");
  const [captain, setCaptain] = useState("");
  const [teamNameErr, setTeamNameErr] = useState("");
  const [teamIntialErr, setTeamIntialErr] = useState("");
  const [homegroundErr, setHomegroundErr] = useState("");
  const [teamIconErr, setTeamIconErr] = useState("");
  const [playersErr, setPlayersErr] = useState("");
  const [captainErr, setCaptainErr] = useState("");
  const[admin,setAdmin]=useState("");
  let isValid = false;
  const navigate = useNavigate();
  useEffect(()=>{
    const loggedInUser = localStorage.getItem("admin");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setAdmin(foundUser);
    }
  },[])
  if (admin==="") {
    return navigate("/master_admin");
  }

  const validateTheForm = () => {
    let teamNameErr,
      teamIntialErr,
      homegroundErr,
      teamIconErr,
      playersErr,
      captainErr = "";

    if (teamName.length < 6) {
      teamNameErr = "Team Name should be greater than 6 characters ";
    }
    if (teamIntial.length < 2) {
      teamIntialErr =
        "Team Intial should be more than or equal to 2 characters";
    }
    if (homeground.length < 1) {
      homegroundErr = "Team homeground can't be empty";
    }
    if (teamIcon.length < 1) {
      teamIconErr = "Please enter the URL of the image";
    }
    let player = players.split(",");
    console.log(player.length);
    if (player.length !== 15) {
      console.log("in");
      if (player.length > 15) {
        console.log("inside if");
        playersErr = `Each team should include 15 players, you have exceeded with ${
          player.length - 15
        } players `;
        console.log(playersErr);
      } else if (player.length < 15) {
        playersErr = `Each team should include 15 players, please add ${
          15 - player.length
        } more players `;
      }
      console.log(playersErr);
    }
    if (captain.length < 6) {
      captainErr = "Please enter the valid name of captain";
    }

    ////////////////////////////-------------------------Checking if error exist-----------------------///////////////////////
    if (
      teamNameErr ||
      teamIntialErr ||
      playersErr ||
      captainErr ||
      homegroundErr ||
      teamIconErr
    ) {
      setTeamNameErr(teamNameErr);
      setTeamIntialErr(teamIntialErr);
      setPlayersErr(playersErr);
      setCaptainErr(captainErr);
      setHomegroundErr(homegroundErr);
      setTeamIconErr(teamIconErr);
      isValid = false;
    } else {
      setTeamNameErr(teamNameErr);
      setTeamIntialErr(teamIntialErr);
      setPlayersErr(playersErr);
      setCaptainErr(captainErr);
      setHomegroundErr(homegroundErr);
      setTeamIconErr(teamIconErr);
      isValid = true;
    }
  };

  const updateTheData = () => {
    const team = {
      captain: captain,
      full_name: teamName,
      team_players: players,
      photos: teamIcon,
      home_ground: homeground,
      team_name: teamIntial,
    };
    if (isValid === true) {
      AdminService.addTeam(team).then((response) => {
        alert(response.data);
        navigate("/admin/manageteams");
      });
    }
  };

  const clearTheForm=()=>{

  }

  const handleTeam = (e) => {
    e.preventDefault();
    validateTheForm();
    updateTheData();
    clearTheForm();
  };

  return (
    <div>
      <AdminHeader />
      <div className="container-fluid p-0 manage_team">
        <div className="manage_container">
          <div className="d-flex flex-column justify-content-center align-items-center mt-4">
            <div className="card col-lg-5 col-md-6 col-12 rounded-3">
              <h2 className="text-center mt-4 fs-4 fw-bold text-success mb-3">
                Add New Team
              </h2>
              <hr className="text-success h-" />
              <div className="p-5">
                <form>
                  <div class="mb-3 inputbox">
                    <label htmlFor="teamname" className="form-label">
                      Team Name :
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="teamname"
                      name="teamname"
                      onChange={(e)=>setTeamName(e.target.value)}
                    />
                    <p className="error">{teamNameErr}</p>
                  </div>
                  <div class="mb-3 inputbox">
                    <label htmlFor="teamname" className="form-label">
                      Team Intial :
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="teamintial"
                      name="teamintial"
                      onChange={(e)=>setTeamIntial(e.target.value)}
                      
                    />
                    <p className="error">{teamIntialErr}</p>
                  </div>
                  <div class="mb-3 inputbox">
                    <label htmlFor="homeground" className="form-label">
                      Home Ground :
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="homeground"
                      name="homeground"
                      onChange={(e)=>setHomeground(e.target.value)}
                    />
                    <p className="error">{homegroundErr}</p>
                  </div>
                  <div class="mb-3 inputbox">
                    <label htmlFor="photo" className="form-label">
                      Team Photo :
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="photo"
                      name="photo"
                      onChange={(e)=>setTeamIcon(e.target.value)}
                    />
                    <p className="error">{teamIconErr}</p>
                  </div>
                  <div class="mb-3 inputbox">
                    <label htmlFor="player" className="form-label">
                      Team Players :
                    </label>
                    <textarea
                      type="text"
                      className="form-control"
                      id="player"
                      name="player"
                      onChange={(e)=>setPlayers(e.target.value)}
                    />
                    <p className="error">{playersErr}</p>
                  </div>
                  <div class="mb-3 inputbox">
                    <label htmlFor="captain" className="form-label">
                      Team Captain :
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="captain"
                      name="captain"
                      onChange={(e)=>setCaptain(e.target.value)}
                    />
                    <p className="error">{captainErr}</p>
                  </div>
                  <div className=" d-flex flex-row flex-wrap align-items-center justify-content-center">
                    <button
                      onClick={handleTeam}
                      className="btn btn-success text-center p-3 mt-2"
                    >
                      Add Team Now
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddTeam;
