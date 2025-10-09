import React from "react";
import { useState } from "react";
import { Card, Table, Form, Container } from "react-bootstrap";
import "./FMSScoresheet.css"

function FMSScoresheet() {
  const [deepSquat, setDeepSquat] = useState("");
  const [leftHurdleStep, setLeftHurdleStep] = useState("");
  const [rightHurdleStep, setRightHurdleStep] = useState("");

const handleDeepSquatChange = (e) => setDeepSquat(e.target.value);
const handleLeftHurdleStepChange = (e) => setLeftHurdleStep(e.target.value);
const handleRightHurdleStepChange = (e) => setRightHurdleStep(e.target.value);

console.log("the current value of deep squat is " + deepSquat);
console.log("The current value of Left hurdle step is " + leftHurdleStep);
console.log("the current value of Right Hrudle Step is " + rightHurdleStep)
  return (
    <div className="fms-scoresheet">
      <Container>
        <Card>
          <Card.Body>
            <Card.Title className="text-center mb-3">
              Functional Movement Screen Score Sheet
            </Card.Title>

            <Table bordered hover responsive>
              <thead>
                <tr>
                  <th>Test</th>
                  <th>Raw Score</th>
                  <th>Final Score</th>
                  <th>Comments</th>
                </tr>
              </thead>
              <tbody>
                {/* Deep Squat Section */}
                <tr>
                  <td>Deep Squat</td>
                  <td>
                    <Form.Control
                      type="number"
                      placeholder="Raw"
                      onChange={handleDeepSquatChange}
                    />
                  </td>
                  <td>
                    <Form.Control type="number" placeholder="Final" />
                  </td>
                  <td>
                    <Form.Control type="text" placeholder="Comments" />
                  </td>
                </tr>
                {/* Hurdle Step Section */}
                <tr>
                  <td>Hurdle Step</td>
                  <td>
                    <Form.Control
                      type="number"
                      placeholder="Left"
                      onChange={handleLeftHurdleStepChange}
                    />
                    <Form.Control
                      type="number"
                      placeholder="Right"
                      onChange={handleRightHurdleStepChange}
                    />
                  </td>
                  <td>
                    <Form.Control type="number" placeholder="Final" />
                  </td>
                  <td>
                    <Form.Control type="text" placeholder="Comments" />
                  </td>
                </tr>
                {/* Inline Lunge Section */}
                <tr>
                  <td>Inline Lunge</td>
                  <td>
                    <Form.Control type="number" placeholder="Left" />
                    <Form.Control type="number" placeholder="Right" />
                  </td>
                  <td>
                    <Form.Control type="number" placeholder="Final" />
                  </td>
                  <td>
                    <Form.Control type="text" placeholder="Comments" />
                  </td>
                </tr>
                {/* Shoulder Mobility Section */}
                <tr>
                  <td>Shoulder Mobility</td>
                  <td>
                    <Form.Control type="number" placeholder="Left" />
                    <Form.Control type="number" placeholder="Right" />
                  </td>
                  <td>
                    <Form.Control type="number" placeholder="Final" />
                  </td>
                  <td>
                    <Form.Control type="text" placeholder="Comments" />
                  </td>
                </tr>
                {/* Shoulder Clearing Section */}
                <tr>
                  <td>Shoulder Clearing</td>
                  <td>
                    <Form.Control type="text" placeholder="Left +/-" />
                    <Form.Control type="text" placeholder="Right +/-" />
                  </td>
                </tr>
                {/* Active Straight-Leg Raise */}
                <tr>
                  <td>Active Straight-Leg Raise</td>
                  <td>
                    <Form.Control type="number" placeholder="Left" />
                    <Form.Control type="number" placeholder="Right" />
                  </td>
                  <td>
                    <Form.Control type="number" placeholder="Final" />
                  </td>
                  <td>
                    <Form.Control type="text" placeholder="Comments" />
                  </td>
                </tr>
                {/* Trunk Stability Push Up */}
                <tr>
                  <td>Trunk Stability Push Up</td>
                  <td>
                    <Form.Control type="number" placeholder="Raw" />
                  </td>
                  <td>
                    <Form.Control type="number" placeholder="Final" />
                  </td>
                  <td>
                    <Form.Control type="text" placeholder="Comments" />
                  </td>
                </tr>
                {/* Extension Clearing */}
                <tr>
                  <td>Extension Clearing</td>
                  <td>
                    <Form.Control type="text" placeholder="+/-" />
                  </td>
                </tr>
                {/* Rotary Stability */}
                <tr>
                  <td>Rotary Stability</td>
                  <td>
                    <Form.Control type="number" placeholder="Left" />
                    <Form.Control type="number" placeholder="Right" />
                  </td>
                  <td>
                    <Form.Control type="number" placeholder="Final" />
                  </td>
                  <td>
                    <Form.Control type="text" placeholder="Comments" />
                  </td>
                </tr>
                {/* Total Testing Score */}
                <tr>
                  <td>Total Screen Score</td>
                  <td>
                    <Form.Control
                      type="number"
                      placeholder="Final Test Score"
                    />
                  </td>
                </tr>
                {/* repeat for other tests */}
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default FMSScoresheet;
