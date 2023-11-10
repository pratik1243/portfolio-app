"use client";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Introduction from "../../components/Introduction";
import About from "../../components/About";
import Work from "../../components/Work";

export default function Home() {
  const [loader, setLoader] = useState(true);
  const [trigger, setTrigger] = useState(false);
  const [trigger1, setTrigger1] = useState(false);
  const [navBg, setNavBg] = useState(false);
  const [animateTrigger, setAnimateTrigger] = useState(false);
  const [animateTrigger1, setAnimateTrigger1] = useState(false);
  const [open, setOpen] = useState(false);

  const handleScrollEvent1 = () => {
    const element = document.getElementById("about-sec");
    const elementPosition = element.getBoundingClientRect().top;

    const element1 = document.getElementById("works-sec");
    const elementPosition1 = element1.getBoundingClientRect().top;

    if (window.pageYOffset > elementPosition) {
      setTrigger(true);
    }

    if (window.pageYOffset > elementPosition1) {
      setTrigger1(true);
    }
  };

  useEffect(() => {
    if (trigger) {
      setAnimateTrigger(true);
    }

    if (trigger1) {
      setAnimateTrigger1(true);
      console.log("pppppppppp");
    }

    document.addEventListener("scroll", handleScrollEvent1);

    return () => {
      document.removeEventListener("scroll", handleScrollEvent1);
    };
  }, [trigger, trigger1]);

  const handleScrollNav = () => {
    if (window.pageYOffset > 70) {
      setNavBg(true);
    } else {
      setNavBg(false);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 2000);

    document.addEventListener("scroll", handleScrollNav);

    return () => {
      document.removeEventListener("scroll", handleScrollNav);
    };
  }, []);

  const openSidebar = () => {
    setOpen(!open);
  };

  return (
    <>
      {loader ? (
        <div className="loader-sec">
          <div className="loader-inner-sec">
            <h1 className="loader-txt">P</h1>
          
            <svg
              height="200"
              width="200"
              className="loader-icon"
              
            >
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
          <div className={`main-sec ${open ? 'opacity-bg': ''}`}>
            <Header navBg={navBg} openSidebar={openSidebar} />
            <Introduction />
            <About animateTrigger={animateTrigger} />
            <Work animateTrigger1={animateTrigger1} />
          </div>
          <div className={`side-bar ${open ? "side-bar-open" : ""}`}></div>
        </div>
      )}
    </>
  );
}
