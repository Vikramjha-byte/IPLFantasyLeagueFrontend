import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AdminService from "../../../Services/AdminService";
import AdminHeader from "../AdminHeader/AdminHeader";
import "./updateteam.css";
function UpdateTeam() {
  const [team, setTeam] = useState([]);
  // const [teamId, setTeamId] = useState("");
  const [teamIcon, setTeamIcon] = useState("");
  const [fullName, setFullName] = useState("");
  const [nameintial, setNameIntial] = useState("");
  const [players, setPlayers] = useState("");
  const [captain, setCaptain] = useState("");
  const [homeGround, setHomeGround] = useState("");
  const [teamIconErr, setTeamIconErr] = useState("");
  const [fullNameErr, setFullNameErr] = useState("");
  const [nameIntialErr, setNameIntialErr] = useState("");
  const [homegroundErr, setHomegroundErr] = useState("");
  const [playersErr, setPlayersErr] = useState("");
  const [captainErr, setCaptainErr] = useState("");
  const { team_id } = useParams();
  let isValid = false;

  //Validating the Form

  const validateTheForm = () => {
    let teamIconErr,
      fullNameErr,
      nameIntialErr,
      playersErr,
      captainErr,
      homegroundErr = "";

    if (teamIcon.length < 1) {
      teamIconErr = "Please upload the team icon";
    }
    if (fullName.length < 6) {
      fullNameErr = "Please Enter the valid Team Name";
    }
    if (nameintial.length < 2) {
      nameIntialErr = "Intial should be mimimum of 2 characters";
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
    if (homeGround.length < 6) {
      homegroundErr = "Please Enter the valid homeground";
    }
    if (
      teamIconErr ||
      fullNameErr ||
      nameIntialErr ||
      playersErr ||
      captainErr ||
      homegroundErr
    ) {
      setTeamIconErr(teamIconErr);
      setFullNameErr(fullNameErr);
      setNameIntialErr(nameIntialErr);
      setPlayersErr(playersErr);
      setCaptainErr(captainErr);
      setHomegroundErr(homegroundErr);
      isValid = false;
    } else {
      setTeamIconErr(teamIconErr);
      setFullNameErr(fullNameErr);
      setNameIntialErr(nameIntialErr);
      setPlayersErr(playersErr);
      setCaptainErr(captainErr);
      setHomegroundErr(homegroundErr);
      isValid = true;
    }
  };

  //Updating the Image to database
  const updateTheImage = () => {
    const formData = new FormData();
    formData.append("image", teamIcon, teamIcon.name);

    if (isValid === true) {
      AdminService.updateTeam(team_id, formData).then((response) => {});
    }
  };
  const updateTheData = () => {
    const team = {
      captain: captain,
      full_name: fullName,
      team_name: nameintial,
      home_ground: homeGround,
      team_players: players,
    };
    if (isValid === true) {
      AdminService.updateTeamData(team_id, team).then((res) => {
        alert(res.data);
      });
    }
  };

  //Handling The Update Button call

  const handleUpdate = (e) => {
    e.preventDefault();
    validateTheForm();
    updateTheImage();
    updateTheData();
  };

  useEffect(() => {
    AdminService.getTeamById(team_id).then((response) => {
      setTeam(response.data);
      console.warn(response.data);
    });
  }, [team_id]);

  return (
    <div>
      <AdminHeader />
      <div className="container-fluid p-0 manage_team">
        <div className="manage_container">
          <div className="d-flex flex-column align-items-center justify-content-around">
            <h2 className="text-center text-uppercase border border-3 rounded-3 p-3">
              Edit Team Details
            </h2>
            <img
              className="img-fluid team_photo mt-4"
              src={team.photos}
              alt=""
            />
            <form className="d-flex flex-column col-lg-6 col-md-6 col-12  m-3 update_form">
              <label htmlFor="teamIcon"> Team Logo :</label>
              <input
                className="image"
                type="file"
                name="teamIcon"
                id="teamIcon"
                defaultValue={team.photos}
                onChange={(e) => setTeamIcon(e.target.files[0])}
              />
              <p className="error">{teamIconErr}</p>
              <label htmlFor="fullname">Team Name :</label>
              <input
                className="text-center "
                type="text"
                name="fullname"
                id="fullname"
                defaultValue={team.full_name}
                onChange={(e) => setFullName(e.target.value)}
              />
              <p className="error">{fullNameErr}</p>
              <label htmlFor="nameintial">Name Intial:</label>
              <input
                className="text-center "
                type="text"
                name="nameintial"
                id="nameintial"
                defaultValue={team.team_name}
                onChange={(e) => setNameIntial(e.target.value)}
              />
              <p className="error">{nameIntialErr}</p>
              <label htmlFor="fullname">Home Ground :</label>
              <input
                className="text-center "
                type="text"
                name="homeground"
                id="homeground"
                defaultValue={team.home_ground}
                onChange={(e) => setHomeGround(e.target.value)}
              />
              <p className="error">{homegroundErr}</p>
              <label htmlFor="players">Team Players :</label>
              <textarea
                className="text-center text-justify "
                name="players"
                id=""
                cols="30"
                rows="4"
                onChange={(e) => setPlayers(e.target.value)}
                defaultValue={team.team_players}
                placeholder="Enter the player name separated by comma.."
              ></textarea>
              <p className="error">{playersErr}</p>
              <label htmlFor="nameintial">Team Captain:</label>
              <input
                className="text-center "
                type="text"
                name="nameintial"
                id="nameintial"
                onChange={(e) => setCaptain(e.target.value)}
                defaultValue={team.captain}
              />
              <p className="error">{captainErr}</p>
              <button
                className="btn btn-success mt-4 p-3 text-uppercase rounded-3"
                onClick={handleUpdate}
              >
                Update
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateTeam;
