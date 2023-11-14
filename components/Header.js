import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

const Header = ({ navBg, openSidebar, scrollSection, activeSection }) => {
  return (
    <div className={`nav-sec ${navBg ? "add-nav-bg" : ""}`}>
      <Container className="container-sec">
        <Row>
          <Col lg={7} md={5} sm={3} xs={5}>
            <div className="logo-sec">
              <h1
                onClick={() => {
                  window.location.reload();
                }}
              >
                P
              </h1>
            </div>
          </Col>
          <Col lg={5} md={7} sm={9} xs={7}>
            <ul className="menu-items-sec">
              <li>
                <a href="#" className={`${activeSection == 1 ? 'active-section' :''}`} onClick={(e) => scrollSection(e, "about-sec")}>
                  About
                </a>
              </li>
              <li>
                <a href="#" className={`${activeSection == 2 ? 'active-section' :''}`} onClick={(e) => scrollSection(e, "works-sec")}>
                  Work
                </a>
              </li>
              <li>
                <a href="#" className={`${activeSection == 3 ? 'active-section' :''}`} onClick={(e) => scrollSection(e, "projects-sec")}>
                  Projects
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => scrollSection(e, "projects-sec")}>
                  Resume
                </a>
              </li>
              <li>
                <a href="#" className={`${activeSection == 5 ? 'active-section' :''}`} onClick={(e) => scrollSection(e, "contacts-sec")}>Contact</a>
              </li>
            </ul>

            <div className="menu-icon-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                fill="currentColor"
                className="bi bi-list"
                viewBox="0 0 16 16"
                onClick={openSidebar}
              >
                <path
                  fill-rule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                />
              </svg>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header;
