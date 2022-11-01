import React from "react";
import { Button } from "react-bootstrap";
import CompanyDetailForm from "./CompanyDetailForm";


const ExperienceExpanded = () => {
  return (
    <div className="expanded-sidebar">
      <h3>Experience</h3>
      <CompanyDetailForm />
      <div className="text-center">
        <Button className="company-button">Add</Button>
      </div>
    </div>
  );
};

export default ExperienceExpanded;
