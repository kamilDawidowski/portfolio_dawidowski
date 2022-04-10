import React from 'react';
import logo from './Goldenore_Logo_Jasne.png'
import {Grid, Typography} from "@mui/material";
function Work(props) {
    return (

        <Grid container spacing={2}>
            <Grid item xs={7}>
                <Typography sx={{ fontSize: 14 }} color={'white'} gutterBottom>
                    Word of the Day
                </Typography>
            </Grid>
            <Grid item xs={5}>
                <img

                    width={'90%'}
                    src={logo}
                    loading="lazy"
                />
            </Grid>

        </Grid>



    );
}

export default Work;