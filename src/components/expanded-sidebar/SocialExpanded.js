import React from "react";
import { Form } from "react-bootstrap";
const SocialExpanded = () => {
  return (
    <div className="expanded-sidebar">
      <h3>Social</h3>

      <Form className="form-box">
        <Form.Group className="mb-3  form-group" controlId="formBasicEmail">
          <Form.Label className="form-label">Linkdein</Form.Label>
          <Form.Control
            className="form-input"
            type="text"
            placeholder="Enter email"
            name="linkedein"
          />
        </Form.Group>

        <Form.Group className="mb-3  form-group" controlId="formBasicEmail">
          <Form.Label className="form-label">Facebook</Form.Label>
          <Form.Control
            className="form-input"
            type="text"
            placeholder="Enter email"
            name="facebook"
          />
        </Form.Group>

        <Form.Group className="mb-3  form-group" controlId="formBasicEmail">
          <Form.Label className="form-label">Github</Form.Label>
          <Form.Control
            className="form-input"
            type="text"
            placeholder="Enter email"
            name="github"
          />
        </Form.Group>

        <Form.Group className="mb-3  form-group" controlId="formBasicEmail">
          <Form.Label className="form-label">Instagram</Form.Label>
          <Form.Control
            className="form-input"
            type="text"
            placeholder="Enter email"
            name="instagram"
          />
        </Form.Group>
      </Form>
    </div>
  );
};

export default SocialExpanded;
