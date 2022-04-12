import React from "react";
import { Link } from "react-router-dom";
import "./card.css"
function Card() {
  return (
    <div className="container d-flex flex-column align-items-center justify-content-center mt-4">
      <div class="main_box main_box2 d-flex flex-column w-75 align-items-center justify-content-center">
        <h1 class="top_title text-success">Daily Fantasy</h1>
        <h2 class="sub_title ">Create team for every match!</h2>
        <div class="league_new card  col-12 col-lg-4 col-md-8 d-flex flex-column p-5  justify-content-between rounded-6 ">
          <div class="league_title">
            Join daily contests to win the exciting prizes!
          </div>
          <div className="d-flex flex-column align-items-center ">
          <i class="fa-solid fa-trophy trophy"></i>
          </div>
          <div class="prices_cta">
            <div class="league_prizes">
              <span className="btn btn-success fs-6 me-3">PRIZES</span>Autographed Merchandise and much more.
            </div>
            <div class="league_cta d-flex justify-content-center align-items-center">
              <Link to="/daily/home" className="btn btn-lg w-75 btn-outline-primary mt-4 rounded-6  text-center">Play Fantasy</Link>
            </div>
            {/* <!-- <div class="league_cta league_cta_cs">Coming Soon</div>	 --> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
