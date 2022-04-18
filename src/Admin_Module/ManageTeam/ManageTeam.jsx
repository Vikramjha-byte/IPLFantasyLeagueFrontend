import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AdminService from "../../Services/AdminService";
import AdminHeader from "../AdminDashboard/AdminHeader/AdminHeader";
import "./manageteam.css";

function ManageTeam() {
  //Using the useState hooks to set the state
  const [teams, setTeams] = useState([]);
  const [admin, setAdmin] = useState("");
  const navigate = useNavigate();

  //Mounting the data from API
  useEffect(() => {
    AdminService.getTeams().then((response) => {
      setTeams(response.data);
    });
    const loggedInUser = localStorage.getItem("admin");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setAdmin(foundUser);
    }
  }, []);
  if (admin === "") {
    return navigate("/master_admin");
  }

  return (
    <div>
      <AdminHeader />
      <div className="container-fluid p-0 manage_team">
        <div className="manage_container">
          <Link to="/admin/newteam" className="btn btn-success p-3  text-white">
            <i class="fa-solid fa-plus"></i> New Team
          </Link>
          <div className="d-flex flex-row flex-wrap justify-content-around ms-3 me-3">
            {teams && teams.length > 0
              ? teams.map((team) => (
                  <div className="card m-3 mt-4 rounded-3 p-3  col-12 col-lg-5 col-md-5">
                    <div className="card-body d-flex flex-column flex-wrap justify-content-around align-items-center">
                      <div class="d-flex flex-column flex-wrap align-items-center justify-content-center">
                        <div>
                          <img
                            className="img-fluid team_photo "
                            src={team.photos}
                            alt={team.team_name}
                          />
                        </div>
                        <div class=" col-100 text-center">
                          <h3 className="mt-4">{team.team_name}</h3>
                          <p>{team.home_ground}</p>
                          <div class="w-100 ">
                            <Link
                              to={`/admin/updateteam/${team.team_id}`}
                              className="btn btn-success rounded-3 p-3"
                            >
                              Update Team
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              : null}
          </div>
        </div>
      </div>
      {/* <!-- Modal For Updating the  --> */}
      <div
        class="modal fade"
        id="players"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">...</div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManageTeam;
