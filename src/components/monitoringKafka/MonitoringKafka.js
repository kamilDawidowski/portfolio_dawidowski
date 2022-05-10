import React, {useEffect} from 'react';
import {Divider, Grid} from "@mui/material";
import LeftMonitoring from "./leftMonitoring/LeftMonitoring";
import {Provider} from "react-redux";
import {useSelector, useDispatch} from 'react-redux'
import store from './../../redux/myProject/store'
import {addMetric} from "../../redux/myProject/feature/counterSlice";

function MonitoringKafka(props) {
    const count = useSelector(state => state.metrics.value)
    const tab = useSelector(state => state.metrics.arr)
    const dispatch = useDispatch()

    useEffect(()=>{
        console.log(tab)
    },[tab])

    return (

            <div className='ps-4 pe-4'>
                <Grid container spacing={2} justifyContent="center"
                      alignItems="flex-start">


                    <Grid item xs={12} md={12} lg={12} sx={{width: '100%'}}>
                        <span>{count}</span>
                        <button
                            aria-label="Increment value"
                            onClick={() => dispatch(addMetric({kamil:"sss"}))}
                        >
                            Increment
                        </button>
                    </Grid>
                    <Grid item xs={12} md={6} lg={3}>
                        <LeftMonitoring/>
                    </Grid>

                    <Grid container item xs={12} md={6} lg={6} justifyContent="center"
                          alignItems="flex-start">


                        <Grid item xs={12} md={12} lg={12} sx={{backgroundColor: 'red', marginBottom: 2}}>
                            2
                        </Grid>
                        <Grid item xs={12} md={6} lg={6} sx={{backgroundColor: 'black'}}>
                            3
                        </Grid>
                        <Grid item xs={12} md={6} lg={6} sx={{backgroundColor: 'blue', marginLeft: 2}}>
                            4
                        </Grid>


                    </Grid>
                    <Grid item xs={12} md={6} lg={3}>
                        <LeftMonitoring/>
                    </Grid>

                </Grid>


            </div>

    );
}

export default MonitoringKafka;