import React from "react";
import pdfFile from '../public/assets/Pratik-Thakur-CV.pdf';

const Sidebar = ({ open, closeSidebar, scrollSection, activeSection }) => {
  return (
    <>
      <div className={`side-bar ${open ? "side-bar-open" : ""}`}>
        <div
          className={`menu-close-sec ${
            open ? "fade-show-menu" : "fade-hide-menu"
          }`}
        >
          <h1>P</h1>

          <div className="menu-close-btn" onClick={closeSidebar}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="31"
              height="31"
              fill="currentColor"
              class="bi bi-x"
              viewBox="0 0 16 16"
            >
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
          </div>
        </div>
        <ul
          className={`responsive-menu-list ${
            open ? "fade-show-menu" : "fade-hide-menu"
          }`}
        >
          <li className="menu-list-btn">
            <a
              href="#"
              className={`${activeSection == 1 ? "active-section" : ""}`}
              onClick={(e) => {
                scrollSection(e, "about-sec");
                closeSidebar();
              }}
            >
              About
            </a>
          </li>
          <li className="menu-list-btn">
            <a
              href="#"
              className={`${activeSection == 2 ? "active-section" : ""}`}
              onClick={(e) => {
                scrollSection(e, "works-sec");
                closeSidebar();
              }}
            >
              Work
            </a>
          </li>
          <li className="menu-list-btn">
            {" "}
            <a
              href="#"
              className={`${activeSection == 3 ? "active-section" : ""}`}
              onClick={(e) => {
                scrollSection(e, "projects-sec");
                closeSidebar();
              }}
            >
              Projects
            </a>
          </li>
          {/* <li className="menu-list-btn">
            <a
              href="#"
              onClick={(e) => {
                scrollSection(e, "contacts-sec");
                closeSidebar();
              }}
            >
              Resume
            </a>
          </li> */}
          <li className="menu-list-btn">
            <a
              href="#"
              className={`${activeSection == 5 ? "active-section" : ""}`}
              onClick={(e) => {
                scrollSection(e, "contacts-sec");
                closeSidebar();
              }}
            >
              Contact
            </a>
          </li>
          <li className="menu-list-btn resume-dowmload-btn">
            <a
              href={pdfFile}
              download
          >
              Resume
            </a>
          </li>
        </ul>
      </div>
      <div onClick={closeSidebar} className={open ? "side-bar-bg" : ""}></div>
    </>
  );
};

export default Sidebar;
