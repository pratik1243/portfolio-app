import React from "react";

const Loader = () => {
  return (
    <div className="loader-sec">
      <div className="loader-inner-sec">
        <h1 className="loader-txt">P</h1>
        <svg height="200" width="200" className="loader-icon">
          <circle
            className="circle"
            cx="100"
            cy="100"
            r="95"
            stroke="#0093ff"
            strokeWidth="10"
            fillOpacity="0"
          />
        </svg>
      </div>
    </div>
  );
};

export default Loader;
