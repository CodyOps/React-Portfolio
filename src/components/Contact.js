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
        <br></br>
        <div className="row">
          <aside className="eigth columns footer-widgets">
            <div className="widget">
              <h4>LinkedIn: Cody Chen</h4>
              <h4>Email: Codychen1@gmail.com</h4>
            </div>
          </aside>
        </div>
      </section>
    </Container>
  );
};

export default Contact;
