import React, { useState } from "react";
import { Form } from "react-bootstrap";
import IntroIcon from "../icons/IntroIcon";

const IntroExpanded = (props) => {
  console.log("props");
  console.log(props);
  const handleChange = (e) => {
    const object = Object.assign({}, props.resumeData.intro);
    object[e.target.name] = e.target.value;
    props.updateResumeData("intro", object);
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
            value={props.resumeData.intro.name}
            placeholder="Enter the name"
            name="name"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3  form-group" controlId="formBasicEmail">
          <Form.Label className="form-label">Image</Form.Label>
          <Form.Control
            className="form-input"
            type="text"
            name="image"
            placeholder="image"
            value={props.resumeData.intro.image}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3  form-group" controlId="formBasicEmail">
          <Form.Label className="form-label">Role</Form.Label>
          <Form.Control
            className="form-input"
            type="text"
            placeholder="role"
            name="role"
            value={props.resumeData.intro.role}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3  form-group" controlId="formBasicEmail">
          <Form.Label className="form-label">Phone No</Form.Label>
          <Form.Control
            className="form-input"
            type="number"
            name="phone"
            placeholder="Phone number"
            value={props.resumeData.intro.phone}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3  form-group" controlId="formBasicEmail">
          <Form.Label className="form-label">Email</Form.Label>
          <Form.Control
            className="form-input"
            type="email"
            name="email"
            placeholder="Enter email"
            onChange={handleChange}
            value={props.resumeData.intro.email}
          />
        </Form.Group>

        <Form.Group className="mb-3  form-group" controlId="formBasicEmail">
          <Form.Label className="form-label">Relevent experience</Form.Label>
          <Form.Control
            className="form-input"
            type="text"
            name="relevent"
            placeholder="Enter email"
            value={props.resumeData.intro.relevent}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3  form-group" controlId="formBasicEmail">
          <Form.Label className="form-label">Total experience</Form.Label>
          <Form.Control
            className="form-input"
            type="text"
            name="total"
            placeholder="Total-experiience"
            value={props.resumeData.intro.total}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3  form-group" controlId="formBasicEmail">
          <Form.Label className="form-label">Location</Form.Label>
          <Form.Control
            className="form-input"
            type="text"
            name="location"
            placeholder="Enter location"
            value={props.resumeData.intro.location}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3  form-group" controlId="formBasicEmail">
          <Form.Label className="form-label">Summary</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Leave a comment here"
            style={{ height: "100px" }}
            name="summary"
            value={props.resumeData.intro.summary}
            onChange={handleChange}
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
