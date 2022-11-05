import React from "react";
import ActivityExpanded from "./ActivityExpanded";
import AwardsExpanded from "./AwardsExpanded";
import EducationExpanded from "./EducationExpanded";
import ExperienceExpanded from "./ExperienceExpanded";
import IntroExpanded from "./IntroExpanded";
import LabelExpanded from "./LabelExpanded";
import SettingExpanded from "./SettingExpanded";
import SocialExpanded from "./SocialExpanded";
import "./expanded-sidebar.css";
const ExpandedSIdebar = (props) => {
  console.log("extend");
  console.log(props);
  if (props.type === "intro") {
    return (
      <div>
        <IntroExpanded
          resumeData={props.resumeData}
          updateResumeData={props.updateResumeData}
        />
      </div>
    );
  } else if (props.type === "activity") {
    return (
      <div>
        <ActivityExpanded
          resumeData={props.resumeData}
          updateResumeData={props.updateResumeData}
        />
      </div>
    );
  } else if (props.type === "award") {
    return (
      <div>
        <AwardsExpanded
          resumeData={props.resumeData}
          updateResumeData={props.updateResumeData}
        />
      </div>
    );
  } else if (props.type === "education") {
    return (
      <div>
        <EducationExpanded
          resumeData={props.resumeData}
          updateResumeData={props.updateResumeData}
        />
      </div>
    );
  } else if (props.type === "experience") {
    return (
      <div>
        <ExperienceExpanded
          resumeData={props.resumeData}
          updateResumeData={props.updateResumeData}
        />
      </div>
    );
  } else if (props.type === "label") {
    return (
      <div>
        <LabelExpanded
          resumeData={props.resumeData}
          updateResumeData={props.updateResumeData}
        />
      </div>
      
    );
  } else if (props.type === "setting") {
    return (
      <div>
        <SettingExpanded
          resumeData={props.resumeData}
          updateResumeData={props.updateResumeData}
        />
      </div>
    );
  } else if (props.type === "social") {
    return (
      <div>
        <SocialExpanded
          resumeData={props.resumeData}
          updateResumeData={props.updateResumeData}
        />
      </div>
    );
  }
};

export default ExpandedSIdebar;
