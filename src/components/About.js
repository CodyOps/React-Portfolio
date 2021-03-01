import React from "react";
import { Container } from "semantic-ui-react";
import { Grid, Cell } from "react-mdl";

const About = (props) => {
  return (
    <div
      className="aboutBackground"
      style={{ width: "100%", margin: "auto", paddingTop: "1rem" }}
    >
      <div className="container">
        <Grid className="demo-grid-2">
          <Cell
            className="navbar-color1"
            style={{
              padding: "5%",
              margin: "5%",
              fontSize: "18px",
            }}
            col={4}
          >
            <h3>About Me</h3>
            Lorem ipsum.
          </Cell>
        </Grid>
      </div>
    </div>
  );
};

export default About;
