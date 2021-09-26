import React from "react";

const TimeLine = ({ content, title, icon }) => {
  return (
    <div className="timeline-box mt-4">
      <h5 className="text-dark">
        {" "}
        <i class={`fas fa-${icon}`}></i> {title}
      </h5>
      <div className="resume-content position-relative">
        {content.map(({ topHeading, centerContent, bottonContent }, index) => (
          <div key={index} className=" mb-4 position-relative">
            <div
              className="timeline-cricle position-absolute rounded-circle"
              style={{
                top: "5px",
                left: "9px",
                border: "12px solid #f6f6f6",
              }}
            >
              <i
                className="far fa-circle text-info position-absolute"
                style={{ top: "-8px", left: "-7px" }}
              ></i>
            </div>
            <div className="timeline-info">
              <span
                className=" text-dark font-weight-normal"
                style={{ fontSize: "13px" }}
              >
                {topHeading}
              </span>
              <h6 className="my-2 text-info">{centerContent}</h6>
              <span>{bottonContent}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimeLine;
