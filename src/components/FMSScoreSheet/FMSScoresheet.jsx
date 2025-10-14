import React, { useState, useEffect } from "react";
import { Card, Table, Form, Container, Button } from "react-bootstrap";
import "./FMSScoresheet.css";

function FMSScoresheet() {
  const initialFMSScoresheetState = {
    // Raw scores
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
    // Final scores
    deepSquatFinal: "",
    hurdleStepFinal: "",
    inlineLungeFinal: "",
    shoulderMobilityFinal: "",
    activeStraightLegRaiseFinal: "",
    trunkStabilityPushUpFinal: "",
    rotaryStabilityFinal: "",
    // Total
    totalScore: "",
  };

  // makes the state of the form always start with its initial form state above
  const [fmsScoresheetData, setFMSScoresheetData] = useState({
    ...initialFMSScoresheetState,
  });

  // Updates the corresponding state value whenever a user changes an input field.
  // Uses the input's "name" attribute as the key to update the matching property in fmsScoresheetData.
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    console.log(e);
    setFMSScoresheetData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    // Define which raw score fields belong to each test
    const scoreGroups = {
      deepSquatFinal: ["deepSquat"],
      hurdleStepFinal: ["leftHurdleStep", "rightHurdleStep"],
      inlineLungeFinal: ["leftInlineLunge", "rightInlineLunge"],
      shoulderMobilityFinal: ["leftShoulderMobility", "rightShoulderMobility"],
      activeStraightLegRaiseFinal: ["leftActiveStraightLegRaise", "rightActiveStraightLegRaise"],
      trunkStabilityPushUpFinal: ["trunkStabilityPushUp"],
      rotaryStabilityFinal: ["leftRotaryStability", "rightRotaryStability"],
    };
  
    // Compute lowest (final) score for each test
    const updatedFinals = {};
    for (const [finalField, rawFields] of Object.entries(scoreGroups)) {
      const rawValues = rawFields
        .map((field) => parseFloat(fmsScoresheetData[field]))
        .filter((val) => !isNaN(val)); // Ignore blanks
  
      updatedFinals[finalField] = rawValues.length ? Math.min(...rawValues) : "";
    }
  
    // Compute total FMS score (sum of all final scores)
    const finalFields = Object.keys(scoreGroups);
    const total = finalFields.reduce((sum, field) => {
      const val = parseFloat(updatedFinals[field] ?? fmsScoresheetData[field]);
      return sum + (isNaN(val) ? 0 : val);
    }, 0);
  
    // Update all at once
    setFMSScoresheetData((prev) => ({
      ...prev,
      ...updatedFinals,
      totalScore: total,
    }));
  }, [
    fmsScoresheetData.deepSquat,
    fmsScoresheetData.leftHurdleStep,
    fmsScoresheetData.rightHurdleStep,
    fmsScoresheetData.leftInlineLunge,
    fmsScoresheetData.rightInlineLunge,
    fmsScoresheetData.leftShoulderMobility,
    fmsScoresheetData.rightShoulderMobility,
    fmsScoresheetData.leftActiveStraightLegRaise,
    fmsScoresheetData.rightActiveStraightLegRaise,
    fmsScoresheetData.trunkStabilityPushUp,
    fmsScoresheetData.leftRotaryStability,
    fmsScoresheetData.rightRotaryStability,
  ]);
  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted form:", fmsScoresheetData);
    setFMSScoresheetData({ ...initialFMSScoresheetState });
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
                {/* Deep Squat Section */}
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
                    <Form.Control
                      type="number"
                      placeholder="Final"
                      name="deepSquatFinal"
                      value={fmsScoresheetData.deepSquatFinal}
                      onChange={handleFormChange}
                    />
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
                    <Form.Control
                      type="number"
                      placeholder="Final"
                      name="hurdleStepFinal"
                      value={fmsScoresheetData.hurdleStepFinal}
                      onChange={handleFormChange}
                    />
                  </td>
                  <td>
                    <Form.Control type="text" placeholder="Comments" />
                  </td>
                </tr>

                {/* Inline Lunge Section */}
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
                    <Form.Control
                      type="number"
                      placeholder="Final"
                      name="inlineLungeFinal"
                      value={fmsScoresheetData.inlineLungeFinal}
                      onChange={handleFormChange}
                    />
                  </td>
                  <td>
                    <Form.Control type="text" placeholder="Comments" />
                  </td>
                </tr>

                {/* Shoulder Mobility Section */}
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
                    <Form.Control
                      type="number"
                      placeholder="Final"
                      name="shoulderMobilityFinal"
                      value={fmsScoresheetData.shoulderMobilityFinal}
                      onChange={handleFormChange}
                    />
                  </td>
                  <td>
                    <Form.Control type="text" placeholder="Comments" />
                  </td>
                </tr>

                {/* Shoulder Clearing Section */}
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
                  <td></td>{" "}
                  {/* Intentionally Left Blank. Leaves a space b/w score and comments */}
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
                    <Form.Control
                      type="number"
                      placeholder="Final"
                      name="activeStraightLegRaiseFinal"
                      value={fmsScoresheetData.activeStraightLegRaiseFinal}
                      onChange={handleFormChange}
                    />
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
                    <Form.Control
                      type="number"
                      placeholder="Final"
                      name="trunkStabilityPushUpFinal"
                      value={fmsScoresheetData.trunkStabilityPushUpFinal}
                      onChange={handleFormChange}
                    />
                  </td>
                  <td>
                    <Form.Control type="text" placeholder="Comments" />
                  </td>
                </tr>

                {/* Extension Clearing Section */}
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
                  <td></td>{" "}
                  {/* Intentionally Left Blank. Leaves a space b/w score and comments */}
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
                    <Form.Control
                      type="number"
                      placeholder="Final"
                      name="rotaryStabilityFinal"
                      value={fmsScoresheetData.rotaryStabilityFinal}
                      onChange={handleFormChange}
                    />
                  </td>
                  <td>
                    <Form.Control type="text" placeholder="Comments" />
                  </td>
                </tr>

                {/* Flexion Clearing Section */}
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
                  <td></td>{" "}
                  {/* Intentionally Left Blank. Leaves a space b/w score and comments */}
                  <td>
                    <Form.Control type="text" placeholder="Comments" />
                  </td>
                </tr>

                {/* Total Score */}
                <tr>
                  <td>Total Screen Score</td>
                  <td></td>
                  <td>
                    <Form.Control
                      type="number"
                      placeholder="Total Score"
                      name="totalScore"
                      value={fmsScoresheetData.totalScore}
                      readOnly
                    />
                  </td>
                  <td></td>
                </tr>
              </tbody>
            </Table>
            <Button onClick={handleSubmit}>Submit</Button>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default FMSScoresheet;
