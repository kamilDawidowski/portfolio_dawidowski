import React from 'react';
import {Grid} from "@mui/material";
import WelcomeImage from "../welcome/WelcomeImage";
import SkillImage from "./SkillImage";
import kafka from "./../../assects/skill/kafka-white.png"

import spring from "./../../assects/skill/spring-white.png"
import react_2 from "./../../assects/skill/react-white.png"
import azzure from "./../../assects/skill/azzure-white.png"
import grafana from "./../../assects/skill/grafana-white.png"
import java from "./../../assects/skill/java-white.png"

function Skills() {
    return (
        <Grid container spacing={4} sx={{marginTop: 4, marginBottom:10}}>

            <Grid item xs={12} md={6} lg={4}>
                <SkillImage src={spring}/>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
                <SkillImage src={kafka}/>

            </Grid>
            <Grid item xs={12} md={6} lg={4}>
                <SkillImage src={react_2}/>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
                <SkillImage src={azzure}/>
            </Grid>
            <Grid item xs={12} md={6} lg={5}>
                <SkillImage src={grafana}/>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
                <SkillImage src={java}/>
            </Grid>
        </Grid>

    );
}

export default Skills;