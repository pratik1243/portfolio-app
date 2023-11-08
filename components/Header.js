import React from "react";
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

const Header = () => {
  const scrollSection = (e, id) => {
    e.preventDefault();

    let node = document.getElementById(id);

console.log('node', node.offsetTop);

    const scrollOptions = {
      top: node.offsetTop - 80,
      behavior: "smooth", // You can use 'auto' for an instant scroll
    };

    window.scrollTo(scrollOptions);
  };

  return (
    <div className="nav-sec">
      <Container className="container-sec">
        <Row>
          <Col lg={7} md={5} sm={4} xs={5}>
            <div className="logo-sec">
              <h1>P</h1>
            </div>
          </Col>
          <Col lg={5} md={7} sm={8} xs={7}>
            <ul className="menu-items-sec">
              <li>
                <a href="#" onClick={(e) => scrollSection(e, "about-sec")}>
                  About
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => scrollSection(e, "works-sec")}>
                  Work
                </a>
              </li>
              <li>
                <a href="#">Projects</a>
              </li>
              <li>
                <a href="#">Resume</a>
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
