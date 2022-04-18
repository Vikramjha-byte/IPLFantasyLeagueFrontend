import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import AdminService from "../../Services/AdminService";
import UserService from "../../Services/UserService";

function Bid() {
  const [match, setMatch] = useState("");
  const [user, setUser] = useState();
  const [bid, setBid] = useState("");
  const [bidErr, setBidErr] = useState("");
  const [bidsByUser, setBidsByUser] = useState("");
  const { match_id } = useParams();
  const navigate = useNavigate();
  let isValid = false;

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
      UserService.getBidByUserid(JSON.parse(loggedInUser).id).then((res) => {
        setBidsByUser(res.data);
      });
    }
    AdminService.getMatchById(match_id).then((response) => {
      setMatch(response.data);
    });
  }, []);

  const updateTheBid = () => {
    const biddetail = {
      user_id: user.id,
      user_opinion1: bid,
      match_id: match_id,
    };
    if (isValid === true) {
      UserService.updateBidByMatchId(match_id, biddetail).then((res) => {
        alert(res.data);
        navigate("/daily/home");
      });
    }
  };

  const handleupdate = (e) => {
    e.preventDefault();
    validateTheData();
    updateTheBid();
  };
  const deleteTheBid = () => {
    UserService.deleteTheBid(match_id,user.id).then((res) => {
      alert(res.data);
      navigate("/daily/home");
    });
  };
  const handlecancel = (e) => {
    e.preventDefault();
    deleteTheBid();
  };

  const validateTheData = () => {
    let bidErr = "";

    if (bid === "") {
      bidErr = "Please predict the winner";
    }
    if (bidErr) {
      setBidErr(bidErr);
      isValid = false;
    } else {
      setBidErr(bidErr);
      isValid = true;
    }
  };

  const submitTheBid = () => {
    const biddetail = {
      user_id: user.id,
      user_opinion1: bid,
      match_id: match_id,
    };
    if (isValid === true) {
      UserService.storeBid(biddetail).then((res) => {
        alert(res.data);
        navigate("/daily/home");
      });
    }
  };

  const handleBid = (e) => {
    e.preventDefault();
    validateTheData();
    submitTheBid();
  };

  if (!user) {
    return navigate("/bidder");
  }
  return (
    <div>
      <div className="container-fluid upmatchParent ">
        <div className="row">
          <div className="col-md-8 col-lg-5 col-12 p-0 d-flex flex-column align-items-center upmatchContainer bg-light position-relative">
            <div className="img-fluid upmatch_icon">
              <img src="../img/upmatch_image.png" alt="" />
            </div>
            <h1>Predict the winner</h1>
            {match && match.status === "Not yet started" ? (
              <div className="col-12 col-md-11 col-lg-11 d-flex flex-column align-items-center bg-white p-4 justify-content-around mt-4 rounded-3">
                <div className="d-flex flex-row justify-content-around w-100  ">
                  <div className="d-flex flex-column justify-content-center team align-items-center">
                    <img
                      className="img-fluid w-75 rounded-circle"
                      src={match.teamdetails.photos}
                      alt="Logo"
                    />
                    <h3 className="fs-6 mt-2">{match.teamdetails.team_name}</h3>
                  </div>
                  <div className="d-flex flex-column align-items-center justify-content-center">
                    <h3 className="fs-6"> Vs</h3>
                  </div>
                  <div className="d-flex flex-column justify-content-center team align-items-center">
                    <img
                      className="img-fluid w-75 rounded-circle"
                      src={match.teamdetails2.photos}
                      alt="Logo"
                    />
                    <h3 className="fs-6 mt-2">
                      {match.teamdetails2.team_name}
                    </h3>
                  </div>
                </div>
                <div
                  className="btn-group w-100 p-2 h-25 align-items-center"
                  role="group"
                  aria-label="Basic radio toggle button group"
                  onChange={(e) => setBid(e.target.value)}
                >
                  <input
                    type="radio"
                    className="btn-check"
                    name="btnradio"
                    id="btnradio1"
                    value={match.teamdetails.team_name}
                    autoComplete="off"
                  />
                  <label class="btn btn-outline-success" htmlFor="btnradio1">
                    {match.teamdetails.team_name}
                  </label>

                  <input
                    type="radio"
                    className="btn-check"
                    name="btnradio"
                    id="btnradio2"
                    value={match.teamdetails2.team_name}
                    autoComplete="off"
                  />
                  <label class="btn btn-outline-success " htmlFor="btnradio2">
                    {match.teamdetails2.team_name}
                  </label>
                </div>
                <p className="error">{bidErr}</p>

                {bidsByUser &&
                  bidsByUser.length > 0 ?
                  bidsByUser.map((singlebid) =>
                    singlebid.match_id === parseInt(match_id) ? (
                      <div className="d-flex flex-row align-items-center justify-content-center mt-4">
                        <h1 className="fs-6 text-center m-4">
                          Your predict for{" "}
                          <span className="text-danger">
                            {singlebid.user_opinion1}
                          </span>
                        </h1>
                        <button
                          onClick={handleupdate}
                          className="btn btn-success me-3"
                        >
                          Update Bid
                        </button>
                        <button
                          onClick={handlecancel}
                          className="btn btn-danger ms-3"
                        >
                          Cancel Bid
                        </button>
                      </div>
                    ) : (
                      <div className="d-flex flex-row align-items-center justify-content-center mt-4">
                        <button onClick={handleBid} className="btn btn-success">
                          Submit Bid
                        </button>
                      </div>
                    )
                  ): (
                    <div className="d-flex flex-row align-items-center justify-content-center mt-4">
                      <button onClick={handleBid} className="btn btn-success">
                        Submit Bid
                      </button>
                    </div>
                  )}
              </div>
            ) : (
              <p className="text-muted mt-4">
                Oops! Time Over, You can bid on other match.
              </p>
            )}
          </div>
          <div className="col-md-8 col-lg-5 col-12   d-flex flex-row align-items-center justify-content-between fixed-bottom  p-2 ps-4 pe-4 bg-light bottom_navbar ">
            <Link to="">
              <div className="d-flex flex-column align-items-center ">
                <div>
                  <i class="fa-solid fa-house"></i>
                </div>
                <div>Home</div>
              </div>
            </Link>
            <Link to="">
              <div className="d-flex flex-column align-items-center">
                <div>
                  <i class="fa-solid fa-trophy"></i>
                </div>
                <div>My Matches</div>
              </div>
            </Link>
            <Link to="/leaderboard">
              <div className="d-flex flex-column align-items-center">
                <div>
                  <i class="fa-solid fa-user"></i>
                </div>
                <div>Leaderboard</div>
              </div>
            </Link>
            <Link to="/teamstats">
              <div className="d-flex flex-column align-items-center">
                <div>
                  <i class="fa-solid fa-ellipsis"></i>
                </div>
                <div>Team Stats</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bid;
