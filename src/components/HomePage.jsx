import React from "react";
import NewFMSCard from "./FMSCard/NewFMSCard";
import ArchivedFMSCard from "../archivedFMSCards/ArchivedFMSCard";

// TODO: NewFMSCard needs to have the final score auto tallied by the test's raw scores
// Develop backend in order to store data for ArchivedFMSCard
// Follow instructions from Chegg skills on how to set up b/e

function HomePage() {
    return (
        <div className="header-div">
            <NewFMSCard />
            <ArchivedFMSCard />
        </div>
    );
}

export default HomePage;