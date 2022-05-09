import React from 'react';
import {Rating, Typography} from "@mui/material";

function LanguageSkill(props) {
    return (
       <>
           <Typography variant={"h4"} sx={{color:'white'}}>{props.language.toUpperCase()}</Typography>
           <Rating name={props.language+'raiting'} value={props.stars} readOnly />
       </>



    );
}

export default LanguageSkill;