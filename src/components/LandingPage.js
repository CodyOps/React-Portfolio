import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

const LandingPage = () => {
  return (
    <div style={{ width: "100%", margin: "auto" }}>
      <Grid className="landing-grid">
        <Cell col={12}>
          <img
            src="public/images/IMG_1725.PNG"
            alt="profilepic"
            className="profile-image"
          />
          <div className="title-text">
            <h1>Full Stack Web Developer</h1>

            <hr />

            <p>
              HTML/CSS | Bootstrap |JavaScript | jQuery | Node.js | React.js |
              Express.js | MongoDB | Mongoose ORM | MySQL | Sequelize.js
            </p>
            <div className="media-links">
              <a
                href="https://github.com/codyops"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fa fa-github-square" aria-hidden="true" />
              </a>
              <a href="" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-linkedin-square" aria-hidden="true" />
              </a>
            </div>
          </div>
        </Cell>
      </Grid>
    </div>
  );
};

export default LandingPage;
