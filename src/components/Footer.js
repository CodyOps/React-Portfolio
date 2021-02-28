import React from "react";
import { Container } from "semantic-ui-react";

const Footer = (props) => {
  let resumeData = props.resumeData;
  return (
    <Container>
      <footer>
        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">
              {resumeData.socialLinks &&
                resumeData.socialLinks.map((item) => {
                  return (
                    <li>
                      <a href={item.url}>
                        <i className={item.className} />
                      </a>
                    </li>
                  );
                })}
            </ul>
          </div>
          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="icon-up-open" />
            </a>
          </div>
        </div>
      </footer>
    </Container>
  );
};

export default Footer;
