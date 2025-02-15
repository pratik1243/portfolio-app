"use client";
import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

const Work = ({ setActiveSection }) => {
  const [trigger1, setTrigger1] = useState(false);
  const [animateTrigger1, setAnimateTrigger1] = useState(false);

  const handleScrollEvent1 = () => {
    const element1 = document.getElementById("works-sec");
    const elementPosition1 = element1?.getBoundingClientRect().top;

    if (window.innerHeight - elementPosition1 > 80) {
      setTrigger1(true);
      setActiveSection(2);
    }
  };

  useEffect(() => {
    if (trigger1) {
      setAnimateTrigger1(true);
    }

    if (typeof window !== "undefined") {
      document.addEventListener("scroll", handleScrollEvent1);
    }

    return () => {
      document.removeEventListener("scroll", handleScrollEvent1);
    };
  }, [trigger1]);

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
              <span>4 July 2022 - Present · 2 yrs 8 mos</span>

              <ul className="roles-list">
                <li>
                  Worked on react js, next js, redux toolkit and material UI
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
                  Developed checkout customization module in which merchants can
                  customize brand color and theme of aasaan checkout page
                  integrated in their websites
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
                  Worked on HTML, CSS, Javascript, Bootstrap and bs-dropzone
                </li>
                <li>
                  Worked on SASS preprocessor, jquery and responsive design
                  system
                </li>
                <li>
                  Learned to build HTML mailers for different products and
                  marketing campaigns
                </li>
                <li>
                  Worked on UI development and front end validations in checkout
                  pages (such as AD pay, JS checkout) and PSP portals
                </li>
                <li>
                  Developed different landing pages used for onboarding
                  merchants, marketing campaigns, payments, etc
                </li>
                <li>
                  Developed pages for COU and BOU portals in BBPS portal where i
                  Worked on customization of template and its UI components                 
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
