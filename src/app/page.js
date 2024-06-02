"use client";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Introduction from "../../components/Introduction";
import About from "../../components/About";
import Work from "../../components/Work";
import Sidebar from "../../components/Sidebar";
import Projects from "../../components/Projects";
import Contact from "../../components/Contact";

export default function Home() {

  let themeType = window.matchMedia?.("(prefers-color-scheme: light)").matches ? true : false;
  const [loader, setLoader] = useState(true);
  const [navBg, setNavBg] = useState(false);
  const [open, setOpen] = useState(themeType);
  const [activeSection, setActiveSection] = useState(0);
  const [theme, setTheme] = useState(true);
  const [trigger, setTrigger] = useState(false);
  const [trigger1, setTrigger1] = useState(false);
  const [trigger2, setTrigger2] = useState(false);
  const [trigger3, setTrigger3] = useState(false);
  const [trigger4, setTrigger4] = useState(false);
  const [trigger5, setTrigger5] = useState(false);
  const [trigger6, setTrigger6] = useState(false);
  const [trigger7, setTrigger7] = useState(false);
  const [trigger8, setTrigger8] = useState(false);
  const [trigger9, setTrigger9] = useState(false);
  const [animateTrigger, setAnimateTrigger] = useState(false);
  const [animateTrigger1, setAnimateTrigger1] = useState(false);
  const [animateTrigger2, setAnimateTrigger2] = useState(false);
  const [animateTrigger3, setAnimateTrigger3] = useState(false);
  const [animateTrigger4, setAnimateTrigger4] = useState(false);
  const [animateTrigger5, setAnimateTrigger5] = useState(false);
  const [animateTrigger6, setAnimateTrigger6] = useState(false);
  const [animateTrigger7, setAnimateTrigger7] = useState(false);
  const [animateTrigger8, setAnimateTrigger8] = useState(false);
  const [animateTrigger9, setAnimateTrigger9] = useState(false);

  const handleScrollEvent1 = () => {
    const element = document.getElementById("about-sec");
    const elementPosition = element?.getBoundingClientRect().top;
    const element1 = document.getElementById("works-sec");
    const elementPosition1 = element1?.getBoundingClientRect().top;
    const element2 = document.getElementById("projects-sec");
    const elementPosition2 = element2?.getBoundingClientRect().top;
    const element4 = document.getElementById("personal-projects-sec");
    const elementPosition4 = element4?.getBoundingClientRect().top;
    const element3 = document.getElementById("contacts-sec");
    const elementPosition3 = element3?.getBoundingClientRect().top;
    const element5 = document.getElementById("project-detail1");
    const elementPosition5 = element5?.getBoundingClientRect().top;
    const element6 = document.getElementById("project-detail2");
    const elementPosition6 = element6?.getBoundingClientRect().top;
    const element7 = document.getElementById("project-detail3");
    const elementPosition7 = element7?.getBoundingClientRect().top;
    const element8 = document.getElementById("project-detail4");
    const elementPosition8 = element8?.getBoundingClientRect().top;
    const element9 = document.getElementById("project-detail5");
    const elementPosition9 = element9?.getBoundingClientRect().top;
    const element10 = document.getElementById("project-detail6");
    const elementPosition10 = element10?.getBoundingClientRect().top;


    if (window.innerHeight - elementPosition > 60) {
      setTrigger(true);
      setActiveSection(1);
    } else {
      setTrigger(false);
      setActiveSection(0);
    }

    if (window.innerHeight - elementPosition1 > 80) {
      setTrigger1(true);
      setActiveSection(2);
    }

    if (window.innerHeight - elementPosition2 > 80) {
      setTrigger2(true);
      setActiveSection(3);
    }

    if (window.innerHeight - elementPosition3 > 40) {
      setActiveSection(5);
    }

    if (window.innerHeight - elementPosition4 > 30) {
      setTrigger3(true);
    }

    if (window.innerHeight - elementPosition5 > 135) {
      setTrigger4(true);
    }

    if (window.innerHeight - elementPosition6 > 130) {
      setTrigger5(true);
    }

    if (window.innerHeight - elementPosition7 > 130) {
      setTrigger6(true);
    }

    if (window.innerHeight - elementPosition8 > 130) {
      setTrigger7(true);
    }

    if (window.innerHeight - elementPosition9 > 130) {
      setTrigger8(true);
    }

    if (window.innerHeight - elementPosition10 > 130) {
      setTrigger9(true);
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

    if (trigger3) {
      setAnimateTrigger3(true);
    }

    if (trigger4) {
      setAnimateTrigger4(true);
    }

    if (trigger5) {
      setAnimateTrigger5(true);
    }

    if (trigger6) {
      setAnimateTrigger6(true);
    }

    if (trigger7) {
      setAnimateTrigger7(true);
    }

    if (trigger8) {
      setAnimateTrigger8(true);
    }

    if (trigger9) {
      setAnimateTrigger9(true);
    }

    document.addEventListener("scroll", handleScrollEvent1);

    return () => {
      document.removeEventListener("scroll", handleScrollEvent1);
    };
  }, [trigger, trigger1, trigger2, trigger3, trigger4, trigger5, trigger6, trigger7, trigger8, trigger9]);


  const handleScrollNav = () => {
    if (window.pageYOffset > 60) {
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
        <div className={`loader-sec ${theme ? 'light-loader-bg' : ''}`}>
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
          <div className={`main-sec ${theme ? "light-theme" : ""}`}>
            <Header
              navBg={navBg}
              theme={theme}
              setTheme={setTheme}
              activeSection={activeSection}
              openSidebar={openSidebar}
              scrollSection={scrollSection}
            />
            <Sidebar
              open={open}
              theme={theme}
              setTheme={setTheme}
              activeSection={activeSection}
              closeSidebar={closeSidebar}
              scrollSection={scrollSection}
            />
            <Introduction />
            <About animateTrigger={animateTrigger} />
            <Work animateTrigger1={animateTrigger1} />
            <Projects
              animateTrigger2={animateTrigger2}
              animateTrigger3={animateTrigger3}
              animateTrigger4={animateTrigger4}
              animateTrigger5={animateTrigger5}
              animateTrigger6={animateTrigger6}
              animateTrigger7={animateTrigger7}
              animateTrigger8={animateTrigger8}
              animateTrigger9={animateTrigger9}
            />
            <Contact />
          </div>
        </div>
      )}
    </>
  );
}
