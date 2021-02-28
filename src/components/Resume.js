import React from "react";

const Portfolio = (props) => {
  let resumeData = props.resumeData;

  return (
    <section id="resume">
      <div className="row education">
        <div className="three columns header-col">
          <h1>
            <span>Education</span>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
