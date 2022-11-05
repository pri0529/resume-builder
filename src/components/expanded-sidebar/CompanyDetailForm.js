import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import DeleteCompanyDetailsButton from "./DeleteCompanyDetailsButton";
const CompanyDetailForm = (props) => {
  // const [experience, setExperience] = useState(props.experience);

  // const handleChange = (e) => {
  //   const object = Object.assign({}, experience);
  //   object.company = e.target.value;
  //   props.pushExperience(props.index, experience);
  //   setExperience(object);
  // };

  // ============================
  const { company, position, from, summery, to } = props.experience;
  // ===================================

  return (
    <div>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            {company || "Company"}
            {/* {experience.company} */}
            {/* {experience.designation} */}
            <DeleteCompanyDetailsButton
            // resumeData={experience.resumeData}
            // setResumeData={experience.setResumeData}
            />
          </Accordion.Header>
          <Accordion.Body>
            <Form>
              <Form.Group
                className="mb-3  form-group"
                controlId="formBasicEmail"
              >
                {/* <Form.Label className="form-label">Linkdein</Form.Label>s */}
                <Form.Control
                  className="form-input"
                  type="text"
                  value={company || ""}
                  onChange={(e) => props.handleChange(e, props.index)}
                  placeholder="Enter company"
                  name="company"
                />
              </Form.Group>

              <Form.Group
                className="mb-3  form-group"
                controlId="formBasicEmail"
              >
                {/* <Form.Label className="form-label">Linkdein</Form.Label>s */}
                <Form.Control
                  className="form-input"
                  type="text"
                  placeholder="Enter designation"
                  name="position"
                  value={position || ""}
                  onChange={(e) => props.handleChange(e, props.index)}
                />
              </Form.Group>

              <Form.Group
                className="mb-3  form-group"
                controlId="formBasicEmail"
              >
                {/* <Form.Label className="form-label">Linkdein</Form.Label>s */}
                <Form.Control
                  className="form-input"
                  type="text"
                  placeholder="Enter email"
                  name="from"
                  value={from || ""}
                  onChange={(e) => props.handleChange(e, props.index)}
                />
              </Form.Group>

              <Form.Group
                className="mb-3  form-group"
                controlId="formBasicEmail"
              >
                {/* <Form.Label className="form-label">Linkdein</Form.Label>s */}
                <Form.Control
                  className="form-input"
                  type="text"
                  placeholder="Enter email"
                  name="to"
                  value={to || ""}
                  onChange={(e) => props.handleChange(e, props.index)}
                />
              </Form.Group>

              <Form.Group
                className="mb-3  form-group"
                controlId="formBasicEmail"
              >
                <Form.Label className="form-label">Summary</Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  name="summery"
                  style={{ height: "100px" }}
                  value={summery || ""}
                  onChange={(e) => props.handleChange(e, props.index)}
                />
              </Form.Group>
            </Form>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default CompanyDetailForm;
