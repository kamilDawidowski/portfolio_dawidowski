import React from 'react';
import './header.css'
import {Grid} from "@mui/material";
import MenuButtoon from "./MenuButtoon";
function Header(props) {
    return (
        <div className='header'>
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


        </div>
    );
}

export default Header;