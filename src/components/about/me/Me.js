import React from 'react';
import {Grid, Stack, Typography} from "@mui/material";
import logo from "../work/Goldenore_Logo_Jasne.png";

function Me(props) {
    return (

        <Grid container spacing={2} >
            <Grid item xs={12} md={6} lg={6} sx={{padding:3}}>
                <Stack spacing={2} sx={{padding:3 }}>
                    <Typography  color={'white'} fontSize={20}>
                        Hi ! I am <strong>Kamil</strong>  and I am a Full Stack developer at Goldenore.
                        I have been working here since mid-2021. I am constantly developing and taking up new challenges.
                    </Typography>
                </Stack>
            </Grid>
            <Grid item xs>

                <img

                    width={'90%'}
                    src={logo}
                    loading="lazy"
                />

            </Grid>

        </Grid>

    );
}

export default Me;