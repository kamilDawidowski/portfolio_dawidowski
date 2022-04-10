import React from 'react';
import './header.css'
import {AppBar, Box, Button, Grid, IconButton, Toolbar, Typography} from "@mui/material";
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import EmailIcon from '@mui/icons-material/Email';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import MenuButtoon from "./MenuButtoon";

function Header(props) {
    return (
        <div className='header'>
        {/*//     <Box sx={{ flexGrow: 1 }}>*/}
        {/*//     <AppBar position="static">*/}
        {/*//*/}
        {/*//     <Toolbar className={'header-bg'}>*/}

                <div className={'menu-header'}>
                    <Grid container spacing={1}>
                        <Grid item xs={3} md={3} lg={3}>
                          <MenuButtoon text={"About"}/>
                        </Grid>
                        <Grid item xs={3} md={3} lg={3}>
                            <MenuButtoon text={"Project"}/>
                        </Grid>
                        <Grid item xs={3} md={3} lg={3}>
                            <MenuButtoon text={"Work"}/>
                        </Grid>
                        <Grid item xs={3} md={3} lg={3}>
                            <MenuButtoon text={"Contact"}/>
                        </Grid>
                    </Grid>

                </div>


           {/*</Toolbar>*/}
        {/*//     </AppBar>*/}
        {/*//     </Box>*/}

        </div>
    );
}

export default Header;