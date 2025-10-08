import React from "react";
import { Card, Table, Form, Container } from "react-bootstrap";

function FMSScoresheet() {
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
                    <Form.Control type="number" placeholder="Raw" />
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
                <hr />
                {/* Total Testing Score */}
                <tr>
                  <td>Total Screen Score</td>
                  <td>
                    <Form.Control type="number" placeholder="Final Test Score" />
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
