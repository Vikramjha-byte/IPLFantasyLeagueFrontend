import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AdminService from "../../Services/AdminService";
import AdminHeader from "../AdminDashboard/AdminHeader/AdminHeader";

function ManageTournament() {
  const [tournament, setTournament] = useState([]);
  const [matches, setMatches] = useState([]);
  const [tournamentName, setTournamentName] = useState("");
  const[admin,setAdmin]=useState("");
  const navigate=useNavigate();

  const handledate = (matchdate) => {
    let date = new Date(matchdate);
    return date.toDateString();
  };

  const handleTime= (matchtime)=>{
    console.log(typeof matchtime)
   let time= matchtime.split(":")
   let word="";
   let hour;
   if(time[0]> 12){
     word="PM"
     hour= time[0]-12;
   }else{
     word="AM"
     hour= time[0];
   }
   let clock=hour+":"+time[1]+" " + word
   return clock;
  }

  const handlechange = (e) => {
    AdminService.getMatchesbytournamentname(tournamentName).then((response) => {
      setMatches(response.data);
    });
  };

  useEffect(() => {
    AdminService.getTournament().then((response) => {
      setTournament(response.data);
    });
    const loggedInUser = localStorage.getItem("admin");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setAdmin(foundUser);
    }
  }, []);
  if (admin==="") {
    return navigate("/master_admin");
  }


  const handleDelete = () => {
    window.confirm("Do you really want to delete "+ tournamentName);
    AdminService.deleteTournament(tournamentName).then((response) => {
      alert(response.data);
      AdminService.getTournament().then((response) => {
        setTournament(response.data);
      });
    });
  };

  return (
    <div>
      <AdminHeader />
      <div className="container-fluid p-0 manage_team">
        <div className="manage_container">
          <div className="d-flex flex-row align-items-center justify-content-between">
            <span className="text-center mt-4 mb-4 bg-success text-white p-2 fs-4 ">
              Scheduled Match
            </span>
            <Link
              to="/admin/newtournament"
              className="btn btn-dark p-3  text-white"
            >
              <i class="fa-solid fa-plus"></i> New Tournament
            </Link>
          </div>
          {tournament && tournament.length > 0 ? (
            <div className="d-flex flex-column justify-content-center align-items-center ">
              <div className="d-flex flex-row flex-wrap w-50 m-4 p-2 align-items-center justify-content-center">
                <select
                  className="m-3 p-2 text-center bg-outline-success text-success"
                  name="tournament"
                  id="tournament"
                  onChange={(e) => setTournamentName(e.target.value)}
                  value={tournamentName}
                >
                  <option>Select Tournament</option>
                  {tournament.map((tournament) => (
                    <option value={tournament.tournament_name}>
                      {tournament.tournament_name}
                    </option>
                  ))}
                </select>

                <button onClick={handlechange} className="btn btn-success p-2">
                  Search
                </button>
                <button onClick={handleDelete} className="btn btn-success p-2 m-3">
                  Delete Tournament
                </button>
              </div>
              {matches && matches.length > 0 ? (
                matches.slice(0).reverse().map((match) => (
                  <div className="col-lg-8 col-md-6 col-12 d-flex flex-column justify-content-around bg-light rounded-3 match_card mb-4">
                    <div className="ms-3 mt-2 text-muted fs-6">Match {match.match_id}</div>
                    <div className="d-flex flex-row justify-content-around align-items-center">
                      <div className="d-flex flex-column align-items-center">
                        <img
                          className="img-fluid stats_img"
                          src={match.teamdetails.photos}
                          alt="Logo"
                        />
                        <h6 className="mt-2">{match.teamdetails.team_name}</h6>
                      </div>
                      <div className="d-flex flex-column  align-items-center ">
                        <p className="m-0 text-muted fs-2">Vs</p>
                        <p className="m-0 date">
                          {handledate(match.match_date)} | {handleTime(match.match_time)}
                        </p>
                        <p className="text-danger fw-bold text-capitalize">
                          {match.status}
                        </p>
                      </div>
                      <div className="d-flex flex-column align-items-center">
                        <img
                          className="img-fluid stats_img"
                          src={match.teamdetails2.photos}
                          alt="Logo"
                        />
                        <h6 className="mt-2">{match.teamdetails2.team_name}</h6>
                      </div>
                    </div>
                    <div className="text-center">
                      <Link to={`/admin/reschedule/${match.match_id}`} className="btn btn-success mb-4">
                        Re-Schedule Match
                      </Link>
                    </div>
                    
                  </div>
                ))
              ) : (
                <div className="d-flex flex-column align-items-center justify-content-center">
                  <img className="w-25" src="../img/upmatch_image.png" alt="" />
                  <h3 className="p-3 m-3 nomatch_header fw-bold fs-4">
                    Matches Not found, Please select other tournament!
                  </h3>
                </div>
              )}
            </div>
          ) : (
            <div className="d-flex flex-column align-items-center justify-content-center">
              <img className="w-25" src="../img/upmatch_image.png" alt="" />
              <h3 className="p-3 m-3 nomatch_header fw-bold ">
                No Tournament available!
              </h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ManageTournament;
