import axios from "axios";

const User_API_BASE_URL = "http://localhost:8085/user/get_users";
const USER_API_REGISTRATION_URL = "http://localhost:8085/user/registration";
const USER_API_LOGIN_URL = "http://localhost:8085/user/login";
const USER_API_MATCH_URL = "http://localhost:8085/user/match_details";
class UserService {
  getUsers() {
    return axios.get(User_API_BASE_URL);
  }
  doUserRegistration(user) {
    return axios.post(USER_API_REGISTRATION_URL, user);
  }

  doUserLogin(user) {
    return axios.post(USER_API_LOGIN_URL, user);
  }
  async getMatch() {
    return await axios.get(USER_API_MATCH_URL);
  }
}
export default new UserService();
