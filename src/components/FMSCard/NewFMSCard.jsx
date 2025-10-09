import React from "react";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./newFMSCard.css"; // All extra styling not from Bootstrap is here

function NewFMSCard() {
  const navigate = useNavigate(); 
    // This will be placed on the home page as an option for the user -> it will bring the user to a new page with an FMS Score Sheet
    return (
      <div className="container">
        <Card className="new-fms-card">
          <Card.Body>
            <Card.Title>New FMS Score Sheet</Card.Title>
            <Card.Text>This is for a new FMS with a client you haven't seen before</Card.Text>
            <Button onClick={() => navigate("/new-fms")}>Go to New Web Page with FMS Scoresheet</Button>
          </Card.Body>
        </Card>
      </div>
    );
}

export default NewFMSCard;
