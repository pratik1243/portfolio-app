import React from "react";
import { useState, useEffect } from "react";
import htmlLogo from "../public/html5-logo.png";
import JsLogo from "../public/javascript-logo.svg";
import reactLogo from "../public/react-logo.png";
import cssLogo from "../public/css-logo.png";
import sassLogo from "../public/sass-logo.svg";
import nextJsLogo from "../public/next-js-logo.svg";
import reduxLogo from "../public/redux-logo.svg";
import muiLogo from "../public/material-ui-logo.svg";
import bootStrapLogo from "../public/bootstrap-logo.svg";
import jqueryLogo from "../public/jquery-logo.svg";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";

const About = () => {
  const [trigger, setTrigger] = useState(false);
  const [animateTrigger, setAnimateTrigger] = useState(false);

  const handleScrollEvent = async () => {
    const element = await document.getElementById("about-sec");
    const elementPosition = await element.getBoundingClientRect().top;

    if (window.pageYOffset > elementPosition) setTrigger(true);
  };

  useEffect(() => {
    if (trigger) {
      setAnimateTrigger(true);
    }

    document.addEventListener("scroll", handleScrollEvent);

    return () => {
      document.removeEventListener("scroll", handleScrollEvent);
    };
  }, [trigger]);

  return (
    <div
      id="about-sec"
      className={`about-sec ${animateTrigger ? "animate-about-sec" : ""}`}
    >
      <Container className="container-sec">
        <Row>
          <Col lg={12} md={12} sm={12} xs={12}>
            <h1 className="about-head-txt">About Me</h1>
          </Col>
           <Col lg={8}>
            <div className="user-detail-sec">
              <p className="para-txt1">
                Hello, I'm Pratik, a passionate and innovative front-end
                developer with a strong dedication to creating elegant user
                experiences.
              </p>

              <p className="para-txt1">
                I specialize in front-end web development, where I turn design
                concepts into responsive and interactive websites.                
              </p>

              <p className="para-txt1">
                My journey in front-end web development started back in
                pandemic. Taking YouTube as my source, started off with learning
                HTML and its basics to diving deeper into the world of languages
                such as CSS Styling, animations interactions and JavaScript.
                Till date, I've actively indulged in improving my skills keeping
                YouTube and my professional journey as a source of upgrade.
              </p>
            </div>
          </Col>

          <Col lg={12} md={12} sm={12} xs={12}>
            <div className="skills-section">
              <span className="skills-head-txt">Skills</span>

              <div>                
                <Row className="px-0">
                  <Col lg={2} md={3} sm={4} xs={6}>
                    <div className="skills-cards">
                      <Image src={htmlLogo} height={40} width={36} alt="img" />
                      <span className="skill-txt">HTML</span>
                    </div>
                  </Col>
                  <Col lg={2} md={3} sm={4} xs={6}>
                    <div className="skills-cards">
                      <Image src={cssLogo} height={40} width={36} alt="img" />
                      <span className="skill-txt">CSS</span>
                    </div>
                  </Col>
                  <Col lg={2} md={3} sm={4} xs={6}>
                    <div className="skills-cards after-sm-mt">
                      <Image
                        src={bootStrapLogo}
                        height={43}
                        width={40}
                        alt="img"
                      />
                      <span className="skill-txt">BootStrap</span>
                    </div>
                  </Col>
                  <Col lg={2} md={3} sm={4} xs={6}>
                    <div className="skills-cards after-md-mt">
                      <Image src={sassLogo} height={40} width={80} alt="img" />
                      <span className="skill-txt">SASS</span>
                    </div>
                  </Col>
                  <Col lg={2} md={3} sm={4} xs={6}>
                    <div className="skills-cards after-lg-mt">
                      <Image src={JsLogo} height={40} width={36} alt="img" />
                      <span className="skill-txt">JavaScript</span>
                    </div>
                  </Col>
                  <Col lg={2} md={3} sm={4} xs={6}>
                    <div className="skills-cards after-lg-mt">
                      <Image
                        src={jqueryLogo}
                        height={40}
                        width={40}
                        alt="img"
                      />
                      <span className="skill-txt">Jquery</span>
                    </div>
                  </Col>
                  <Col lg={2} md={3} sm={4} xs={6}>
                    <div className="skills-cards lg-mt">
                      <Image src={reactLogo} height={40} width={40} alt="img" />
                      <span className="skill-txt">React JS</span>
                    </div>
                  </Col>
                  <Col lg={2} md={3} sm={4} xs={6}>
                    <div className="skills-cards lg-mt">
                      <Image src={reduxLogo} height={40} width={40} alt="img" />
                      <span className="skill-txt">Redux</span>
                    </div>
                  </Col>
                  <Col lg={2} md={3} sm={4} xs={6}>
                    <div className="skills-cards lg-mt">
                      <Image src={muiLogo} height={40} width={40} alt="img" />
                      <span className="skill-txt">Material UI</span>
                    </div>
                  </Col>
                  <Col lg={2} md={3} sm={4} xs={6}>
                    <div className="skills-cards lg-mt">
                      <div className="next-logo-bg">
                        <Image
                          src={nextJsLogo}
                          height={40}
                          width={40}
                          alt="img"
                        />
                      </div>
                      <span className="skill-txt">Next JS</span>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
