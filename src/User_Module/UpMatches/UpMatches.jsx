import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UserService from "../../Services/UserService";
// import { Link } from "react-router-dom";
import "./upmatches.css";
function UpMatches() {
  const [matchDetail, setMatchDetail] = useState([]);
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  let yyyy = today.getFullYear();

  today = yyyy + "-" + mm + "-" + dd;

  let currentTime = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });

  useEffect(() => {
    UserService.getMatch().then((res) => {
      setMatchDetail(res.data);
    });
  }, []);

  const handleTime = (e) => {
    //create date format
    var timeStart = new Date("01/01/2007 " + e);
    var timeEnd = new Date("01/01/2007 " + currentTime);

    var difference = timeStart - timeEnd;
    var hour = Math.floor(difference / 60 / 60 / 1000);
    var minute = Math.floor(difference / 60000);

    var TimeLeft = hour + " h " + minute + " m ";

    return TimeLeft;
  };

  return (
    <div>
      <div className="container-fluid upmatchParent ">
        <div className="row">
          <div className="col-md-8 col-lg-5 col-12 p-0 d-flex flex-column align-items-center upmatchContainer bg-light position-relative">
            <div className="img-fluid upmatch_icon">
              <img src="../img/upmatch_image.png" alt="" />
            </div>
            <h1>Upcoming Matches</h1>

            {matchDetail &&
              matchDetail.length > 0 &&
              matchDetail.map((match) =>
                match.match_date === today && match.match_time > currentTime ? (
                  <Link
                    to={`/bid/${match.match_id}`}
                    className="text-decoration-none upmatchCard text-dark"
                  >
                    <div className="card  mt-4 upmatchCard">
                      <span className="text-muted ms-2 mt-2">
                        Match {match.match_id}
                      </span>
                      <div className="d-flex flex-row justify-content-between align-items-center match_details">
                        <div className="d-flex flex-row justify-content-center team align-items-center">
                          <img
                            className="img-fluid"
                            src={match.teamdetails.photos}
                            alt={match.teamdetails.team_name}
                          />
                          <p className="ms-1 fw-bold">
                            {match.teamdetails.team_name}
                          </p>
                        </div>
                        <div className="text-danger">
                          {handleTime(match.match_time)} Left
                        </div>
                        <div className="d-flex flex-row text-justify team align-items-center">
                          <p className="me-1 fw-bold">
                            {match.teamdetails2.team_name}
                          </p>
                          <img
                            className="img-fluid"
                            src={match.teamdetails2.photos}
                            alt={match.teamdetails2.team_name}
                          />
                        </div>
                      </div>
                    </div>
                  </Link>
                ) : (
                  <div className="text-center mt-4 text-muted">
                    {" "}
                    No Matches Scheduled
                  </div>
                )
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
            <Link to="">
              <div className="d-flex flex-column align-items-center">
                <div>
                  <i class="fa-solid fa-user"></i>
                </div>
                <div>Me</div>
              </div>
            </Link>
            <Link to="">
              <div className="d-flex flex-column align-items-center">
                <div>
                  <i class="fa-solid fa-ellipsis"></i>
                </div>
                <div>More</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpMatches;
