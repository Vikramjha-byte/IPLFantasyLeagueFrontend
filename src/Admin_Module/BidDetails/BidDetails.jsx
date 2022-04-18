import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import AdminService from "../../Services/AdminService";
import AdminHeader from "../AdminDashboard/AdminHeader/AdminHeader";

function BidDetails() {
  const [bids, setBids] = useState([]);
  const [match, setMatch] = useState([]);
  const [teamACount, setTeamACount] = useState(0);
  const [teamBCount, setTeamBCount] = useState(0);
  const [teamA, setTeamA] = useState("");
  const { match_id } = useParams();

  useEffect(() => {
    AdminService.getBidByMatchID(match_id).then((res) => {
      setBids(res.data);
    });
    AdminService.getMatchById(match_id).then((res) => {
      setMatch(res.data);
    });
  }, []);
  return (
    <div>
      <AdminHeader />
      <div className="container-fluid p-0 manage_team">
        <div className="manage_container vh-100 d-flex align-items-center justify-content-around  ">
          <div className="d-flex flex-column justify-content-center align-items-center col-md-8 col-lg-10 col-12">
            {Object.keys(match).length > 0 ? (
              <div className="d-flex flex-column justify-content-center align-items-center w-100">
                <div className="col-lg-8 col-md-6 col-12 d-flex flex-column justify-content-around bg-light rounded-3 match_card mb-4 ">
                  <div className="ms-3 mt-2">Match {match.match_id}</div>
                  <div className="d-flex flex-row justify-content-around align-items-center">
                    <div className="d-flex flex-column align-items-center">
                      <img
                        className="img-fluid stats_img"
                        src={match.teamdetails.photos}
                        alt="Logo"
                      />
                      <h6 className="mt-2">{match.teamdetails.team_name}</h6>
                      <p className="text-success">
                        Number of bids :{" "}
                        <span className="fw-bold text-danger">
                          {bids &&
                            bids.length > 0 ?
                            bids.filter(
                              (bid) =>
                                bid.user_opinion1 ===
                                match.teamdetails.team_name
                            ).length:0}
                        </span>
                      </p>
                      <p className="text-success">Percentage of bids: <span className="text-danger fw-bold">{bids &&
                            bids.length > 0 ?
                           Math.ceil(( (bids.filter(
                              (bid) =>
                                bid.user_opinion1 ===
                                match.teamdetails.team_name
                            ).length)/bids.length)*100):0}%</span></p>
                    </div>
                    <div className="d-flex flex-column  align-items-center ">
                      <p className="m-0 text-muted fs-2">Vs</p>
                    </div>
                    <div className="d-flex flex-column align-items-center">
                      <img
                        className="img-fluid stats_img"
                        src={match.teamdetails2.photos}
                        alt="Logo"
                      />
                      <h6 className="mt-2">{match.teamdetails2.team_name}</h6>
                      <p className="text-success">
                        Number of bids :{" "}
                        <span className="fw-bold text-danger">
                          {bids &&
                            bids.length > 0 ?
                            bids.filter(
                              (bid) =>
                                bid.user_opinion1 ===
                                match.teamdetails2.team_name
                            ).length:0}
                        </span>
                      </p>
                      <p className="text-success">Percentage of bids: <span className="text-danger fw-bold">{bids &&
                            bids.length > 0 ?
                         Math.floor(( (bids.filter(
                              (bid) =>
                                bid.user_opinion1 ===
                                match.teamdetails2.team_name
                            ).length)/bids.length)*100):0}%</span></p>
                    </div>
                  </div>
                  <div className="text-center">
                    <div>
                      <Link
                        to={`/admin/biddetails/${match.match_id}`}
                        className="btn btn-success me-3 mb-4"
                      >
                        Bidder details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BidDetails;
