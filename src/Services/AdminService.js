import axios from "axios";
const ADMIN_API_REGISTRATION_URL = "http://localhost:8085/admin/register";
const ADMIN_API_LOGIN_URL = "http://localhost:8085/admin/login";
const ADMIN_API_GET_TEAMS = "http://localhost:8085/admin/teams";
const ADMIN_API_GET_TEAM_BY_ID = "http://localhost:8085/admin/teams";
const ADMIN_API_UPDATE_TEAMICON_BY_ID =
  "http://localhost:8085/admin/update-teamphoto";
const ADMIN_API_UPDATE_TEAMDATA_BY_ID =
  "http://localhost:8085/admin/update-teamData";
const ADMIN_API_Match_Stats = "http://localhost:8085/admin/matches";

const ADMIN_API_GET_MATCH_BY_ID = "http://localhost:8085/admin/match";

class AdminService {
  async doAdminRegistration(admin) {
    return await axios.post(ADMIN_API_REGISTRATION_URL, admin);
  }

  async doAdminLogin(admin) {
    return await axios.post(ADMIN_API_LOGIN_URL, admin);
  }

  async getTeams() {
    return await axios.get(ADMIN_API_GET_TEAMS);
  }
  async getTeamById(team_id) {
    return await axios.get(ADMIN_API_GET_TEAM_BY_ID + `/${team_id}`);
  }
  async updateTeam(team_id, data) {
    return await axios.put(
      ADMIN_API_UPDATE_TEAMICON_BY_ID + `/${team_id}`,
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data", // <- HERE
        },
      }
    );
  }
  async updateTeamData(team_id, data) {
    return await axios.put(
      ADMIN_API_UPDATE_TEAMDATA_BY_ID + `/${team_id}`,
      data
    );
  }
  async getMatchById(match_id) {
    return await axios.get(ADMIN_API_GET_MATCH_BY_ID + `/${match_id}`);
  }

  async getMatches() {
    return await axios.get(ADMIN_API_Match_Stats);
  }
}
export default new AdminService();
