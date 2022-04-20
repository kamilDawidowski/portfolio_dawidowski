import React from 'react';
import {Paper, Typography} from "@mui/material";
import '../about.css'
import img from '../../../assects/about/portfolio_2.png'
import logo from "../certification/az900.png";
function Projects(props) {
    return (
        <div className='p-4'>

            <Paper elevation={3} sx={{width:'80%',marginLeft:'10%',marginBottom:3 ,padding:1}}  className={'rounded-2-2'}>
                <Typography  color={'white'} fontSize={24} textAlign={'center'} >
                    My Begins
                </Typography>

            </Paper>

            <Typography  color={'white'} fontSize={20}>
                My adventure with computer science began in the 6th High School in Gdynia on the mathematics, physics and information technology profile.
                Then I started my studies at the WAT  in the field of information technology, specializing in information systems.
                During my studies, I did an internship at Accenture as a Junior Java Developer.
                I graduated with an engineering degree. I am currently studying for a master's degree in computer science with a specialization in web applications.
            </Typography>


        </div>
    );
}

export default Projects;