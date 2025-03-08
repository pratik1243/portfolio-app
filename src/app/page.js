"use client";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
const IntroductionComp = dynamic(() => import("../../components/Introduction"));
const AboutComp = dynamic(() => import("../../components/About"));
const WorkComp = dynamic(() => import("../../components/Work"));
const SidebarComp = dynamic(() => import("../../components/Sidebar"));
const HeaderComp = dynamic(() => import("../../components/Header"));
const ProjectsComp = dynamic(() => import("../../components/Projects"));
const ContactComp = dynamic(() => import("../../components/Contact"));
const LoaderComp = dynamic(() => import("../../components/Loader"));

export default function Home() {
  const [loader, setLoader] = useState(true);
  const [navBg, setNavBg] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(0);
  const [theme, setTheme] = useState("dark");

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
    }
  };

  const closeSidebar = () => {
    setOpen(false);
  };

  const openSidebar = () => {
    setOpen(!open);
  };

  const scrollSection = (e, id) => {
    e.preventDefault();
    let node = document.getElementById(id);
    const scrollOptions = {
      top: node.offsetTop - 100,
      behavior: "smooth",
    };
    if (typeof window !== "undefined") {
      window.scrollTo(scrollOptions);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 2000);

    if (typeof window !== "undefined") {
      document.addEventListener("scroll", handleScrollNav);
      window.addEventListener("resize", resetOnResize);
    }

    return () => {
      document.removeEventListener("scroll", handleScrollNav);
      window.removeEventListener("resize", resetOnResize);
    };
  }, []);

  return (
    <>
      {loader ? (
        <LoaderComp />
      ) : (
        <div className="main-sec">
          <HeaderComp
            navBg={navBg}
            // theme={theme}
            // activeSection={activeSection}
            openSidebar={openSidebar}
            scrollSection={scrollSection}
          />
          <SidebarComp
            open={open}
            //theme={theme}
            //activeSection={activeSection}
            closeSidebar={closeSidebar}
            scrollSection={scrollSection}
          />
          <IntroductionComp />
          <AboutComp setActiveSection={setActiveSection} />
          <WorkComp setActiveSection={setActiveSection} />
          <ProjectsComp setActiveSection={setActiveSection} />
          <ContactComp />
        </div>
      )}
    </>
  );
}
