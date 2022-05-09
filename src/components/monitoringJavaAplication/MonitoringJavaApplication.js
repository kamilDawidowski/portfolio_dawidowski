import React from 'react';
import {Divider, Grid} from "@mui/material";
import LeftMonitoring from "./leftMonitoring/LeftMonitoring";

function MonitoringJavaApplication(props) {
    return (
        <div className='ps-4 pe-4'>
            <Grid container spacing={4}
                  justifyContent="center"
                  alignItems="center" >


                <Grid item xs={12} md={12} lg={12} sx={{width:'100%'}}>
s
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                   <LeftMonitoring/>
                </Grid>

                <Grid item xs={12} md={6} lg={4} sx={{backgroundColor:'black'}}>
                    {/*<Grid container spacing={4}*/}
                    {/*>*/}
                    {/*    <Grid item xs={12} md={12} lg={12} sx={{backgroundColor:'black'}}>*/}
                    {/*        2*/}
                    {/*    </Grid>*/}
                    {/*    <Grid item xs={12} md={6} lg={6} sx={{backgroundColor:'black'}}>*/}
                    {/*        3*/}
                    {/*    </Grid>*/}
                    {/*    <Grid item xs={12} md={6} lg={6} sx={{backgroundColor:'black'}}>*/}
                    {/*        4*/}
                    {/*    </Grid>*/}
                    {/*</Grid>*/}

                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    5
                </Grid>

            </Grid>


        </div>
    );
}

export default MonitoringJavaApplication;