import React from "react";
import Hero from "../components/Hero";
import Portfolio from "../components/Portfolio";

function PortPage(props) {

    return(
        <>
        <Hero 
            title={props.title}
            subtitle={props.subtitle}
        />
        <Portfolio></Portfolio>
        </>
    )
}

export default PortPage;