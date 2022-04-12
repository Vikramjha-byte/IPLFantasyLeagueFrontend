import axios from "axios";
const ADMIN_API_REGISTRATION_URL = "http://localhost:8085/admin/register";
const ADMIN_API_LOGIN_URL = "http://localhost:8085/admin/login";

class AdminService{
    doAdminRegistration(admin) {
      console.log(admin)
        return axios.post(ADMIN_API_REGISTRATION_URL, admin);
      }
    
      doAdminLogin(admin) {
        console.log(admin)
        return axios.post(ADMIN_API_LOGIN_URL, admin);
      }
}
export default new AdminService();