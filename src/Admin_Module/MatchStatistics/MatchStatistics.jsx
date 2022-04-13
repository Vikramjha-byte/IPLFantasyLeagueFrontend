import React, { useEffect, useState } from "react";
import AdminService from "../../Services/AdminService";
import AdminHeader from "../AdminDashboard/AdminHeader/AdminHeader";
import "./matchstatistics.css";
function MatchStatistics() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    AdminService.getMatches().then((response) => {
      setMatches(response.data);
    });
  }, []);
  return (
    <div>
      <AdminHeader />
      <div className="container-fluid p-0 manage_team">
        <div className="manage_container">
          {matches && matches.length > 0
            ? matches.map((match) => (
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <div className="col-lg-8 col-md-6 col-12 d-flex flex-column justify-content-around bg-light rounded-3 match_card">
                    <div className="ms-3 mt-2">Match {match.match_id}</div>
                    <div className="d-flex flex-row justify-content-around align-items-center">
                      <div className="d-flex flex-column align-items-center">
                        <img className="img-fluid stats_img" src={match.teamdetails.photos} alt="Logo" />
                        <h6 className="mt-2">{match.teamdetails.team_name}</h6>
                      </div>
                      <div className="d-flex flex-column  align-items-center ">
                        <p className="m-0 text-muted fs-2">Vs</p>
                        <p className="m-0 date">{match.match_date} | {match.match_time}</p>
                        <p className="text-danger fw-bold text-capitalize">
                          {match.winner}
                        </p>
                      </div>
                      <div className="d-flex flex-column align-items-center">
                        <img className="img-fluid stats_img" src={match.teamdetails2.photos} alt="Logo" />
                        <h6 className="mt-2">{match.teamdetails2.team_name}</h6>
                      </div>
                    </div>
                    <div className="text-center">
                      <button className="btn btn-success mb-4">
                        Update Result
                      </button>
                    </div>
                  </div>
                </div>
              ))
            : null}
        </div>
      </div>
    </div>
  );
}

export default MatchStatistics;
