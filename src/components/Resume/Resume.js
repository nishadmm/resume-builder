import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";

import Header from "../Header";
import LeftSideCard from "./LeftSideCard";
import TimeLine from "./TimeLine";

const Resume = ({ resumeData }) => {
  let LeftSideCardData, experience, educations;
  const name = resumeData && resumeData.name;
  const skills = resumeData && resumeData.skills;

  if (resumeData) {
    // Left Card Data
    let { name, email, phoneNumber, address } = resumeData;
    LeftSideCardData = [
      { title: "Name", value: name, icon: "user-circle" },
      { title: "Email", value: email, icon: "envelope" },
      { title: "Phone Number", value: phoneNumber, icon: "phone" },
      { title: "Address", value: address, icon: "map-marker-alt" },
    ];

    // Right Card Data
    const DataArray = Object.keys(resumeData).map((data) => ({
      title: data,
      value: resumeData[data].toString(),
    }));

    // create Experinece Array
    const companies = DataArray.filter((data) =>
        data.title.startsWith(`company`)
      ),
      designations = DataArray.filter((data) =>
        data.title.startsWith(`designation`)
      ),
      years = DataArray.filter((data) => data.title.startsWith(`year`));
    experience = Array(companies.length)
      .fill()
      .map((_, i) => {
        return {
          topHeading: `${years[i].value} Year`,
          centerContent: designations[i].value,
          bottonContent: companies[i].value,
        };
      });

    // create Education Array
    const institutions = DataArray.filter((data) =>
        data.title.startsWith(`company`)
      ),
      degrees = DataArray.filter((data) =>
        data.title.startsWith(`designation`)
      ),
      passingYears = DataArray.filter((data) => data.title.startsWith(`year`));
    educations = Array(institutions.length)
      .fill()
      .map((_, i) => {
        return {
          topHeading: `Passing Year- ${passingYears[i].value} `,
          centerContent: degrees[i].value,
          bottonContent: institutions[i].value,
        };
      });
  }

  return (
    <>
      {resumeData ? (
        <>
          <Header />
          <div className="container mt-2">
            <h3 className="text-center text-info">
              Your Awesome Resume <i class="far fa-newspaper"></i>
            </h3>
            <div className="row justify-content-center">
              <div className="col-md-9 row align-items-center">
                <LeftSideCard
                  LeftSideCardData={LeftSideCardData}
                  name={name}
                  skills={skills}
                />
                <div className="col-lg-7 resume-left-page position-relative p-4 ">
                  <TimeLine
                    content={educations}
                    title="Education:"
                    icon="university"
                  />
                  <TimeLine
                    content={experience}
                    title="Work &amp; Experience:"
                    icon="building"
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <Redirect to="/create" />
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  resumeData: state.formData.resumeData,
});

export default connect(mapStateToProps, null)(Resume);
