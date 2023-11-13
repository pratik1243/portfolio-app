"use client";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Introduction from "../../components/Introduction";
import About from "../../components/About";
import Work from "../../components/Work";
import Sidebar from "../../components/Sidebar";
import Projects from "../../components/Projects";
import Resume from "../../components/Resume";

export default function Home() {
  const [loader, setLoader] = useState(true);
  const [trigger, setTrigger] = useState(false);
  const [trigger1, setTrigger1] = useState(false);
  const [trigger2, setTrigger2] = useState(false);
  const [navBg, setNavBg] = useState(false);
  const [animateTrigger, setAnimateTrigger] = useState(false);
  const [animateTrigger1, setAnimateTrigger1] = useState(false);
  const [animateTrigger2, setAnimateTrigger2] = useState(false);
  const [open, setOpen] = useState(false);

  const handleScrollEvent1 = () => {
    const element = document.getElementById("about-sec");
    const elementPosition = element.getBoundingClientRect().top;
    const element1 = document.getElementById("works-sec");
    const elementPosition1 = element1.getBoundingClientRect().top;
    const element2 = document.getElementById("projects-sec");
    const elementPosition2 = element2.getBoundingClientRect().top;

    if (window.innerHeight - elementPosition > 40) {
      setTrigger(true);
    }

    if (window.innerHeight - elementPosition1 > 80) {
      setTrigger1(true);
    }

    if (window.innerHeight - elementPosition2 > 80) {
      setTrigger2(true);
    }
  };

  useEffect(() => {
    if (trigger) {
      setAnimateTrigger(true);
    }

    if (trigger1) {
      setAnimateTrigger1(true);
    }

    if (trigger2) {
      setAnimateTrigger2(true);
    }

    document.addEventListener("scroll", handleScrollEvent1);

    return () => {
      document.removeEventListener("scroll", handleScrollEvent1);
    };
  }, [trigger, trigger1, trigger2]);

  const handleScrollNav = () => {
    if (window.pageYOffset > 70) {
      setNavBg(true);
    } else {
      setNavBg(false);
    }
  };

  const resetOnResize = () => {
    if (window.innerWidth > 576) {
      setOpen(false);
      document.body.style.overflow = "auto";
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 2000);

    document.addEventListener("scroll", handleScrollNav);
    window.addEventListener("resize", resetOnResize);

    return () => {
      document.removeEventListener("scroll", handleScrollNav);
      window.removeEventListener("resize", resetOnResize);
    };
  }, []);

  const closeSidebar = () => {
    setOpen(false);
    document.body.style.overflow = "auto";
  };

  const openSidebar = () => {
    setOpen(!open);
    document.body.style.overflow = "hidden";
  };

  const scrollSection = (e, id) => {
    e.preventDefault();

    let node = document.getElementById(id);

    const scrollOptions = {
      top: node.offsetTop - 100,
      behavior: "smooth",
    };

    window.scrollTo(scrollOptions);
  };

  return (
    <>
      {loader ? (
        <div className="loader-sec">
          <div className="loader-inner-sec">
            <h1 className="loader-txt">P</h1>

            <svg height="200" width="200" className="loader-icon">
              <circle
                class="circle"
                cx="100"
                cy="100"
                r="95"
                stroke="#0093ff"
                stroke-width="10"
                fill-opacity="0"
              />
            </svg>
          </div>
        </div>
      ) : (
        <div>
          <div className="main-sec">
            <Header
              navBg={navBg}
              openSidebar={openSidebar}
              scrollSection={scrollSection}
            />
            <Sidebar
              open={open}
              closeSidebar={closeSidebar}
              scrollSection={scrollSection}
            />
            <Introduction />
            <About animateTrigger={animateTrigger} />
            <Work animateTrigger1={animateTrigger1} />
            <Projects animateTrigger2={animateTrigger2} />
            <Resume />
          </div>
        </div>
      )}
    </>
  );
}
