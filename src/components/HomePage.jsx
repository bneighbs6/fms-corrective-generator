import React from "react";
import NewFMSCard from "./FMSCard/NewFMSCard";
import ArchivedFMSCard from "../archivedFMSCards/ArchivedFMSCard";

function HomePage() {
    return (
        <div className="header-div">
            <NewFMSCard />
            <ArchivedFMSCard />
        </div>
    );
}

export default HomePage;