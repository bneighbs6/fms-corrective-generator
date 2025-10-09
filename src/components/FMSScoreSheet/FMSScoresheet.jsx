import React, { useState } from "react";
import { Card, Table, Form, Container } from "react-bootstrap";
import "./FMSScoresheet.css";

function FMSScoresheet() {
  const initialFMSScoresheetState = {
    deepSquat: "",
    leftHurdleStep: "",
    rightHurdleStep: "",
    leftInlineLunge: "",
    rightInlineLunge: "",
    leftShoulderMobility: "",
    rightShoulderMobility: "",
    leftShoulderClearing: "",
    rightShoulderClearing: "",
    leftActiveStraightLegRaise: "",
    rightActiveStraightLegRaise: "",
    trunkStabilityPushUp: "",
    extensionClearing: "",
    leftRotaryStability: "",
    rightRotaryStability: "",
    flexionClearing: "",
    totalScore: "",
  };

  const [fmsScoresheetData, setFMSScoresheetData] = useState({
    ...initialFMSScoresheetState,
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFMSScoresheetData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

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
                {/* Deep Squat */}
                <tr>
                  <td>Deep Squat</td>
                  <td>
                    <Form.Control
                      type="number"
                      placeholder="Raw"
                      name="deepSquat"
                      value={fmsScoresheetData.deepSquat}
                      onChange={handleFormChange}
                    />
                  </td>
                  <td>
                    <Form.Control type="number" placeholder="Final" />
                  </td>
                  <td>
                    <Form.Control type="text" placeholder="Comments" />
                  </td>
                </tr>

                {/* Hurdle Step */}
                <tr>
                  <td>Hurdle Step</td>
                  <td>
                    <Form.Control
                      type="number"
                      placeholder="Left"
                      name="leftHurdleStep"
                      value={fmsScoresheetData.leftHurdleStep}
                      onChange={handleFormChange}
                    />
                    <Form.Control
                      type="number"
                      placeholder="Right"
                      name="rightHurdleStep"
                      value={fmsScoresheetData.rightHurdleStep}
                      onChange={handleFormChange}
                    />
                  </td>
                  <td>
                    <Form.Control type="number" placeholder="Final" />
                  </td>
                  <td>
                    <Form.Control type="text" placeholder="Comments" />
                  </td>
                </tr>

                {/* Inline Lunge */}
                <tr>
                  <td>Inline Lunge</td>
                  <td>
                    <Form.Control
                      type="number"
                      placeholder="Left"
                      name="leftInlineLunge"
                      value={fmsScoresheetData.leftInlineLunge}
                      onChange={handleFormChange}
                    />
                    <Form.Control
                      type="number"
                      placeholder="Right"
                      name="rightInlineLunge"
                      value={fmsScoresheetData.rightInlineLunge}
                      onChange={handleFormChange}
                    />
                  </td>
                  <td>
                    <Form.Control type="number" placeholder="Final" />
                  </td>
                  <td>
                    <Form.Control type="text" placeholder="Comments" />
                  </td>
                </tr>

                {/* Shoulder Mobility */}
                <tr>
                  <td>Shoulder Mobility</td>
                  <td>
                    <Form.Control
                      type="number"
                      placeholder="Left"
                      name="leftShoulderMobility"
                      value={fmsScoresheetData.leftShoulderMobility}
                      onChange={handleFormChange}
                    />
                    <Form.Control
                      type="number"
                      placeholder="Right"
                      name="rightShoulderMobility"
                      value={fmsScoresheetData.rightShoulderMobility}
                      onChange={handleFormChange}
                    />
                  </td>
                  <td>
                    <Form.Control type="number" placeholder="Final" />
                  </td>
                  <td>
                    <Form.Control type="text" placeholder="Comments" />
                  </td>
                </tr>

                {/* Shoulder Clearing */}
                <tr>
                  <td>Shoulder Clearing</td>
                  <td>
                    <Form.Control
                      type="text"
                      placeholder="Left +/-"
                      name="leftShoulderClearing"
                      value={fmsScoresheetData.leftShoulderClearing}
                      onChange={handleFormChange}
                    />
                    <Form.Control
                      type="text"
                      placeholder="Right +/-"
                      name="rightShoulderClearing"
                      value={fmsScoresheetData.rightShoulderClearing}
                      onChange={handleFormChange}
                    />
                  </td>
                  <td></td>
                  <td>
                    <Form.Control type="text" placeholder="Comments" />
                  </td>
                </tr>

                {/* Active Straight-Leg Raise */}
                <tr>
                  <td>Active Straight-Leg Raise</td>
                  <td>
                    <Form.Control
                      type="number"
                      placeholder="Left"
                      name="leftActiveStraightLegRaise"
                      value={fmsScoresheetData.leftActiveStraightLegRaise}
                      onChange={handleFormChange}
                    />
                    <Form.Control
                      type="number"
                      placeholder="Right"
                      name="rightActiveStraightLegRaise"
                      value={fmsScoresheetData.rightActiveStraightLegRaise}
                      onChange={handleFormChange}
                    />
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
                    <Form.Control
                      type="number"
                      placeholder="Raw"
                      name="trunkStabilityPushUp"
                      value={fmsScoresheetData.trunkStabilityPushUp}
                      onChange={handleFormChange}
                    />
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
                    <Form.Control
                      type="text"
                      placeholder="+/-"
                      name="extensionClearing"
                      value={fmsScoresheetData.extensionClearing}
                      onChange={handleFormChange}
                    />
                  </td>
                  <td></td>
                  <td>
                    <Form.Control type="text" placeholder="Comments" />
                  </td>
                </tr>

                {/* Rotary Stability */}
                <tr>
                  <td>Rotary Stability</td>
                  <td>
                    <Form.Control
                      type="number"
                      placeholder="Left"
                      name="leftRotaryStability"
                      value={fmsScoresheetData.leftRotaryStability}
                      onChange={handleFormChange}
                    />
                    <Form.Control
                      type="number"
                      placeholder="Right"
                      name="rightRotaryStability"
                      value={fmsScoresheetData.rightRotaryStability}
                      onChange={handleFormChange}
                    />
                  </td>
                  <td>
                    <Form.Control type="number" placeholder="Final" />
                  </td>
                  <td>
                    <Form.Control type="text" placeholder="Comments" />
                  </td>
                </tr>

                {/* Flexion Clearing */}
                <tr>
                  <td>Flexion Clearing</td>
                  <td>
                    <Form.Control
                      type="text"
                      placeholder="+/-"
                      name="flexionClearing"
                      value={fmsScoresheetData.flexionClearing}
                      onChange={handleFormChange}
                    />
                  </td>
                  <td></td>
                  <td>
                    <Form.Control type="text" placeholder="Comments" />
                  </td>
                </tr>

                {/* Total Screen Score */}
                <tr>
                  <td>Total Screen Score</td>
                  <td></td>
                  <td>
                    <Form.Control
                      type="number"
                      placeholder="Final Test Score"
                      name="totalScore"
                      value={fmsScoresheetData.totalScore}
                      onChange={handleFormChange}
                    />
                  </td>
                </tr>
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default FMSScoresheet;
