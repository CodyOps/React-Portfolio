import React from "react";
import { Container } from "semantic-ui-react";

const Portfolio = (props) => {
  let resumeData = props.resumeData;

  return (
    <Container>
      <section id="resume">
        <div className="row education">
          <container>
            <h1>Education</h1>
            <h3>University of Colorado Boulder</h3>
            <h4>Integrative Physiology</h4>
            <p>Summa Cum Laude</p>
            <h3>University of Denver</h3>
            <h4>Full Stack Developer</h4>
            <p>MERN Developer</p>
          </container>
        </div>
        <br></br>
        <div className="row work">
          <container>
            <h1>Work</h1>
            <h3>Kroger Pharmacy</h3>
            <p>Pharmacy Computer Systems</p>
          </container>
        </div>
        <br></br>
        <div className="row skills">
          <container>
            <h1>Skills</h1>
            <ul>HTML</ul>
            <ul>CSS</ul>
            <ul>JavaScript</ul>
            <ul>jQuery</ul>
            <ul>Node.js</ul>
            <ul>Express.js</ul>
            <ul>MySQL</ul>
            <ul>Sequelize.js</ul>
            <ul>MongoDB</ul>
            <ul>Mongoose ORM</ul>
            <ul>React.js</ul>
          </container>
        </div>
        <br></br>
      </section>
    </Container>
  );
};

export default Portfolio;
