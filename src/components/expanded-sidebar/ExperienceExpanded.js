import React, { useState } from "react";
import { Button } from "react-bootstrap";
import CompanyDetailForm from "./CompanyDetailForm";

const ExperienceExpanded = (props) => {
  // console.log(props.resumeData. experiences)
  // console.log("mydata",props.resumeData.experiences)
  const pushExperience = (index, experience) => {
    let experiences = JSON.parse(JSON.stringify(props.resumeData.experiences));
    experiences[index] = experience;
    props.updateResumeData("experiences", experiences);
  };

  // ===================================================================
  const expDataFromLocal = JSON.parse(localStorage.getItem("ExperieceForm"));
  console.log("expDataFromLocal==>>", expDataFromLocal);
  const defaultExpForm = {
    company: "",
    position: "",
    from: "",
    to: "",
    years: "",
    summery: "",
  };

  const [expData, setExpData] = useState([expDataFromLocal || {}]);

  const addExperience = () => {
    setExpData([...expData, defaultExpForm]);
  };

  const handleChange = (e, index) => {
    const newExpData = expData.map((formObj, i) => {
      if (i === index) {
        return { ...formObj, [e.target.name]: e.target.value };
      } else return formObj;
    });

    setExpData(newExpData);
    console.log(newExpData, "LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLll");
    window.localStorage.setItem("ExperieceForm", JSON.stringify(newExpData));
  };

  // =============================================================================

  // const addExperience = () => {
  //   let experience = {
  //     company: "Company",
  //     designation: "Designation",
  //   };
  //   let experiences = JSON.parse(JSON.stringify(props.resumeData.experiences));
  //   console.log("props", props);
  //   experiences.push(experience);
  //   props.updateResumeData("experiences", experiences);
  // };

  return (
    <div className="expanded-sidebar">
      {/* <h3>"Experience"</h3> */}
      {/* {props.resumeData.experiences.map((experience, index) => (
        <CompanyDetailForm
          key={index}
          experience={experience}
          index={index}
          pushExperience={pushExperience}
        />
      ))} */}
      {expData.length &&
        expData.map((exp, index) => (
          <CompanyDetailForm
            key={index}
            experience={exp}
            index={index}
            handleChange={handleChange}
            // pushExperience={pushExperience}
          />
        ))}
      <div className="text-center">
        <Button className="company-button" onClick={addExperience}>
          Add
        </Button>
      </div>
    </div>
  );
};

export default ExperienceExpanded;
