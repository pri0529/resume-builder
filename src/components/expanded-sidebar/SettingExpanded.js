import React from "react";
import { Form } from "react-bootstrap";

const SettingExpanded = () => {
  return (
    <div className="expanded-sidebar">
      <h3>Settings</h3>

      <Form>
        <Form.Group className="mb-3  form-group" controlId="formBasicEmail">
          {/* <Form.Label className="form-label">Linkdein</Form.Label> */}
          <Form.Control
            className="form-input"
            type="text"
            placeholder="Enter email"
            name="linkedein"
          />
        </Form.Group>
      </Form>
    </div>
  );
};

export default SettingExpanded;
