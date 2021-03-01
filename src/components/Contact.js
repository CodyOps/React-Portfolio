import React from "react";
import { Container } from "semantic-ui-react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

const Contact = () => {
  return (
    <div>
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h1>Cody Chen</h1>
            <img
              src=""
              alt="profilepic"
              className="profile-image"
              style={{ height: "25" }}
            />
            <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
              Full Stack Software Developer
            </p>
          </Cell>

          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "25px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-phone-square" aria-hidden="true" />
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "25px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-envelope" aria-hidden="true" />
                    codychen1@gmail.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "25px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                    <a href="" rel="noopener noreferrer" target="_blank">
                      Cody Chen | LinkedIn.com
                    </a>
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    </div>
  );
};

export default Contact;
