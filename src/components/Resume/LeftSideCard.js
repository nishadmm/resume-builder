import React from "react";
import SkillsCard from "./SkillsCard";

const LeftSideCard = ({ LeftSideCardData, name, skills }) => {
  return (
    <div
      className="col-lg-5 bg-info p-4 rounded"
      style={{ boxShadow: "0px 1px 4px 4px #151b2614" }}
    >
      <h5 className="text-white mt-3">{name && name}</h5>
      <div className="border-top">
        {LeftSideCardData &&
          LeftSideCardData.map(
            ({ title, value, icon }, index) =>
              value && (
                <div key={index} className="mt-2">
                  <h6 className="text-white">
                    <i class={`fas fa-${icon}`}></i> {title}:
                  </h6>
                  <p className="text-white">{value}</p>
                </div>
              )
          )}
        {skills.length ? <SkillsCard /> : ""}
      </div>
    </div>
  );
};

export default LeftSideCard;
