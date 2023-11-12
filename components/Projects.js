import React from "react";
import Image from "next/image";
import projectImg1 from "../public/project-snap-1.png";
import projectImg2 from "../public/project-snap-2.png";
import projectImg3 from "../public/project-snap-3.png";
import projectImg4 from "../public/project-snap-4.png";
import projectImg5 from "../public/project-snap-5.png";
import projectImg6 from "../public/project-snap-6.png";
import { Container, Row, Col } from "react-bootstrap";

const Projects = ({ animateTrigger2 }) => {
  return (
    <div
      id="projects-sec"
      className={`project-sec ${animateTrigger2 ? "animate-about-sec" : ""}`}
    >
      <Container className="container-sec">
        <Row>
          <Col lg={12} md={12} sm={12} xs={12}>
            <h1 className="project-head-txt">Projects</h1>
          </Col>

          <Col lg={12} md={12} sm={12} xs={12}>
            <div className="projects-cards-sec">
              <Row>
                <Col lg={4} md={4} sm={6} xs={12}>
                  <a
                    href="https://pratik1243.github.io/zip-extractor/"
                    target="_blank"
                  >
                    {" "}
                    <div
                      className={`projects-card card-bg1 ${
                        animateTrigger2 ? "anim-project-cards" : ""
                      }`}
                    >
                      <Image
                        src={projectImg1}
                        alt="card-img"
                        objectFit="cover"
                        style={{ height: "110%", width: "100%" }}
                      />
                    </div>{" "}
                  </a>
                </Col>
                <Col lg={4} md={4} sm={6} xs={12}>
                  <a
                    href="https://pratik1243.github.io/react-todo-app/"
                    target="_blank"
                  >
                    {" "}
                    <div
                      className={`projects-card card-bg2 mt2-after-sm ${
                        animateTrigger2 ? "anim-project-cards" : ""
                      }`}
                    >
                      <Image
                        src={projectImg2}
                        alt="card-img"
                        objectFit="cover"
                        style={{ height: "125%", width: "105%" }}
                      />
                    </div>{" "}
                  </a>
                </Col>
                <Col lg={4} md={4} sm={6} xs={12}>
                  <a
                    href="https://pratik1243.github.io/layout.github.io/"
                    target="_blank"
                  >
                    {" "}
                    <div
                      className={`projects-card card-bg3 mt2-after-sm mt-sm-5 mt-lg-0 mt-md-0 ${
                        animateTrigger2 ? "anim-project-cards" : ""
                      }`}
                    >
                      <Image
                        src={projectImg3}
                        alt="card-img"
                        objectFit="cover"
                        style={{ height: "100%", width: "600px" }}
                      />
                    </div>{" "}
                  </a>
                </Col>
                <Col lg={4} md={4} sm={6} xs={12}>
                  <a
                    href="https://pratik1243.github.io/AGT.github.io/"
                    target="_blank"
                  >
                    {" "}
                    <div
                      className={`projects-card card-bg4 mt-5 ${
                        animateTrigger2 ? "anim-project-cards" : ""
                      }`}
                    >
                      <Image
                        src={projectImg4}
                        alt="card-img"
                        objectFit="cover"
                        style={{ height: "100%", width: "600px" }}
                      />
                    </div>{" "}
                  </a>
                </Col>
                <Col lg={4} md={4} sm={6} xs={12}>
                  <a
                    href="https://pratik1243.github.io/heylead.github.io/"
                    target="_blank"
                  >
                    {" "}
                    <div
                      className={`projects-card card-bg5 mt-5 ${
                        animateTrigger2 ? "anim-project-cards" : ""
                      }`}
                    >
                      <Image
                        src={projectImg5}
                        alt="card-img"
                        objectFit="cover"
                        style={{ height: "100%", width: "140%" }}
                      />
                    </div>{" "}
                  </a>
                </Col>
                <Col lg={4} md={4} sm={6} xs={12}>
                  <a
                    href="https://pratik1243.github.io/justicia.github.io/"
                    target="_blank"
                  >
                    {" "}
                    <div
                      className={`projects-card card-bg6 mt-5 ${
                        animateTrigger2 ? "anim-project-cards" : ""
                      }`}
                    >
                      <Image
                        src={projectImg6}
                        alt="card-img"
                        objectFit="cover"
                        style={{ height: "100%", width: "150%" }}
                      />
                    </div>{" "}
                  </a>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Projects;
