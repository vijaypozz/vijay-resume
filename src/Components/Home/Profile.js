/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";
import Typical from "react-typical";
import "./Profile.css"

const profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-parents">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="#">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="#">
                <i className="fa fa-google-plus-square"></i>
              </a>
              <a href="#">
                <i className="fa fa-instagram-square"></i>
              </a>
              <a href="#">
                <i className="fa fa-youtube-square"></i>
              </a>
              <a href="#">
                <i className="fa fa-twitter-square"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {""}
              Hello, I'm
              <span className="highlighted-text"> Vijay</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {""}
              <h1>
                {" "}
                {""}
                <Typical
                  loop={Infinity}
                  steps={["Hello", 1000, "Hello world!", 500]}
                />
              </h1>
              <span className="profile-role-tagline">
                hello I,m vijay from bangalore
              </span>
            </span>
          </div>
          <div className="profile-option">
            <button className="btn primary-btn">
              {" "}
              Hire me {""}
            </button>
            <a href="#">
                <button className="btn highlighted-btn"> Get Resume </button>
              </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
};

export default profile;
