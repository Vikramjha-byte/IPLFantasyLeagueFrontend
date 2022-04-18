import axios from "axios";

const User_API_BASE_URL = "http://localhost:8085/user/get_users";
const USER_API_REGISTRATION_URL = "http://localhost:8085/user/registration";
const USER_API_LOGIN_URL = "http://localhost:8085/user/login";
const USER_API_MATCH_URL = "http://localhost:8085/user/match_details";
const USER_API_STORE_BID = "http://localhost:8085/user/bid";
const USER_API_GETBID_BY_USERID = "http://localhost:8085/user/bidByUser";
const USER_API_UPDATE_BID = "http://localhost:8085/user/update_bid";
const USER_API_DELETE_BID="http://localhost:8085/user/cancel_bid"
class UserService {
  async getUsers() {
    return await axios.get(User_API_BASE_URL);
  }
  async doUserRegistration(user) {
    return await axios.post(USER_API_REGISTRATION_URL, user);
  }

  async doUserLogin(user) {
    return await axios.post(USER_API_LOGIN_URL, user);
  }
  async getMatch() {
    return await axios.get(USER_API_MATCH_URL);
  }
  async storeBid(biddto) {
    return await axios.post(USER_API_STORE_BID, biddto);
  }
  async getBidByUserid(user_id) {
    return await axios.get(USER_API_GETBID_BY_USERID, {
      params: { user_id: user_id },
    });
  }
  async updateBidByMatchId(match_id, biddto) {
    return await axios.put(
      USER_API_UPDATE_BID+`/${match_id}`,
      biddto
    );
  }
  async deleteTheBid(match_id,user_id){
    return await axios.delete(
      USER_API_DELETE_BID+`/${user_id}/${match_id}`
    )
  }
}
export default new UserService();
