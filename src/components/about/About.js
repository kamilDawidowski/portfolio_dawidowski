import React from 'react';
import {Box, Grid, Typography} from "@mui/material";
import './about.css'
import svg from './../../assects/about/waves.svg'
import Animation from "./animation/Animation";
import School from "./school/School";
import DescriptionCard from "./DescriptionCard";
import Education from "./Education";

function About(props) {
    return (

        <div className='about'>
            <div className="custom-shape-divider-top-1648074940">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
                     preserveAspectRatio="none">
                    <path
                        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                        className="shape-fill"></path>
                </svg>
            </div>

            <Typography className={'text-white text-center text'} fontSize={60}>About me</Typography>


            <Box sx={{margin: 5}}>
                <Grid container spacing={2} justifyContent="center">
                    <Grid item xs={12} md={6} lg={4} >
                    <DescriptionCard title={"Education"} description={<Education/>}/>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                        <DescriptionCard title={"Work"}/>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                        <DescriptionCard title={"Projects"}/>
                    </Grid>
                </Grid>
            </Box>


      </div>

    );
}

export default About;
