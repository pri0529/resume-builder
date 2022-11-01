import React, { useState } from "react";
import { Form } from "react-bootstrap";
import IntroIcon from "../icons/IntroIcon";

const IntroExpanded = (props) => {
  console.log("props");
  console.log(props);
  const [introData, setIntroData] = useState({ name: "Saurav" });
  const handleChange = (e) => {
    console.log("target");
    console.log(e.target.value);
    const object = introData;
    object[e.target.name] = e.target.value;
    setIntroData(object);
  };
  return (
    <div className="expanded-sidebar">
      <h3>Intro</h3>

      <Form className="form-box">
        <Form.Group className="mb-3  form-group" controlId="formBasicEmail">
          <Form.Label className="form-label">Name</Form.Label>
          <Form.Control
            className="form-input"
            type="text"
            value={introData.name}
            placeholder="Enter email"
            name="name"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3  form-group" controlId="formBasicEmail">
          <Form.Label className="form-label">Image</Form.Label>
          <Form.Control
            className="form-input"
            type="email"
            name="image"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3  form-group" controlId="formBasicEmail">
          <Form.Label className="form-label">Role</Form.Label>
          <Form.Control
            className="form-input"
            type="text"
            placeholder="Enter email"
            name="name"
          />
        </Form.Group>

        <Form.Group className="mb-3  form-group" controlId="formBasicEmail">
          <Form.Label className="form-label">Email</Form.Label>
          <Form.Control
            className="form-input"
            type="email"
            name="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3  form-group" controlId="formBasicEmail">
          <Form.Label className="form-label">Phone No</Form.Label>
          <Form.Control
            className="form-input"
            type="number"
            name="phone no"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3  form-group" controlId="formBasicEmail">
          <Form.Label className="form-label">Relevent experience</Form.Label>
          <Form.Control
            className="form-input"
            type="text"
            name="relevent"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3  form-group" controlId="formBasicEmail">
          <Form.Label className="form-label">Total experience</Form.Label>
          <Form.Control
            className="form-input"
            type="text"
            name="total-experience"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3  form-group" controlId="formBasicEmail">
          <Form.Label className="form-label">Location</Form.Label>
          <Form.Control
            className="form-input"
            type="text"
            name="location"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3  form-group" controlId="formBasicEmail">
          <Form.Label className="form-label">Summary</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Leave a comment here"
            style={{ height: "100px" }}
          />
        </Form.Group>

        <Form.Group className="mb-3  form-group" controlId="formBasicEmail">
          <Form.Label className="form-label">Objective</Form.Label>
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

export default IntroExpanded;
