import React from 'react';
import  './about.css'
import {Typography} from "@mui/material";
function DescriptionCard(props) {
    return (
        <div className={'about-grid'}>
            <div className='about-grid-title'>
                <Typography className='text' fontSize={25}>{props.title}</Typography>
            </div>
            {props.description}


        </div>
    );
}

export default DescriptionCard;