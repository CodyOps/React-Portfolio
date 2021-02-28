import React from "react";
import { Container } from "semantic-ui-react";

const About = (props) => {
  let resumeData = props.resumeData;
  return (
    <Container>
      <section id="about">
        <div className="row">
          <div className="three columns">
            {/* <img
              className="profile-pic"
              src="images/profilepic.jpg"
              alt="Image of me in Honolulu, Hawaii"
            /> */}
          </div>

          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>I am a full stack developer student.</p>

            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>Cody</span>
                  <br></br>
                  <span>Denver, Colorado</span>
                  <br></br>
                  <span>CodyOps</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default About;
