import React from "react";
import SkillsCard from "./SkillsCard";

const LeftSideCard = ({ LeftSideCardData, name, skills }) => {
  return (
    <div className="col-lg-5 bg-danger p-4">
      <h5 className="text-white mt-3">{name && name}</h5>
      <div className="border-top">
        {LeftSideCardData &&
          LeftSideCardData.map(
            ({ title, value }, index) =>
              value && (
                <div key={index} className="mt-2">
                  <h6 className="text-white">{title}:</h6>
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
