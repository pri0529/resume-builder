import React from "react";
import { Form } from "react-bootstrap";
const ActivityExpanded = () => {
  return (
    <div className="expanded-sidebar">
      <h3>Activity</h3>

      <Form>
        <Form.Group className="mb-3  form-group" controlId="formBasicEmail">
          <Form.Label className="form-label">Involvements</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Leave a comment here"
            style={{ height: "100px" }}
          />
        </Form.Group>

        <Form.Group className="mb-3  form-group" controlId="formBasicEmail">
          <Form.Label className="form-label">Acheivemets</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Leave a comment here"
            style={{ height: "100px" }}
          />
        </Form.Group>
      </Form>
    </div>
  );
};

export default ActivityExpanded;
