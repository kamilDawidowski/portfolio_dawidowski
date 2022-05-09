import React from 'react';
import {
    Avatar, Chip,
    Grid,
    IconButton,
    ListItem,
    ListItemAvatar,
    ListItemButton,
    ListItemText,
    Paper,
    Typography
} from "@mui/material";
import ScienceIcon from '@mui/icons-material/Science';
import {Link} from "react-router-dom";
import './personalProject.css'
function PersonalProject() {
    return (
        <div className='p-4'>
            <Grid container spacing={2}>
                <Grid item xs={12}>

                    <Paper elevation={3} sx={{width:'80%',marginLeft:'10%',marginBottom:3 ,padding:1}}  className={'rounded-2-2'}>
                        <Typography  color={'white'} fontSize={24} textAlign={'center'} >
                            Personal Projects
                        </Typography>

                    </Paper>
                    <Link to="/personalProject/java-monitoring" style={{ textDecoration: 'none' }}>
                    <ListItem
                        secondaryAction={
                            <IconButton edge="end" aria-label="begin">
                                <Chip label="2022" color="primary" sx={{color:'white'}} />


                            </IconButton>
                        }>

                        <ListItemButton>
                            <ListItemAvatar>
                                <Avatar>
                                    <ScienceIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText className={'text-white text-decoration-none text-none'}
                                          sx={{color:'white',textDecoration:'none'}}
                                          primary="Monitoring java application using Grafana and Prometheus"

                            />
                        </ListItemButton>

                    </ListItem>
                    </Link>
                </Grid>
                <Grid item xs={12}>

                </Grid>

            </Grid>
        </div>
    );
}

export default PersonalProject;