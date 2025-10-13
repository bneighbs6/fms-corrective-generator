import React from "react";
import "./ArchivedFMSCard.css";
import { Button, Card } from "react-bootstrap";

function ArchivedFMSCard() {
    return (
      <Card>
        <Card.Body>
          <Card.Title>Archived FMS Scoresheets</Card.Title>
          <Card.Text>Click below to view archived FMS Scoresheets</Card.Text>
          <Button onClick={() => console.log("Archived FMS Button Clicked")}>Archived FMS Scoresheets</Button>
        </Card.Body>
      </Card>
    );
}

export default ArchivedFMSCard; 