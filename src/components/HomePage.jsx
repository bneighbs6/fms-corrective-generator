import React from "react";
import NewFMSCard from "./FMSCard/NewFMSCard";
import ArchivedFMSCard from "./archivedFMSCards/ArchivedFMSCard";

// TODO: 
// Follow instructions from Chegg skills on how to set this app up

function HomePage() {
    return (
        <div className="header-div">
            <NewFMSCard />
            <ArchivedFMSCard />
        </div>
    );
}

export default HomePage;