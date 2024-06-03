import React from "react";
import Image from "next/image";
import portfolioImage from "../public/assets/images/portfolio_img.png";
// import htmlLogo from "../public/assets/images/html5-logo.png";
// import JsLogo from "../public/assets/images/javascript-logo.svg";
// import reactLogo from "../public/assets/images/react-logo.png";
// import cssLogo from "../public/assets/images/css-logo.png";
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
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
              </div>

              {/* <div className="portfolio-skills-logo _1">
                <Image src={htmlLogo} height={26} width={24} alt="img" />
              </div>

              <div className="portfolio-skills-logo _2">
                <Image src={cssLogo} height={24} width={23} alt="img" />
              </div>

              <div className="portfolio-skills-logo _3">
                <Image src={JsLogo} height={24} width={24} alt="img" />
              </div>

              <div className="portfolio-skills-logo _4">
                <Image src={reactLogo} height={23} width={23} alt="img" />
              </div> */}
            
          </Col>
        </Row>
        <div className="gradient-bg-1"></div>
        <div className="gradient-bg-2"></div>
      </Container>
    </div>
  );
};

export default Introduction;
