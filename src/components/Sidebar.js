import IntroIcon from "./icons/IntroIcon";
import SocialIcon from "./icons/SocialIcon";
import AwardIcon from "./icons/AwardsIcon";
import EducationIcon from "./icons/EducationIcon";
import ActivityIcon from "./icons/ActivityIcon";
import LabelIcon from "./icons/LabelIcon";
import ExperienceIcon from "./icons/ExperienceIcon";
import SettingIcon from "./icons/SettingIcon";
import "./icons/icons.css";
import { useState } from "react";
import ExpandedSIdebar from "./expanded-sidebar/ExpandedSIdebar";
function Sidebar(props) {
  console.log("sidebar")
  console.log(props)
  const [visible, setVisible] = useState(false);
  const [type, setType] = useState("test");

  let expanded;
  const iconClick = (iconType) => {
    console.log("type of", iconType);
    console.log("type", type);
    if (type === iconType) {
      setVisible(false);
      setType("");
      return;
    }
    setVisible(true);
    setType(iconType);
    console.log("type", type);
  };

  if (visible) {
    expanded = (
      <ExpandedSIdebar
        type={type}
        updateResumeData={props.updateResumeData}
        resumeData={props.resumeData}
      />
    );
  }
  return (
    <>
      <div className="sideMenu">
        <IntroIcon iconClick={iconClick} />
        <SocialIcon iconClick={iconClick} />
        <SettingIcon iconClick={iconClick} />
        <ExperienceIcon iconClick={iconClick} />
        <EducationIcon iconClick={iconClick} />
        <AwardIcon iconClick={iconClick} />
        <ActivityIcon iconClick={iconClick} />
        <LabelIcon iconClick={iconClick} />
      </div>
      <div visible={visible.toString()}>{expanded}</div>
    </>
  );
}

export default Sidebar;
