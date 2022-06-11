import React from 'react';
import Welcome from "./components/welcome/Welcome";
import Skills from "./components/skills/Skills";
import About from "./components/about/About";
import Wave from "./components/wave/Wave";
import Animation from "./components/animation/Animation";


function MainSite() {
    return (
        <>
            <Welcome/>
            <Skills/>
            <About/>
            <Wave/>
            <Animation/>
        </>
    );
}

export default MainSite;