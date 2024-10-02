// This will be the page which will be opened when the users open the application
import React from "react";
import Introduction from "./Intro";
import Services from "./Services/services";
import InfoCard from "./InfoCard";

function LandingPage(){
    return(
        <div>
            <InfoCard/>
            <Services/>
        </div>
    );
}
export default LandingPage;