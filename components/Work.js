import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Work = ({ animateTrigger1 }) => {
  return (
    <div
      id="works-sec"
      className={`work-sec ${animateTrigger1 ? "animate-work-sec" : ""}`}
    >
      <Container className="container-sec">
        <Row>
          <Col lg={12} md={12} sm={12} xs={12}>
            <h1 className="work-head-txt">Work Experience</h1>
          </Col>
          <Col lg={6} md={6} sm={6} xs={12}>
            <div
              className={`experience-cards ${
                animateTrigger1 ? "animate-work-cards" : ""
              }`}
            >
              <h4>Safexpay (Jr. Frontend Developer)</h4>
              <span>4 July 2022 - Present · 2 yrs</span>

              <ul className="roles-list">
                <li>
                  Worked on structure of next js, redux toolkit and material UI
                </li>
                <li>
                  Maintainance and updation of content in safexpay official
                  website and safexpay docs page
                </li>
                <li>
                  Worked on code structure and API integration of modules in PG
                  portal
                </li>
                <li>
                  Recurring discussions, review with the product team regarding
                  the UI design flow and implementation of front end pages
                </li>
                <li>
                  Worked with win SCP software for deployment, bitbucket and git
                </li>
              </ul>
            </div>
          </Col>
          <Col lg={6} md={6} sm={6} xs={12}>
            <div
              className={`experience-cards expe-card2 ${
                animateTrigger1 ? "animate-work-cards" : ""
              }`}
            >
              <h4>Safexpay (Frontend Developer Intern)</h4>
              <span>25 Oct 2021 - 3 July 2022 · 10 mos</span>

              <ul className="roles-list">
                <li>
                  Started working on structure of HTML, CSS, Javascript and
                  Bootstrap
                </li>
                <li>
                  Worked on SASS preprocessor, jquery and responsive design
                  system
                </li>
                <li>Learned to build HTML mailers for different products</li>
                <li>
                  Worked on front end validations in checkout pages and
                  developed UI for portals
                </li>
                <li>
                  Developed different landing pages used for onboarding
                  merchants, marketing campaigns, payments, etc
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>

      <div className="gradient-bg-3"></div>
    </div>
  );
};

export default Work;
