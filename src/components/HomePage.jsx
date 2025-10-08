import react from "react";
import NewFMSCard from "./FMSCard/NewFMSCard";
import FMSScoresheet from "./FMSScoreSheet/FMSScoresheet";

function HomePage() {
    return (
        <div className="header-div">
            <NewFMSCard />
            <FMSScoresheet />
        </div>
    );
}

export default HomePage;