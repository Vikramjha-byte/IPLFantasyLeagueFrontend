import React from "react";
import { Link } from "react-router-dom";
import "./header.css"
function Header() {
  return (
    <>
      <div class="container">
        <header className="d-flex flex-wrap flex-row align-items-center justify-content-between justify-content-md-between py-3 mb-4">
          <div className="col-lg-8 col-md-6 col-12 fw-bold text-uppercase text-dark  ">
            <span className="btn btn-dark ">IPLFantasy</span>
          </div>

          <div className="col-lg-4 col-md-6 col-12 text-center headerBtn">
            <Link to="/bidder" type="button" class="btn btn-lg btn-primary me-2 rounded-5">
              Login
            </Link>
            <Link to="/registerbidder" type="button" class="btn btn-lg btn-primary">
              Register
            </Link>
          </div>
        </header>
      </div>
    </>
  );
}

export default Header;
