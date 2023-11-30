import React from "react";
import { useState } from "react";
import Image from "next/image";
import projectImg1 from "../public/project-snap-1.png";
import projectImg2 from "../public/project-snap-2.png";
import projectImg3 from "../public/project-snap-3.png";
import projectImg4 from "../public/project-snap-4.png";
import projectImg5 from "../public/project-snap-5.png";
import projectImg6 from "../public/project-snap-6.png";
import ebookImg from "../public/ebook-img.png";
import platformSafexImg from "../public/platform-safexpay-img.png";
import neoPortalImg from "../public/neo-bank-portal.png";
import apixSafexImg from "../public/apix-img.png";
import bbpsPortalImg from "../public/bbps-portal-screenshot.jpg";
import formBuilderImg from "../public/form-builder-page-screeenshot.jpg";
import adPayImg from "../public/ad-pay-screenshot.jpg";
import { Container, Row, Col } from "react-bootstrap";

const Projects = ({ animateTrigger2, animateTrigger3, animateTrigger4, animateTrigger5, animateTrigger6 }) => {
 
  return (
    <div
      id="projects-sec"
      className={`project-sec ${animateTrigger2 ? "animate-about-sec" : ""}`}
    >
      <Container className="container-sec">
        <Row>
          <Col lg={12} md={12} sm={12} xs={12}>
            <h1 className="project-head-txt">
              Projects
            </h1>
          </Col>

          <Col lg={12} md={12} sm={12} xs={12}>
            <div className="projects-cards-sec">
              {/* <h4>live Projects</h4> */}
              <Row>
                <Col lg={4} md={4} sm={6} xs={12}>
                  <a href="https://safexpay.com/apix" target="_blank">
                    {" "}
                    <div
                      className={`projects-card card-bg7 ${
                        animateTrigger2 ? "anim-project-cards" : ""
                      }`}
                    >
                      <Image
                        src={apixSafexImg}
                        alt="card-img"
                        objectFit="cover"
                        style={{ height: "100%", width: "120%" }}
                      />
                    </div>{" "}
                  </a>
                </Col>
                <Col lg={4} md={4} sm={6} xs={12}>
                  <a
                    href="https://www.aasaancheckout.com/ebook/"
                    target="_blank"
                  >
                    {" "}
                    <div
                      className={`projects-card card-bg8 mt2-after-sm ${
                        animateTrigger2 ? "anim-project-cards" : ""
                      }`}
                    >
                      <Image
                        src={ebookImg}
                        alt="card-img"
                        objectFit="cover"
                        style={{ height: "100%", width: "120%" }}
                      />
                    </div>{" "}
                  </a>
                </Col>
                <Col lg={4} md={4} sm={6} xs={12}>
                  <a
                    href="https://safexpay.com/get-a-payment-platform/"
                    target="_blank"
                  >
                    {" "}
                    <div
                      className={`projects-card card-bg9 mt2-after-sm mt2-after-md ${
                        animateTrigger2 ? "anim-project-cards" : ""
                      }`}
                    >
                      <Image
                        src={platformSafexImg}
                        alt="card-img"
                        objectFit="cover"
                        style={{ height: "100%", width: "120%" }}
                      />
                    </div>{" "}
                  </a>
                </Col>
                {/* <Col lg={4} md={4} sm={6} xs={12}>
                  <a
                    href="https://safexpay.com/get-a-payment-platform/"
                    target="_blank"
                  >
                    {" "}
                    <div
                      className={`projects-card card-bg10 mt-5 ${
                        animateTrigger2 ? "anim-project-cards" : ""
                      }`}
                    >
                      <Image
                        src={neoPortalImg}
                        alt="card-img"
                        objectFit="cover"
                        style={{ height: "100%", width: "140%" }}
                      />
                    </div>{" "}
                  </a>
                </Col> */}
              </Row>
            </div>
          </Col>

          <Col lg={12} md={12} sm={12} xs={12}>
            <div className="project-details-sec">
              <Row>
                <Col lg={12} md={12} sm={12} xs={12}>
                  <div className={`project-details-card ${animateTrigger4 ? "anim-project-cards" : ""}`} id="project-detail1">
                    <Row>
                      <Col lg={4} md={4} sm={9} xs={12}>
                        <div className="images-sec">
                          <Image
                            src={bbpsPortalImg}
                            className="project-detail-img"
                            alt="card-img"
                            objectFit="cover"
                            style={{ height: "100%", width: "100%" }}
                          />
                        </div>
                      </Col>
                      <Col lg={8} md={8} sm={12} xs={12}>
                        <div className="project-description-sec">
                          <h3 className={`heade-txt ${animateTrigger4 ? "heade-txt-anim" : ""}`}>
                            Bharat Bill Payment System (BBPS)
                          </h3>
                          <ul className="description-list">
                            <li>
                              BBPS is an bill payment system offering
                              interoperable and accessible bill payment service
                              to customers
                            </li>
                            <li>
                              Researched on structure and working of components
                              in tim creative template
                            </li>
                            <li>Developed pages for COU and BOU portals</li>
                            <li>
                              Worked on customization of template and its UI
                              components according to design and product
                              requirement
                            </li>
                            <li>
                              Worked with back-end developers to resolve the
                              issues related to front-end and data fetching
                            </li>
                          </ul>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Col>
                <Col lg={12} md={12} sm={12} xs={12}>
                  <div className={`project-details-card ${animateTrigger5 ? "anim-project-cards" : ""}`} id="project-detail2">
                    <Row>
                      <Col lg={4} md={4} sm={9} xs={12}>
                        <div className="images-sec">
                          <Image
                            src={adPayImg}
                            className="project-detail-img"
                            alt="card-img"
                            objectFit="cover"
                            style={{ height: "100%", width: "100%" }}
                          />
                        </div>
                      </Col>
                      <Col lg={8} md={8} sm={12} xs={12}>
                        <div className="project-description-sec">
                          <h3 className={`heade-txt ${animateTrigger5 ? "heade-txt-anim" : ""}`}>AD Pay Checkout</h3>
                          <ul className="description-list">
                            <li>
                              AD Pay is checkout page which allows international
                              merchants to do payment through different methods
                            </li>
                            <li>
                              Worked on front-end validation part of checkout
                              page
                            </li>
                            <li>
                              Updation and additional changes as per product
                              manager requirement
                            </li>
                            <li>
                              Worked on language switch feature in checkout page
                            </li>
                            <li>
                              Worked with back-end developers to resolve the
                              issues related to UI and code structure
                            </li>
                          </ul>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Col>
                <Col lg={12} md={12} sm={12} xs={12}>
                  <div className={`project-details-card ${animateTrigger6 ? "anim-project-cards" : ""}`} id="project-detail3">
                    <Row>
                      <Col lg={4} md={4} sm={9} xs={12}>
                        <div className="images-sec">
                          <Image
                            src={formBuilderImg}
                            className="project-detail-img"
                            alt="card-img"
                            objectFit="cover"
                            style={{ height: "100%", width: "100%" }}
                          />
                        </div>
                      </Col>
                      <Col lg={8} md={8} sm={12} xs={12}>
                        <div className="project-description-sec">
                          <h3 className={`heade-txt ${animateTrigger6 ? "heade-txt-anim" : ""}`}>Form Builder Page</h3>
                          <ul className="description-list">
                            <li>
                              Form builder page is used by merchants to create
                              and customize forms
                            </li>
                            <li>
                              Worked on web and responsive design of the page
                            </li>
                            <li>Added Partial payment section</li>
                            <li></li>
                          </ul>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>

          <Col lg={12} md={12} sm={12} xs={12}>
            <div className="projects-cards-sec" id="personal-projects-sec">
              <h4 className={` ${animateTrigger3 ? "anim-project-cards" : ""}`}>
                Personal Projects
              </h4>
              <Row>
                <Col lg={4} md={4} sm={6} xs={12}>
                  <a
                    href="https://pratik1243.github.io/AGT.github.io/"
                    target="_blank"
                  >
                    {" "}
                    <div
                      className={`projects-card card-bg1 ${
                        animateTrigger3 ? "anim-project-cards" : ""
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
                    href="https://pratik1243.github.io/justicia.github.io/"
                    target="_blank"
                  >
                    {" "}
                    <div
                      className={`projects-card card-bg2 mt2-after-sm ${
                        animateTrigger3 ? "anim-project-cards" : ""
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
                <Col lg={4} md={4} sm={6} xs={12}>
                  <a
                    href="https://pratik1243.github.io/react-todo-app/"
                    target="_blank"
                  >
                    {" "}
                    <div
                      className={`projects-card card-bg3 mt2-after-sm mt-sm-5 mt-lg-0 mt-md-0 ${
                        animateTrigger3 ? "anim-project-cards" : ""
                      }`}
                    >
                      <Image
                        src={projectImg2}
                        alt="card-img"
                        objectFit="cover"
                        style={{ height: "150%", width: "105%" }}
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
                      className={`projects-card card-bg4 mt-5 ${
                        animateTrigger3 ? "anim-project-cards" : ""
                      }`}
                    >
                      <Image
                        src={projectImg5}
                        alt="card-img"
                        objectFit="cover"
                        style={{ height: "100%", width: "130%" }}
                      />
                    </div>{" "}
                  </a>
                </Col>
                <Col lg={4} md={4} sm={6} xs={12}>
                  <a
                    href="https://pratik1243.github.io/zip-extractor/"
                    target="_blank"
                  >
                    {" "}
                    <div
                      className={`projects-card card-bg5 mt-5 ${
                        animateTrigger3 ? "anim-project-cards" : ""
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
                    href="https://pratik1243.github.io/layout.github.io/"
                    target="_blank"
                  >
                    {" "}
                    <div
                      className={`projects-card card-bg6 mt-5 ${
                        animateTrigger3 ? "anim-project-cards" : ""
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
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
      <div className={`${animateTrigger4 ? 'gradient-bg-4' : ""}`}></div>
    </div>
  );
};

export default Projects;
