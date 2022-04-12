import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserService from "../Services/UserService";
import "./login.css";
function Login() {

  //Getting Values in the variable
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let [userNameErr, setUserNameErr] = useState("");
  let [passwordErr, setPasswordErr] = useState("");
  const navigate = useNavigate();
  let isValid = false;
  let errorDetails = "";

  //Validating the form
  const validateTheForm = () => {
    let userNameErr,
      passwordErr = "";
    isValid = true;
    if (username.length < 6) {
      userNameErr = "UserName can't be Empty";
    }
    if (password.length < 6) {
      passwordErr = "Password length should be of six characters";
    }

    if (userNameErr || passwordErr) {
      setUserNameErr(userNameErr);
      setPasswordErr(passwordErr);
      isValid = false;
    } else {
      setUserNameErr(userNameErr);
      setPasswordErr(passwordErr);
      isValid = true;
    }
  };

  //Validating the user

  const validateTheUser = () => {
    const user = {
      username: username,
      password: password,
    };
    if (isValid === true) {
      UserService.doUserLogin(user)
        .then((res) => {
          const data = res.data;
          console.log(data.name);
          alert("User Logged In");
          navigate("/user_dashboard");
        })
        .catch((error) => {
          errorDetails = error.response.data;
          alert(errorDetails);
        });
    }
  };

  //Cleaing the input
  const clearTheForm = () => {
    setUsername("");
    setPassword("");
  };

  //handling the login on the button click
  const handleLogin = (e) => {
    e.preventDefault();
    validateTheForm();
    validateTheUser();
    clearTheForm();
  };
  return (
    <div className="container-fluid loginParent ">
      <div className="row">
        <div className="col-md-8 col-lg-5 col-12 p-0 d-flex flex-column align-items-center loginContainer bg-light">
          <h1>Login</h1>

          <div className="card loginCard align-items-center rounded-3">
            <div className="w-100 mt-4  d-flex flex-row justify-content-around social_btn">
              <button className="btn loginFacebookBtn  btn-outline-primary text-center p-2 pe-4">
                <span className="m-3">
                  <i class="fa-brands fa-facebook-square"></i>
                </span>
                Facebook
              </button>
              <button className="btn loginGoogleBtn btn-outline-primary text-center p-2 pe-4">
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
                  onChange={(e) => setUsername(e.target.value)}
                />
                <p class="error">{userNameErr}</p>
              </div>
              <div className="p-3 mt-1 formInput">
                <label htmlFor="password" className="text-muted">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <p class="error">{passwordErr}</p>
              </div>
              <div className="p-3 mt-1 formInput">
                <button
                  onClick={handleLogin}
                  className="btn btn-success w-100 rounded-3 text-uppercase "
                >
                  Proceed
                </button>
              </div>
            </form>
          </div>
          <p className="text-center loginRegister text-muted">
            Not a Member?{" "}
            <Link className="text-decoration-none" to="/registerbidder">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
