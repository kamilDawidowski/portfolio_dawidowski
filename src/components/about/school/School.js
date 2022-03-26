import React from 'react';
import {Grid} from "@mui/material";
import student from "../../../assects/about/student-anim.png";

function School(props) {
    return (
        <Grid container spacing={2}>
            <Grid item xs={4}>
                <img
                    className={"anim-student"}
                    width={300}
                    src={student}
                    loading="lazy"
                />

            </Grid>
            <Grid item xs={8}>


            </Grid>
            <Grid item xs={4}>

            </Grid>
            <Grid item xs={8}>

            </Grid>
        </Grid>
    );
}

export default School;
