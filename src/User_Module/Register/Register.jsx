import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserService from "../../Services/UserService";
import "./register.css";
function Register() {
  //Getting the value
  const [fullname, setFullName] = useState("");
  const [username, setUserName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const navigate = useNavigate();
  let [fullNameErr, setFullNameErr] = useState("");
  let [userNameErr, setUserNameErr] = useState("");
  let [mobileNumberErr, setMobileNumberErr] = useState("");
  let [emailErr, setEmailErr] = useState("");
  let [passwordErr, setPasswordErr] = useState("");
  let isValid = "";
  let errorDetails = "";
  //Validating the form
  const validateTheForm = () => {
    let fullNameErr,
      userNameErr,
      mobileNumberErr,
      emailErr,
      passwordErr = "";
    isValid = false;

    if (fullname.length < 6 && !fullname.match(/^[\\p{L} .'-]+$/)) {
      fullNameErr =
        "Full name should be minimum of length six without any special characters except space";
    }
    if (username.length < 6) {
      userNameErr = "Please Enter valid username";
    }
    if (!mobileNumber.match(/^[6-9]\d{9}$/)) {
      mobileNumberErr = "Please Enter Valid Mobile number";
    }
    if (!Email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      emailErr = "Please enter valid email address";
    }
    if (
      !Password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9_])/)
    ) {
      passwordErr = "Please enter the valid password";
    }

    if (
      fullNameErr ||
      userNameErr ||
      mobileNumberErr ||
      emailErr ||
      passwordErr
    ) {
      setFullNameErr(fullNameErr);
      setUserNameErr(userNameErr);
      setMobileNumberErr(mobileNumberErr);
      setEmailErr(emailErr);
      setPasswordErr(passwordErr);
    } else {
      setFullNameErr(fullNameErr);
      setUserNameErr(userNameErr);
      setMobileNumberErr(mobileNumberErr);
      setEmailErr(emailErr);
      setPasswordErr(passwordErr);
      isValid = true;
    }
  };
//Submiting the data
  const submitTheData = () => {
    const user = {
      name: fullname,
      email: Email,
      password: Password,
      mobile_number: mobileNumber,
      username: username,
    };
    if (isValid === true) {
      UserService.doUserRegistration(user)
        .then((res) => {
          alert("You are successfully registered,Click OK to proceed...");
          navigate("/bidder");
        })
        .catch((error) => {
          errorDetails = error.response.data;
          alert(errorDetails);
        });
    }
  };
//Clearing the form
  const clearTheForm = () => {
    setFullName("");
    setUserName("");
    setEmail("");
    setPassword("");
    setMobileNumber("");
  };
//Handling the Registration on button click
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
                <label htmlFor="fullname" className="text-muted">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullname"
                  id="fullname"
                  className="form-control"
                  value={fullname}
                  onChange={(e) => setFullName(e.target.value)}
                />
                <p className="error">{fullNameErr}</p>
              </div>
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
                <label htmlFor="mobileNumber" className="text-muted">
                  Mobile No.
                </label>
                <input
                  type="text"
                  name="mobileNumber"
                  id="mobileNumber"
                  className="form-control"
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                />
                <p className="error">{mobileNumberErr}</p>
              </div>
              <div className="p-3 mt-1 formInput">
                <label htmlFor="Email" className="text-muted">
                  Email
                </label>
                <input
                  type="email"
                  name="Email"
                  id="Email"
                  className="form-control"
                  value={Email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <p className="error">{emailErr}</p>
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
            <Link className="text-decoration-none" to="/bidder">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
