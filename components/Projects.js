import React from "react";
import Image from "next/image";
import projectImg1 from "../assets/images/project-snap-1.png";
import projectImg2 from "../assets/images/project-snap-2.png";
import projectImg4 from "../assets/images/pac-game-image.png";
import projectImg5 from "../assets/images/project-snap-5.png";
import projectImg6 from "../assets/images/project-snap-6.png";
//import projectImg3 from "../assets/images/project-snap-3.png";
// import ebookImg from "../assets/images/ebook-img.png";
// import partnerProgramImg from "../assets/images/partner-program-screenshot.png";
// import consolidatedPageImg from "../assets/images/consolidate-page-screenshot.png";
// import consolidatedPageImg2 from "../assets/images/consolidate-page2-screenshot.png";
// import formBuilderImg from "../assets/images/form-builder-page-screeenshot.jpg";
// import apixSafexImg from "../assets/images/apix-img.png";
// import neoBankPortalImg from "../assets/images/neo-portal-screen.jpg";
import platformSafexImg from "../assets/images/platform-safexpay-img.png";
import dmoInternational from "../assets/images/dmo-international.png";
import pgPortalImg from "../assets/images/pg-portal-img.jpeg";
import bbpsPortalImg from "../assets/images/bbps-portal-screenshot.png";
import adPayImg from "../assets/images/ad-pay-screenshot.jpg";
import aasaanPortalImg from "../assets/images/aasaan-screenshot.png";
import { Container, Row, Col } from "react-bootstrap";

const Projects = ({
  animateTrigger2,
  animateTrigger3,
  animateTrigger4,
  animateTrigger5,
  animateTrigger6,
  animateTrigger7,
  animateTrigger8,
  animateTrigger9,
  animateTrigger10,
}) => {
  return (
    <div
      id="projects-sec"
      className={`project-sec ${animateTrigger2 ? "animate-project-sec" : ""}`}
    >
      <Container className="container-sec">
        <Row>
          <Col lg={12} md={12} sm={12} xs={12}>
            <h1 className="project-head-txt">Projects</h1>
          </Col>

          {/* <Col lg={12} md={12} sm={12} xs={12}>
            <div className="projects-cards-sec">
              <h4>live Projects</h4>
              <Row>
                <Col lg={4} md={4} sm={6} xs={12}>
                  <a
                    href="https://www.aasaancheckout.com/ebook/"
                    target="_blank"
                  >
                    {" "}
                    <div
                      className={`projects-card card-bg1 ${
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
                  <a href="https://safexpay.com/apix" target="_blank">
                    {" "}
                    <div
                      className={`projects-card card-bg2 mt2-after-sm ${
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
                    href="https://aasaancheckout.com/consolidated-dashboard/"
                    target="_blank"
                  >
                    {" "}
                    <div
                      className={`projects-card card-bg1 ${
                        animateTrigger2 ? "anim-project-cards" : ""
                      }`}
                    >
                      <Image
                        src={consolidatedPageImg}
                        alt="card-img"
                        objectFit="cover"
                        style={{
                          height: "100%",
                          width: "130%",
                          marginLeft: "-55px",
                        }}
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
                      className={`projects-card card-bg2 mt2-after-sm ${
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

                <Col lg={4} md={4} sm={6} xs={12}>
                  <a
                    href="https://aasaancheckout.com/products/consolidated-dashboard"
                    target="_blank"
                  >
                    {" "}
                    <div
                      className={`projects-card card-bg3 mt2-after-sm mt2-after-md ${
                        animateTrigger2 ? "anim-project-cards" : ""
                      }`}
                    >
                      <Image
                        src={consolidatedPageImg2}
                        alt="card-img"
                        objectFit="cover"
                        style={{ height: "100%", width: "130%" }}
                      />
                    </div>{" "}
                  </a>
                </Col>

                <Col lg={4} md={4} sm={6} xs={12}>
                  <a
                    href="https://aasaancheckout.com/partner-program/"
                    target="_blank"
                  >
                    {" "}
                    <div
                      className={`projects-card card-bg5 mt-5 ${
                        animateTrigger2 ? "anim-project-cards" : ""
                      }`}
                    >
                      <Image
                        src={partnerProgramImg}
                        alt="card-img"
                        objectFit="cover"
                        style={{ height: "100%", width: "120%" }}
                      />
                    </div>{" "}
                  </a>
                </Col>
              </Row>
            </div>
          </Col> */}

          <Col lg={12} md={12} sm={12} xs={12}>
            <div className="project-details-sec">
              <Row>
                <Col lg={12} md={12} sm={12} xs={12}>
                  <div
                    className={`project-details-card card-bg1 ${
                      animateTrigger4 ? "anim-project-cards" : ""
                    }`}
                    id="project-detail1"
                  >
                    <Row>
                      <Col lg={4} md={5} sm={12} xs={12}>
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
                      <Col lg={8} md={7} sm={12} xs={12}>
                        <div className="project-description-sec">
                          <h3
                            className={`heade-txt ${
                              animateTrigger4 ? "heade-txt-anim" : ""
                            }`}
                          >
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
                            <li>
                              Worked on react, next js and material UI
                              frameworks
                            </li>
                            <li>Developed pages for COU and BOU portals</li>
                            <li>
                              Worked on customization of template and its UI
                              components according to design and product
                              requirement
                            </li>
                          </ul>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Col>
                <Col lg={12} md={12} sm={12} xs={12}>
                  <div
                    className={`project-details-card ${
                      animateTrigger5 ? "anim-project-cards" : ""
                    }`}
                    id="project-detail2"
                  >
                    <Row>
                      <Col lg={4} md={5} sm={12} xs={12}>
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
                      <Col lg={8} md={7} sm={12} xs={12}>
                        <div className="project-description-sec">
                          <h3
                            className={`heade-txt ${
                              animateTrigger5 ? "heade-txt-anim" : ""
                            }`}
                          >
                            AD Pay Checkout
                          </h3>
                          <ul className="description-list">
                            <li>
                              AD Pay is checkout page which allows international
                              merchants to do payment through different methods
                            </li>
                            <li>
                              Developed structure using languages such HTML,
                              CSS, Bootstrap and jquery
                            </li>
                            <li>
                              Worked on front-end validation part of checkout
                              page
                            </li>
                            <li>
                              Integrated language switch feature in checkout
                              page
                            </li>
                            <li>
                              Worked with back-end developers to resolve the
                              issues related to UI and code structure on jsp
                              pages
                            </li>
                          </ul>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Col>

                <Col lg={12} md={12} sm={12} xs={12}>
                  <div
                    className={`project-details-card ${
                      animateTrigger7 ? "anim-project-cards" : ""
                    }`}
                    id="project-detail4"
                  >
                    <Row>
                      <Col lg={4} md={5} sm={12} xs={12}>
                        <div className="images-sec">
                          <Image
                            src={dmoInternational}
                            className="project-detail-img"
                            alt="card-img"
                            objectFit="cover"
                            style={{ height: "100%", width: "100%" }}
                          />
                        </div>
                      </Col>
                      <Col lg={8} md={7} sm={12} xs={12}>
                        <div className="project-description-sec">
                          <h3
                            className={`heade-txt ${
                              animateTrigger7 ? "heade-txt-anim" : ""
                            }`}
                          >
                            Digital Merchant Onboarding (DMO)
                          </h3>
                          <ul className="description-list">
                            <li>
                              DMO is merchant onboarding system in which users
                              goes through KYC process in portal
                            </li>
                            <li>
                              Developed structure using languages such HTML,
                              SASS, Bootstrap, Jquery and bs-dropzone
                            </li>
                            <li>
                              Worked on web and mobile responsive design of the
                              pages
                            </li>
                            <li>
                              Integrated front-end validation part of kyc forms
                            </li>
                            <li>
                              Worked with back-end developers to resolve the
                              issues related to UI in CSS and JS
                            </li>
                          </ul>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Col>
                {/* <Col lg={12} md={12} sm={12} xs={12}>
                  <div
                    className={`project-details-card ${
                      animateTrigger8 ? "anim-project-cards" : ""
                    }`}
                    id="project-detail5"
                  >
                    <Row>
                      <Col lg={4} md={5} sm={12} xs={12}>
                        <div className="images-sec">
                          <Image
                            src={neoBankPortalImg}
                            className="project-detail-img"
                            alt="card-img"
                            objectFit="cover"
                            style={{ height: "100%", width: "100%" }}
                          />
                        </div>
                      </Col>
                      <Col lg={8} md={7} sm={12} xs={12}>
                        <div className="project-description-sec">
                          <h3
                            className={`heade-txt ${
                              animateTrigger8 ? "heade-txt-anim" : ""
                            }`}
                          >
                            Neo Banking Portal
                          </h3>
                          <ul className="description-list">
                            <li>
                              Neo banking portal help businesses to automate the
                              payout process, reducing the time and effort
                              required to transfer funds to multiple
                              beneficiaries{" "}
                            </li>
                            <li>Redesigned and restructured new portal UI</li>
                            <li>
                              Developed additional modules for admin and
                              merchant portals
                            </li>
                            <li>
                              Worked on next js, material UI, react hook form,
                              formik and yup validation
                            </li>
                          </ul>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Col> */}
                <Col lg={12} md={12} sm={12} xs={12}>
                  <div
                    className={`project-details-card ${
                      animateTrigger6 ? "anim-project-cards" : ""
                    }`}
                    id="project-detail3"
                  >
                    <Row>
                      <Col lg={4} md={5} sm={12} xs={12}>
                        <div className="images-sec">
                          <Image
                            src={pgPortalImg}
                            className="project-detail-img"
                            alt="card-img"
                            objectFit="cover"
                            style={{ height: "100%", width: "100%" }}
                          />
                        </div>
                      </Col>
                      <Col lg={8} md={7} sm={12} xs={12}>
                        <div className="project-description-sec">
                          <h3
                            className={`heade-txt ${
                              animateTrigger6 ? "heade-txt-anim" : ""
                            }`}
                          >
                            {/* Form Builder Page */}
                            Payment Gateway Portal (PG 2.0)
                          </h3>
                          <ul className="description-list">
                            <li>
                              PG 2.0 portal acts as an intermediary in
                              electronic financial transactions between admin and merchants
                            </li>
                            <li>
                              Developed front end for modules such as
                              e-verification, e-invoice, kyc hub and payment
                              page customization
                            </li>
                            <li>
                              Worked on API integration part of modules in
                              portal
                            </li>
                            <li>
                              Resolved issues related to front end UI and
                              rectification across different modules in portal
                            </li>

                            {/* <li>
                              Worked with testing and back end team to resolve
                              issues to product front end flow
                            </li> */}
                            <li>
                              Developed emailers for admin, merchant, reseller
                              and aggregator portal
                            </li>
                          </ul>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Col>
                <Col lg={12} md={12} sm={12} xs={12}>
                  <div
                    className={`project-details-card ${
                      animateTrigger9 ? "anim-project-cards" : ""
                    }`}
                    id="project-detail6"
                  >
                    <Row>
                      <Col lg={4} md={5} sm={12} xs={12}>
                        <div className="images-sec">
                          <Image
                            src={aasaanPortalImg}
                            className="project-detail-img"
                            alt="card-img"
                            objectFit="cover"
                            style={{ height: "100%", width: "100%" }}
                          />
                        </div>
                      </Col>
                      <Col lg={8} md={7} sm={12} xs={12}>
                        <div className="project-description-sec">
                          <h3
                            className={`heade-txt ${
                              animateTrigger9 ? "heade-txt-anim" : ""
                            }`}
                          >
                            Aassan Portal
                          </h3>
                          <ul className="description-list">
                            <li>
                              Aasaan is build to improve the shopping experience
                              and increase conversions on a brand's website
                            </li>
                            <li>
                              Worked on react js, react bootstrap and developed
                              pages for merchant portal
                            </li>
                            <li>
                              Developed landing pages and emailers for merchant
                              portal
                            </li>
                            <li></li>
                            <li>
                              Developed checkout customization module in which
                              merchants can customize brand color and theme of
                              aasaan checkout page integrated in their websites
                            </li>
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
                    href="https://pratik1243.github.io/justicia-website/"
                    target="_blank"
                  >
                    {" "}
                    <div
                      className={`projects-card card-bg1 ${
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
                    href="https://safexpay.com/get-a-payment-platform/"
                    target="_blank"
                  >
                    {" "}
                    <div
                      className={`projects-card card-bg2 mt2-after-sm ${
                        animateTrigger3 ? "anim-project-cards" : ""
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
                    href="https://pratik1243.github.io/heylead-web-app/"
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
                    href="https://pratik1243.github.io/pacman-game/"
                    target="_blank"
                  >
                    {" "}
                    <div
                      className={`projects-card card-bg6 mt-5 ${
                        animateTrigger3 ? "anim-project-cards" : ""
                      }`}
                    >
                      <Image
                        src={projectImg4}
                        alt="card-img"
                        objectFit="cover"
                        style={{ height: "100%", width: "100%" }}
                      />
                    </div>{" "}
                  </a>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
      <div className={`${animateTrigger4 ? "gradient-bg-4" : ""}`}></div>
      <div className={`${animateTrigger10 ? "gradient-bg-5" : ""}`}></div>
    </div>
  );
};

export default Projects;
