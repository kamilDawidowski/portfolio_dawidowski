import React from 'react';
import {
    Avatar,
    Grid,
    ListItem,
    ListItemAvatar,
    ListItemButton,
    ListItemText,
    Paper,
    Typography
} from "@mui/material";
import MenuBookIcon from '@mui/icons-material/MenuBook';
import './animation.css'
import {Link} from "react-router-dom";

function Publication(props) {


    return (
        <div className='p-4'>
            <Grid container spacing={2}>
                <Grid item xs={12}>

                    <Paper elevation={3} sx={{width: '80%', marginLeft: '10%', marginBottom: 3, padding: 1}}
                           className={'rounded-2-2'}>
                        <Typography color={'white'} fontSize={24} textAlign={'center'}>
                            Publications
                        </Typography>

                    </Paper>
                    <Link to="/publication/impact-kafka-on-docker" style={{textDecoration: 'none'}}>
                        <ListItem>
                            <ListItemButton>
                                <ListItemAvatar>
                                    <Avatar>
                                        <MenuBookIcon/>
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText className={'text-white'}
                                              sx={{color: 'white'}}
                                              primary="The impact of docker on the performance of kafka connect "

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

export default Publication;