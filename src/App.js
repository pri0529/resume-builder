import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./components/Sidebar";
import React, { useState, useEffect } from "react";
import Resume from "./components/Resume";

function App() {
  let resumeDataObj = localStorage.getItem("resume")
    ? JSON.parse(localStorage.getItem("resume"))
    : {
        intro: {
          name: "",
          image: "",
          role: "",
          phone: "",
          email: "",
          relevent: "",
          total: "",
          location: "",
          summary: "",
        },
        social: {
          linkedin: "",
        },
        experiences: [
          {
            company: "Company 1",
            designation: "desgination",
          },

          {
            company: "Company 2",
            designation: "desgination",
          },
        ],
      };

  const [resumeData, setResumeData] = useState(resumeDataObj);
  const updateResumeData = (key, value) => {
    // let tempResumeData = JSON.parse(JSON.stringify(resumeData));
    let tempResumeData = Object.assign({}, resumeData);
    tempResumeData[key] = value;
    setResumeData(tempResumeData);
    localStorage.setItem("resume", JSON.stringify(tempResumeData));
  };

  return (
    <div className="App">
      <Sidebar updateResumeData={updateResumeData} resumeData={resumeData} />
      <Resume resumeData={resumeData} />
    </div>
  );
}

export default App;
