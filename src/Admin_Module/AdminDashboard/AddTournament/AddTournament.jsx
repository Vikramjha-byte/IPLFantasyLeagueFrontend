import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminService from "../../../Services/AdminService";
import AdminHeader from "../AdminHeader/AdminHeader";

function AddTournament() {
  const [tournamentName, setTournamentName] = useState("");
  const [teamCount, setTeamCount] = useState("");
  const [numOfQual, setNumOfQual] = useState("");
  const [numOfMatchComplete, setNumOfMatchComplete] = useState("");
  const[admin,setAdmin]=useState("");
  const [tournamentNameErr, setTournamentNameErr] = useState("");
  const [teamCountErr, setTeamCountErr] = useState("");
  const [numOfQualErr, setNumOfQualErr] = useState("");
  const navigate= useNavigate();
  let isValid = false;


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
    let tournamentNameErr,
      teamCountErr,
      numOfQualErr = "";
    isValid = false;

    if (tournamentName.length < 4) {
      tournamentNameErr = "Please Enter the valid Tournament Name";
    }
    if (teamCount !== "8") {
      teamCountErr = "num of teams should be equal to 8";
    }
    if (numOfQual !== "28") {
      numOfQualErr = "Each team should play only once with remaining teams.";
    }
    if (tournamentNameErr || teamCountErr || numOfQualErr) {
      setTournamentNameErr(tournamentNameErr);
      setNumOfQualErr(numOfQualErr);
      setTeamCountErr(teamCountErr);
      isValid = false;
    } else {
      setTournamentNameErr(tournamentNameErr);
      setNumOfQualErr(numOfQualErr);
      setTeamCountErr(teamCountErr);
      isValid = true;
    }
  };

  const submitTheData = () => {
    if (isValid === true) {
      setNumOfMatchComplete(0);
      const tournament = {
        number_of_match_completed: numOfMatchComplete,
        number_of_qualifiers: numOfQual,
        number_of_teams: teamCount,
        tournament_name: tournamentName,
        number_of_matches_completed:0,
      };
      AdminService.createTournament(tournament).then((res) => {
        alert(res.data);
        clearTheForm();
        navigate("/admin/managetournament")
      });
      
    }
  };

  const clearTheForm = () => {
    setTournamentName("");
    setNumOfMatchComplete("");
    setNumOfQual("");
    setTeamCount("");
  };

  const handleTournament = (e) => {
    e.preventDefault();
    validateTheForm();
    submitTheData();
   
  };

  return (
    <div>
      <AdminHeader />
      <div className="container-fluid p-0 manage_team">
        <div className="manage_container">
          <div className="d-flex flex-column justify-content-center align-items-center mt-4">
            <div className="card col-lg-5 col-md-6 col-12 rounded-3">
              <h2 className="text-center mt-4 fs-4 fw-bold text-success mb-3">
                Create New Tournament
              </h2>
              <hr className="text-success h-" />
              <div className="p-5">
                <form>
                  <div class="mb-3 inputbox">
                    <label htmlFor="teamname" className="form-label">
                      Tournament Name :
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="teamname"
                      name="teamname"
                      value={tournamentName}
                      onChange={(e) => setTournamentName(e.target.value)}
                    />
                    <p className="error">{tournamentNameErr}</p>
                  </div>
                  <div class="mb-3 inputbox">
                    <label htmlFor="teamcount" className="form-label">
                      Number of Team :
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="teamcount"
                      name="teamcount"
                      value={teamCount}
                      onChange={(e) => setTeamCount(e.target.value)}
                    />
                    <p className="error">{teamCountErr}</p>
                  </div>
                  <div class="mb-3 inputbox">
                    <label htmlFor="numOfQual" className="form-label">
                      Number of qualifiers :
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="numOfQual"
                      name="numOfQual"
                      value={numOfQual}
                      onChange={(e) => setNumOfQual(e.target.value)}
                    />
                    <p className="error">{numOfQualErr}</p>
                  </div>

                  <div className=" d-flex flex-row flex-wrap align-items-center justify-content-center">
                    <button
                      onClick={handleTournament}
                      className="btn btn-success text-center p-3 mt-2"
                    >
                      Add Tournament
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

export default AddTournament;
