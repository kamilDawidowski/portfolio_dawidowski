import React from 'react';
import Welcome from "./components/welcome/Welcome";
import Skills from "./components/skills/Skills";
import About from "./components/about/About";
import Wave from "./components/wave/Wave";

function MainSite() {
    return (
        <>
            <Welcome/>
            <Skills/>
            <About/>
            <Wave/>
        </>
    );
}

export default MainSite;