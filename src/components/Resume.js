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
        <div className="nine columns main-col">
          {resumeData.education &&
            resumeData.education.map((item) => {
              return (
                <div className="row item">
                  <div className="twelve columns">
                    <h3>{item.UniversityName}</h3>
                    <p className="info">{item.specialization}</p>
                    <p>{item.Achievements}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <div className="row work">
        <div className="three columns header-col">
          <h1>
            <span>Work</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          {resumeData.work &&
            resumeData.work.map((item) => {
              return (
                <div className="row item">
                  <div className="twelve columns">
                    <h3>{item.CompanyName}</h3>
                    <p className="info">{item.specialization}</p>
                    <p>{item.Achievements}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
