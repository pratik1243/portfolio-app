"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import projectImg1 from "../assets/images/project-snap-1.png";
import projectImg4 from "../assets/images/pac-game-image.png";
import projectImg6 from "../assets/images/project-snap-6.png";
// import projectImg5 from "../assets/images/project-snap-5.png";
// import dmoInternational from "../assets/images/dmo-international.png";
// import pgPortalImg from "../assets/images/pg-portal-img.jpeg";
// import bbpsPortalImg from "../assets/images/bbps-portal-screenshot.png";
// import adPayImg from "../assets/images/ad-pay-screenshot.jpg";
// import aasaanPortalImg from "../assets/images/aasaan-screenshot.png";
import timSheetImg from "../assets/images/time-sheet-screenshot.png";
import businesAssistImg from "../assets/images/business-assist-screenshot.png";
import breatheMattersImg from "../assets/images/breathe-matters-bg.png";
import { Container, Row, Col } from "react-bootstrap";

const Projects = ({ setActiveSection }) => {
  const [trigger2, setTrigger2] = useState(false);
  const [trigger3, setTrigger3] = useState(false);
  // const [trigger4, setTrigger4] = useState(false);
  // const [trigger5, setTrigger5] = useState(false);
  // const [trigger6, setTrigger6] = useState(false);
  // const [trigger7, setTrigger7] = useState(false);
  // const [trigger8, setTrigger8] = useState(false);
  // const [trigger9, setTrigger9] = useState(false);
  const [trigger10, setTrigger10] = useState(false);
  const [animateTrigger2, setAnimateTrigger2] = useState(false);
  const [animateTrigger3, setAnimateTrigger3] = useState(false);
  const [animateTrigger4, setAnimateTrigger4] = useState(false);
  // const [animateTrigger5, setAnimateTrigger5] = useState(false);
  // const [animateTrigger6, setAnimateTrigger6] = useState(false);
  // const [animateTrigger7, setAnimateTrigger7] = useState(false);
  // const [animateTrigger8, setAnimateTrigger8] = useState(false);
  // const [animateTrigger9, setAnimateTrigger9] = useState(false);
  const [animateTrigger10, setAnimateTrigger10] = useState(false);

  const handleScrollEvent1 = () => {
    const element2 = document.getElementById("projects-sec");
    const elementPosition2 = element2?.getBoundingClientRect().top;
    const element4 = document.getElementById("personal-projects-sec");
    const elementPosition4 = element4?.getBoundingClientRect().top;
    const element3 = document.getElementById("contacts-sec");
    const elementPosition3 = element3?.getBoundingClientRect().top;
    // const element5 = document.getElementById("project-detail1");
    // const elementPosition5 = element5?.getBoundingClientRect().top;
    // const element6 = document.getElementById("project-detail2");
    // const elementPosition6 = element6?.getBoundingClientRect().top;
    // const element7 = document.getElementById("project-detail3");
    // const elementPosition7 = element7?.getBoundingClientRect().top;
    // const element8 = document.getElementById("project-detail4");
    // const elementPosition8 = element8?.getBoundingClientRect().top;
    // const element9 = document.getElementById("project-detail5");
    // const elementPosition9 = element9?.getBoundingClientRect().top;
    const element10 = document.getElementById("project-detail6");
    const elementPosition10 = element10?.getBoundingClientRect().top;

    if (window.innerHeight - elementPosition2 > 80) {
      setTrigger2(true);
      setActiveSection(3);
    }

    if (window.innerHeight - elementPosition3 > 40) {
      setActiveSection(5);
    }

    if (window.innerHeight - elementPosition4 > 70) {
      setTrigger3(true);
    }

    // if (window.innerHeight - elementPosition5 > 130) {
    //   setTrigger4(true);
    // }

    // if (window.innerHeight - elementPosition6 > 130) {
    //   setTrigger5(true);
    // }

    // if (window.innerHeight - elementPosition7 > 130) {
    //   setTrigger6(true);
    // }

    // if (window.innerHeight - elementPosition8 > 130) {
    //   setTrigger7(true);
    // }

    // if (window.innerHeight - elementPosition9 > 130) {
    //   setTrigger8(true);
    // }

    // if (window.innerHeight - elementPosition10 > 130) {
    //   setTrigger9(true);
    // }

    if (window.innerHeight - elementPosition10 > 500) {
      setTrigger10(true);
    }
  };

  useEffect(() => {
    if (trigger2) {
      setAnimateTrigger2(true);
    }

    if (typeof window !== "undefined") {
      document.addEventListener("scroll", handleScrollEvent1);
    }

    return () => {
      document.removeEventListener("scroll", handleScrollEvent1);
    };
  }, [trigger2]);

  useEffect(() => {
    if (trigger3) {
      setAnimateTrigger3(true);
    }

    if (typeof window !== "undefined") {
      document.addEventListener("scroll", handleScrollEvent1);
    }

    return () => {
      document.removeEventListener("scroll", handleScrollEvent1);
    };
  }, [trigger3]);

  // useEffect(() => {
  //   if (trigger4) {
  //     setAnimateTrigger4(true);
  //   }

  //   if (typeof window !== "undefined") {
  //     document.addEventListener("scroll", handleScrollEvent1);
  //   }

  //   return () => {
  //     document.removeEventListener("scroll", handleScrollEvent1);
  //   };
  // }, [trigger4]);

  // useEffect(() => {
  //   if (trigger5) {
  //     setAnimateTrigger5(true);
  //   }

  //   if (typeof window !== "undefined") {
  //     document.addEventListener("scroll", handleScrollEvent1);
  //   }

  //   return () => {
  //     document.removeEventListener("scroll", handleScrollEvent1);
  //   };
  // }, [trigger5]);

  // useEffect(() => {
  //   if (trigger6) {
  //     setAnimateTrigger6(true);
  //   }

  //   if (typeof window !== "undefined") {
  //     document.addEventListener("scroll", handleScrollEvent1);
  //   }

  //   return () => {
  //     document.removeEventListener("scroll", handleScrollEvent1);
  //   };
  // }, [trigger6]);

  // useEffect(() => {
  //   if (trigger7) {
  //     setAnimateTrigger7(true);
  //   }

  //   if (typeof window !== "undefined") {
  //     document.addEventListener("scroll", handleScrollEvent1);
  //   }

  //   return () => {
  //     document.removeEventListener("scroll", handleScrollEvent1);
  //   };
  // }, [trigger7]);

  // useEffect(() => {
  //   if (trigger8) {
  //     setAnimateTrigger8(true);
  //   }

  //   if (typeof window !== "undefined") {
  //     document.addEventListener("scroll", handleScrollEvent1);
  //   }

  //   return () => {
  //     document.removeEventListener("scroll", handleScrollEvent1);
  //   };
  // }, [trigger8]);

  // useEffect(() => {
  //   if (trigger9) {
  //     setAnimateTrigger9(true);
  //   }

  //   if (typeof window !== "undefined") {
  //     document.addEventListener("scroll", handleScrollEvent1);
  //   }

  //   return () => {
  //     document.removeEventListener("scroll", handleScrollEvent1);
  //   };
  // }, [trigger9]);

  useEffect(() => {
    if (trigger10) {
      setAnimateTrigger10(true);
    }

    if (typeof window !== "undefined") {
      document.addEventListener("scroll", handleScrollEvent1);
    }

    return () => {
      document.removeEventListener("scroll", handleScrollEvent1);
    };
  }, [trigger10]);

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
                            
                            Payment Gateway Portal (PG 2.0)
                          </h3>
                          <ul className="description-list">
                            <li>
                              PG 2.0 portal acts as an intermediary in
                              electronic financial transactions between admin
                              and merchants
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
          </Col> */}

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
                    href="https://pratik1243.github.io/time-sheet-test-app/"
                    target="_blank"
                  >
                    {" "}
                    <div
                      className={`projects-card card-bg2 mt2-after-sm ${
                        animateTrigger3 ? "anim-project-cards" : ""
                      }`}
                    >
                      <Image
                        src={timSheetImg}
                        alt="card-img"
                        objectFit="cover"
                        style={{ height: "100%", width: "120%" }}
                      />
                    </div>{" "}
                  </a>
                </Col>
                <Col lg={4} md={4} sm={6} xs={12}>
                  <a
                    href="https://pratik1243.github.io/business-landing-page/"
                    target="_blank"
                  >
                    {" "}
                    <div
                      className={`projects-card card-bg3 mt2-after-sm mt-sm-5 mt-lg-0 mt-md-0 ${
                        animateTrigger3 ? "anim-project-cards" : ""
                      }`}
                    >
                      <Image
                        src={businesAssistImg}
                        alt="card-img"
                        objectFit="cover"
                        style={{ height: "100%", width: "105%" }}
                      />
                    </div>{" "}
                  </a>
                </Col>
                <Col lg={4} md={4} sm={6} xs={12}>
                  <a
                    href="https://pratik1243.github.io/breate-matters-website/"
                    target="_blank"
                  >
                    {" "}
                    <div
                      className={`projects-card card-bg4 mt-5 ${
                        animateTrigger3 ? "anim-project-cards" : ""
                      }`}
                    >
                      <Image
                        src={breatheMattersImg}
                        alt="card-img"
                        objectFit="cover"
                        style={{ height: "100%", width: "115%" }}
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
