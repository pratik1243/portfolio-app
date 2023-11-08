import React from "react";
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

const Work = () => {

  const [trigger, setTrigger] = useState(false);
  const [animateTrigger, setAnimateTrigger] = useState(false);

  const handleScrollEvent1 = async () => {
    const element = await document.getElementById("works-sec");
    const elementPosition = await element.getBoundingClientRect().top;

    if (window.pageYOffset > elementPosition) setTrigger(true);
  };

  const registerEvent = () => {
    document.addEventListener("scroll", handleScrollEvent1);
  };

  const unRegisterEvent = () => {
    document.removeEventListener("scroll", handleScrollEvent1);
  };

  useEffect(() => {
    if (trigger) {
      setAnimateTrigger(true);
    }

    registerEvent();

    return unRegisterEvent;
  }, [trigger]);
  
  return (
    <div id="works-sec" className={`work-sec ${animateTrigger ? "animate-about-sec" : ""}`}>
      <Container className="container-sec">
        <Row>
          <Col lg={12} md={12} sm={12} xs={12}>
            <h1 className="work-head-txt">Work Experience</h1>
          </Col>
          <Col lg={6} md={6} sm={6} xs={12}>
            <div className="experience-cards">
              <h4>Safexpay (Junior Front End Developer)</h4>
              <span>4 July 2022 - Present</span>

              <ul className="roles-list">
                <li>To convert figma designs into user-friendly web pages</li>
                <li>
                  To Create responsive web designs that adapt to different
                  screen sizes, devices and make them Compatible to all browsers
                </li>
                <li>
                  Collaborate with back-end developers to effectively resolve
                  the issues related to UI
                </li>
                <li>
                  Recurring discussions and review with the product team
                  regarding the UI design flow
                </li>
                <li>
                  To manage and track changes to the codebase
                </li>
              </ul>
            </div>
          </Col>
          <Col lg={6} md={6} sm={6} xs={12}>
            <div className="experience-cards">
              <h4>Safexpay (Front End Developer Intern)</h4>
              <span>25 Oct 2021 - 3 July 2022</span>

              <ul className="roles-list">
                <li>Started working on structure of HTML and CSS</li>
                <li>Worked with javascript including jquery</li>
                <li>
                  Learned react, next js structure and material UI framework
                </li>
                <li>
                  Worked on form builder demo project where i learned form
                  creation and validation and mobile responsiveness
                </li>
              </ul>
            </div>
          </Col>
          {/* <Col lg={4}>
            <div className="experience-cards">
              <h4>Safexpay (Front End Developer Intern)</h4>
              <span>25 Oct 2021 - 3 July 2022</span>

              <ul className="roles-list">
                <li>Started working on structure of HTML and CSS</li>
                <li>Worked with javascript including jquery</li>
                <li>
                  Learned react, next js structure and material UI framework
                </li>
                <li>
                  Worked on form builder demo project where i learned form
                  creation and validation and mobile responsiveness
                </li>
              </ul>
            </div>
          </Col> */}
        </Row>
      </Container>
      
      <div className="gradient-bg-3"></div>
    </div>
  );
};

export default Work;
