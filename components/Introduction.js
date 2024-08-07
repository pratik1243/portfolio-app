import React from "react";
import Image from "next/image";
import portfolioImage from "../assets/images/portfolio_img.png";
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
              </div>
            </div>
          </Col>
          <Col lg={5}>
            <div className="portfolio-image-sec">
              <div className="portfolio-user-img">
                <Image
                  src={portfolioImage}
                  priority={true}
                  alt="portfolio-logo"
                  fill
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
