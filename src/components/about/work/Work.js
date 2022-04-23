import React from 'react';
import {Paper, Typography} from "@mui/material";
import '../about.css'
import logo from "../../../assects/about/fala.svg";

function Work(props) {
    return (

        <div className='p-4'>

            <Paper elevation={3} sx={{width: '80%', marginLeft: '10%', marginBottom: 3, padding: 1}}
                   className={'rounded-2-2'}>
                <Typography color={'white'} fontSize={24} textAlign={'center'}>
                    Main Projects
                </Typography>

            </Paper>

            <Typography color={'white'} fontSize={20} textAlign={'center'}>
                <strong>Trade Finance</strong><br></br>
                <strong>GOLDENORE CDC</strong><br></br>
                <strong>Premia</strong><br></br>
                <strong>SMS Deliver</strong><br></br>
                <strong>Travel Tip</strong><br></br>
            </Typography>

        </div>


    );
}

export default Work;