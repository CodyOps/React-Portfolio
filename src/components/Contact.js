import React from "react";
import { Container } from "semantic-ui-react";

const Contact = (props) => {
  let resumeData = props.resumeData;
  return (
    <Container>
      <section id="contact">
        <div className="row section-head">
          <div className="ten columns">
            <p className="lead">
              Feel free to contact me about questions or suggestions down below!
            </p>
          </div>
        </div>
        <div className="row">
          <aside className="eigth columns footer-widgets">
            <div className="widget">
              <h4>Linked in :{resumeData.linkedinId}</h4>
            </div>
          </aside>
        </div>
      </section>
    </Container>
  );
};

export default Contact;
