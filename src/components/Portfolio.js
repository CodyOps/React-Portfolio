import React from "react";
import { Container } from "semantic-ui-react";

const Portfolio = (props) => {
  let resumeData = props.resumeData;
  return (
    <Container>
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Feel free to view some of my project collections.</h1>
            <div
              id="portfolio-wrapper"
              className="bgrid-quarters s-bgrid-thirds cf"
            >
              {resumeData.portfolio &&
                resumeData.portfolio.map((item) => {
                  return (
                    <div className="columns portfolio-item">
                      <div className="item-wrap">
                        <a href="#modal-01">
                          <img src={`${item.imgurl}`} className="item-img" />
                          <div className="overlay">
                            <div className="portfolio-item-meta">
                              <h5>{item.name}</h5>
                              <p>{item.description}</p>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Portfolio;
