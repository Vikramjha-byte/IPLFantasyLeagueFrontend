import axios from "axios";

const ADMIN_API_REGISTRATION_URL = "http://localhost:8085/admin/register"; //Registration API
const ADMIN_API_LOGIN_URL = "http://localhost:8085/admin/login"; //Login API
const ADMIN_API_GET_TEAMS = "http://localhost:8085/admin/teams"; //Get Team API
const ADMIN_API_GET_TEAM_BY_ID = "http://localhost:8085/admin/teams"; //Get Team BY ID
const ADMIN_API_UPDATE_TEAMICON_BY_ID =
  "http://localhost:8085/admin/update-teamlogo"; //Update Team Logo
const ADMIN_API_UPDATE_TEAMDATA_BY_ID =
  "http://localhost:8085/admin/update-teamdata"; //Update Team data
const ADMIN_API_Match_Stats = "http://localhost:8085/admin/matches"; //Get Match Stats
const ADMIN_API_GET_MATCH_BY_ID = "http://localhost:8085/admin/match"; //Get Match By ID
const ADMIN_API_DELETE_TEAM = "http://localhost:8085/admin/delete"; //Delete the team
const ADMIN_API_CREATE_TEAM = "http://localhost:8085/admin/create-team"; //Add Team

const ADMIN_API_GET_TOURNAMENT = "http://localhost:8085/admin/gettournament"; //Get Tournament

const ADMIN_API_GET_MATCH_BY_TOURNAMENT_NAME =
  "http://localhost:8085/admin/getmatchbytournament"; //Get Match by Tournament Name

const ADMIN_API_CREATE_TOURNAMENT =
  "http://localhost:8085/admin/create-tournament"; //Creating the Tournament

const ADMIN_API_DELETE_TOURNAMENT =
  "http://localhost:8085/admin/deletetournament"; //Deleting the Tournament

const ADMIN_API_UPDATE_MATCH = "http://localhost:8085/admin/match-schedule"; //Rescheduling the match

const ADMIN_API_UPDATE_RESULT = "http://localhost:8085/admin/updateresult"; //Updating the Result

const ADMIN_API_CREATE_MATCH = "http://localhost:8085/admin/creatematch"; //creating the match

const ADMIN_API_GET_TOURNAMENT_BY_ID = "http://localhost:8085/admin/tournament"; //Getting the tournament by Id

const ADMIN_API_GET_BID_BY_MATCH_ID = "http://localhost:8085/admin/bid"; //Getting bid by match id

const USER_API_GET_MATCH_BY_TEAM_NAME =
  "http://localhost:8085/user/getMatchesByTeamName"; //Getting matches by team name

class AdminService {
  ///////Registration/////

  async doAdminRegistration(admin) {
    return await axios.post(ADMIN_API_REGISTRATION_URL, admin);
  }

  /////Login API//////

  async doAdminLogin(admin) {
    return await axios.post(ADMIN_API_LOGIN_URL, admin);
  }

  /////Get Team API///////

  async getTeams() {
    return await axios.get(ADMIN_API_GET_TEAMS);
  }
  //////Get Team by ID/////////////////

  async getTeamById(team_id) {
    return await axios.get(ADMIN_API_GET_TEAM_BY_ID + `/${team_id}`);
  }

  ///////Update Team Logo By ID/////////////

  async updateTeam(team_id, team) {
    return await axios.put(
      ADMIN_API_UPDATE_TEAMICON_BY_ID + `/${team_id}`,
      team
    );
  }

  ////////Update Team Data By ID////////////////////

  async updateTeamdata(team_id, team) {
    return await axios.put(
      ADMIN_API_UPDATE_TEAMDATA_BY_ID + `/${team_id}`,
      team
    );
  }

  ////////////Update Match By ID////////////////

  async getMatchById(match_id) {
    return await axios.get(ADMIN_API_GET_MATCH_BY_ID + `/${match_id}`);
  }

  //////Getting Matches////////////////////

  async getMatches() {
    return await axios.get(ADMIN_API_Match_Stats);
  }

  ///////////Delete Team/////////////////////
  async deleteTeam(team_id) {
    return await axios.delete(ADMIN_API_DELETE_TEAM + `/${team_id}`);
  }
  ////////////////Create Team////////////////
  async addTeam(team) {
    return await axios.post(ADMIN_API_CREATE_TEAM, team);
  }

  ///////////Get Tournament////////
  async getTournament() {
    return await axios.get(ADMIN_API_GET_TOURNAMENT);
  }

  /////////////Get Match by tournament name//////////////////

  async getMatchesbytournamentname(tournament_name) {
    return await axios.get(ADMIN_API_GET_MATCH_BY_TOURNAMENT_NAME, {
      params: { tournament_name: tournament_name },
    });
  }
  ////////////////////Create Tournament/////////////////////////////
  async createTournament(tournament) {
    return await axios.post(ADMIN_API_CREATE_TOURNAMENT, tournament);
  }
  ///////////////////Delete Tournament/////////////////////////////
  async deleteTournament(tournament_name) {
    return await axios.delete(ADMIN_API_DELETE_TOURNAMENT, {
      params: { tournament_name: tournament_name },
    });
  }

  ///////////////////////////////////Rescheduling the Match/////////////////////////
  async UpdateMatch(match_id, match) {
    return await axios.put(ADMIN_API_UPDATE_MATCH + `/${match_id}`, match);
  }
  /////////////////////////////////Updating the result//////////////////////////////////
  async updateResult(match_id, details) {
    return await axios.put(ADMIN_API_UPDATE_RESULT + `/${match_id}`, details);
  }
  ///////////////////////////Creating the match///////////////////////////////////////
  async createMatch(details) {
    return await axios.post(ADMIN_API_CREATE_MATCH, details);
  }
  ///////////////////////////Getting tournament by id//////////////////////////////////

  async getTournamentById(tournament_id) {
    return await axios.get(
      ADMIN_API_GET_TOURNAMENT_BY_ID + `/${tournament_id}`
    );
  }
  /////////////////////////Getting Bid By Match Id////////////////////////////
  async getBidByMatchID(match_id) {
    return await axios.get(ADMIN_API_GET_BID_BY_MATCH_ID + `/${match_id}`);
  }
  ////////////////////////////Getting match by teamname/////////////////////////
  async getMatchByTeamName(team_name) {
    return await axios.get(USER_API_GET_MATCH_BY_TEAM_NAME, {
      params: { team_name: team_name },
    });
  }
}
export default new AdminService();
