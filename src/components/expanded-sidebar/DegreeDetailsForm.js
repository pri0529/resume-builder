import React from "react";
import { Form } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import DeleteDegreeButton from "./DeleteCompanyDetailsButton";
const DegreeDetailsForm = () => {
  return (
    <div>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            Degree <DeleteDegreeButton />
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
                  placeholder="Enter email"
                  name="companyName"
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
                  name="designation"
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
                  name="jobRole"
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
                  name="years experience"
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
                  name="companySummary"
                  style={{ height: "100px" }}
                />
              </Form.Group>
            </Form>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default DegreeDetailsForm;
