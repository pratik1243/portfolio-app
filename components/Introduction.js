import React from "react";
import Image from "next/image";
// import portfolioImage from "../public/portfolio_img.jpg";
import portfolioImage from "../public/portfolio-img-sec-2.png";
import { Container, Row, Col } from "react-bootstrap";

const Introduction = () => {
  return (
    <div id="intro-sec" className="introduction-sec">
      <Container className="container-sec">
        <Row>
          <Col lg={7}>
            <div className="intro-left-sec">
              <div className="intro-inner-sec">
                <h1 className="head-txt1">I’m Pratik Thakur</h1>
                <h1 className="head-txt2">Front End Web Developer</h1>
                <p className="para-txt">
                  Skilled in developing highly responsive website with elegant
                  and efficient code
                </p>
                <button className="cv-download-btn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-download"
                    viewBox="0 0 16 16"
                    >
                    <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                    <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                  </svg>{" "}
                    Download CV


                    <span className="btn-gradient"></span>
                </button>
              </div>
            </div>
          </Col>
          <Col lg={5}>
            <div className="portfolio-image-sec">
              {/* <div className="portfolio-user-img"></div> */}
              <div className="portfolio-user-img">
                <Image
                  src={portfolioImage}
                  alt="portfolio-logo"
                  layout="fill"
                  objectFit="cover"
                  quality={100}
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
            </div>
          </Col>
        </Row>
        <div className="gradient-bg-1"></div>
        <div className="gradient-bg-2"></div>
      </Container>
    </div>
  );
};

export default Introduction;
