import React from 'react';
import { Button } from "react-bootstrap";
import DegreeDetailsForm from "./DegreeDetailsForm";
const EducationExpanded = () => {
    return (
      <div className="expanded-sidebar">
      <h3>Educations</h3>
      <DegreeDetailsForm/>
      <div className="text-center">
        <Button className="company-button">Add</Button>
      </div>
      </div>
    );
}

export default EducationExpanded


