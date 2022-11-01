import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./components/Sidebar";
import React,{useState} from "react";

function App() {
  const [resumeData,setResumeData] = useState({
    intro: {
      name: ''
    },
    social: {
      linkedin: ''
    },
    expriences: [],
  })

   const updateResumeData = (key, value) => {
      let tempResumeData = resumeData;
      tempResumeData[key] = value;
      setResumeData(tempResumeData);
    };  

  return (
    <div className="App">
      <Sidebar updateResumeData={updateResumeData} resumeData={resumeData} />
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
