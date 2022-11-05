import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./resume.css";
const Resume = (props) => {
  //  ==================================
  const expDataFromLocal = JSON.parse(localStorage.getItem("ExperieceForm"));
  const [expDataComingFromLocal, setExpDataComingFromLocal] =
    useState(expDataFromLocal);
  // useEffect(() => {
  //   setExpDataComingFromLocal(expDataFromLocal);
  // }, [expDataFromLocal]);
  console.log("expDataFromLocal========>>>>>>>>>", expDataFromLocal);
  // ==================================

  const openLink = (url) => {
    window.location.href = url;
  };

  const openGit = (url) => {
    window.location.href = url;
  };

  console.log("props.resumeData.experiences", props.resumeData.experiences);
  return (
    <div>
      <Container className="main-div">
        <Row>
          <Col sm="8">
            <div className="intro-section">
              <div className="div-1">
                <div>{props.resumeData.intro.name}</div>
                <div>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 1024 1024"
                    height="2em"
                    width="2em"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={() => openLink("https://linkedin.com/")}
                  >
                    <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1 1 68.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z"></path>
                  </svg>

                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 1024 1024"
                    height="2em"
                    width="2em"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={() => openGit("https://github.com")}
                  >
                    <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path>
                  </svg>

                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    height="2em"
                    width="2em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M477.5 128C463 103.05 285.13 0 256.16 0S49.25 102.79 34.84 128s-14.49 230.8 0 256 192.38 128 221.32 128S463 409.08 477.49 384s14.51-231 .01-256zM316.13 414.22c-4 0-40.91-35.77-38-38.69.87-.87 6.26-1.48 17.55-1.83 0-26.23.59-68.59.94-86.32 0-2-.44-3.43-.44-5.85h-79.93c0 7.1-.46 36.2 1.37 72.88.23 4.54-1.58 6-5.74 5.94-10.13 0-20.27-.11-30.41-.08-4.1 0-5.87-1.53-5.74-6.11.92-33.44 3-84-.15-212.67v-3.17c-9.67-.35-16.38-1-17.26-1.84-2.92-2.92 34.54-38.69 38.49-38.69s41.17 35.78 38.27 38.69c-.87.87-7.9 1.49-16.77 1.84v3.16c-2.42 25.75-2 79.59-2.63 105.39h80.26c0-4.55.39-34.74-1.2-83.64-.1-3.39.95-5.17 4.21-5.2 11.07-.08 22.15-.13 33.23-.06 3.46 0 4.57 1.72 4.5 5.38C333 354.64 336 341.29 336 373.69c8.87.35 16.82 1 17.69 1.84 2.88 2.91-33.62 38.69-37.58 38.69z"></path>
                  </svg>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    role="img"
                    viewBox="0 0 24 24"
                    height="2em"
                    width="2em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title></title>
                    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"></path>
                  </svg>
                </div>
              </div>
              <div className="div-1">
                <div>{props.resumeData.intro.role}</div>
                <div>{props.resumeData.intro.phone}</div>
              </div>
              <div className="div-1">
                <div>{props.resumeData.intro.relevent}</div>
                <div>{props.resumeData.intro.email}</div>
              </div>
              <div className="div-1">
                <div> {props.resumeData.intro.total}</div>
                <div> {props.resumeData.intro.location}</div>
              </div>
            </div>
          </Col>
          <Col sm="4">
            <div className="about-section">hello</div>
          </Col>
        </Row>
        {/*EXPERIENCE ROW START HERE */}
        <Row>
          <Col sm="8">
            {/* <h3>Experice</h3> */}
            <div>
              <div className="experience-div">
                {expDataComingFromLocal &&
                  expDataComingFromLocal.length &&
                  expDataComingFromLocal.map((experience, index) => (
                    <div key={index}>{experience.company}</div>
                  ))}
              </div>
              {/* <div>
                {props.resumeData.experiences.map((experience, index) => (
                  <p key={index}>{experience.desgination}</p>
                ))}
              </div> */}

              {/* <div>
                {props.resumeData.experiences.map((experience, index) => (
                  <b key={index}>{experience.designation}</b>
                ))}
              </div> */}

              {/* <div>

              </div> */}
              {/* <div>
              {props.resumeData.experiences.map((experience, index) => (
                  <b key={index}>{experience.company}</b>
                ))} 
              </div> */}
            </div>
          </Col>

          <Col sm="4">
            <div className="carrer-objectives">
              <h3>Objectives</h3>
              {props.resumeData.intro.summary}
            </div>
            <div className="technical-expertise">
              <h3>Technical </h3>
            </div>
          </Col>
        </Row>

        <Row>
          <Col sm="8">
            <div>
              <div className="key-div">
                <h3>Key</h3>
              </div>
            </div>
          </Col>

          <Col sm="4" className="">
            <div></div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Resume;
