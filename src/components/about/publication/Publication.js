import React from 'react';
import {Grid, Paper, Typography} from "@mui/material";

function Publication(props) {
    return (
        <div className='p-4'>
        <Grid container spacing={2}>
            <Grid item xs={12}>

                    <Paper elevation={3} sx={{width:'80%',marginLeft:'10%',marginBottom:3 ,padding:1}}  className={'rounded-2-2'}>
                        <Typography  color={'white'} fontSize={24} textAlign={'center'} >
                            My Begins
                        </Typography>

                    </Paper>

                    <Typography  color={'white'} fontSize={20}>
                        My adventure with computer science began in the 6th High School in Gdynia on the mathematics, physics and information technology profile.
                        Then I started my studies at the WAT  in the field of information technology, specializing in information systems.
                    </Typography>

            </Grid>
            <Grid item xs={12}>

            </Grid>

        </Grid>
        </div>
    );
}

export default Publication;