import React from 'react';
import {Grid, Paper, Typography} from "@mui/material";
import  '../about.css'
import logo from './az900.png'
import Me from "../me/Me";
function Cert(props) {
    return (
        <div className='p-4'>

            <Paper elevation={3} sx={{width:'80%',marginLeft:'10%',marginBottom:3 ,padding:1}}  className={'rounded-2-2'}>
                <Typography  color={'white'} fontSize={24} textAlign={'center'} >
                    Certification
                </Typography>

            </Paper>
            <Grid container spacing={2} justifyContent="center">
                <Grid item xs={6} md={6} lg={6} >
                    <img
                        width={'80%'}
                        src={logo}
                        loading="lazy"
                    />
                </Grid>
                <Grid item xs={12} md={12} lg={12} >

                </Grid>
            </Grid>


        </div>
    );
}

export default Cert;