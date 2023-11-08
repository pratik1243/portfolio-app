"use client";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Introduction from "../../components/Introduction";
import About from "../../components/About";
import Work from "../../components/Work";

export default function Home() {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  }, []);

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
        <div className="main-sec">
          <Header />
          <Introduction />
          <About />
          <Work />


        </div>
      )}
    </>
  );
}
