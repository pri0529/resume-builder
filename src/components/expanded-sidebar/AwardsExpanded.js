import React from "react";
import { Button } from "react-bootstrap";
import AwardDetailsForm from "./AwardDetailsForm";
const AwardsExpanded = () => {
  return (
    <div className="expanded-sidebar">
      <h3>AWards</h3>
      <AwardDetailsForm />
      <div className="text-center">
        <Button className="company-button">Add</Button>
      </div>
    </div>
  );
};

export default AwardsExpanded;
