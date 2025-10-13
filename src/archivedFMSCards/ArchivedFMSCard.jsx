import React from "react";
import "./ArchivedFMSCard.css";
import { Button, Card, Container } from "react-bootstrap";

function ArchivedFMSCard() {
    return (
      <div>
        <Container className="archived-fms-container">
          <Card className="archived-fms-card">
            <Card.Body>
              <Card.Title>Archived FMS Scoresheets</Card.Title>
              <Card.Text>
                Click below to view archived FMS Scoresheets
              </Card.Text>
              <Button
                onClick={() => console.log("Archived FMS Button Clicked")}
              >
                Archived FMS Scoresheets
              </Button>
            </Card.Body>
          </Card>
        </Container>
      </div>
    );
}

export default ArchivedFMSCard; 