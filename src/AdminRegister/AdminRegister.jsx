import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AdminService from "../Services/AdminService";

function AdminRegister() {
  //Setting the state using useState
  const [username, setUserName] = useState("");
  const [Password, setPassword] = useState("");
  const navigate = useNavigate();
  let [userNameErr, setUserNameErr] = useState("");
  let [passwordErr, setPasswordErr] = useState("");
  let isValid = "";
  let errorDetails = "";
  //Validating the form
  const validateTheForm = () => {
    let userNameErr,
      passwordErr = "";
    isValid = false;
    if (username.length < 6) {
      userNameErr = "Please Enter valid username";
    }
    if (
      !Password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9_])/)
    ) {
      passwordErr = "Please enter the valid password";
    }
    if (userNameErr || passwordErr) {
      setUserNameErr(userNameErr);
      setPasswordErr(passwordErr);
    } else {
      setUserNameErr(userNameErr);
      setPasswordErr(passwordErr);
      isValid = true;
    }
  };
  //Submitting the Data
  const submitTheData = () => {
    const admin = {
    username: username,
      password: Password,
      
    };
    if (isValid === true) {
      AdminService.doAdminRegistration(admin)
        .then((res) => {
          alert("You are successfully registered,Click OK to proceed...");
          navigate("/master_admin");
        })
        .catch((error) => {
          errorDetails = error.response.data;
          alert(errorDetails);
        });
    }
  };
  //Clearing the form
  const clearTheForm = () => {
    setUserName("");
    setPassword("");
  };
//handling the Registration
  const handleRegister = (e) => {
    e.preventDefault();
    validateTheForm();
    submitTheData();
    clearTheForm();
  };
  return (
    <div className="container-fluid registerParent ">
      <div className="row">
        <div className="col-md-8 col-lg-5 col-12 p-0 d-flex flex-column align-items-center registerContainer bg-light">
          <h1>Register</h1>

          <div className="card registerCard align-items-center rounded-3">
            <div className="w-100 mt-4  d-flex flex-row justify-content-around social_btn">
              <button className="btn registerFacebookBtn  btn-outline-primary text-center p-2 pe-4">
                <span className="m-3">
                  <i class="fa-brands fa-facebook-square"></i>
                </span>
                Facebook
              </button>
              <button className="btn registerGoogleBtn btn-outline-primary text-center p-2 pe-4">
                <span className="m-3">
                  <i class="fa-brands fa-google"></i>
                </span>
                Google
              </button>
            </div>
            <div className="text-muted p-3 mt-4">or</div>
            <form className="w-100 d-flex flex-column justify-content-center m-3 mt-0 p-3">
              <div className="p-3 mt-1 formInput">
                <label htmlFor="username" className="text-muted">
                  User Name
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  className="form-control"
                  value={username}
                  onChange={(e) => setUserName(e.target.value)}
                />
                <p className="error">{userNameErr}</p>
              </div>
              <div className="p-3 mt-1 formInput">
                <label htmlFor="Password" className="text-muted">
                  Password
                </label>
                <input
                  type="password"
                  name="Password"
                  id="Password"
                  className="form-control"
                  value={Password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <p className="error">{passwordErr}</p>
              </div>
              <div className="p-3 mt-1 formInput">
                <button
                  onClick={handleRegister}
                  className="btn btn-success w-100 rounded-3"
                >
                  Register
                </button>
                <p className="text-center  registerAgreement">
                  By registering, I agree to fantasy{" "}
                  <Link className="text-decoration-none " to="/">
                    T&Cs
                  </Link>
                </p>
              </div>
            </form>
          </div>
          <p className="text-center registerLogin text-muted">
            Already a user?{" "}
            <Link className="text-decoration-none" to="/master_admin">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default AdminRegister;
