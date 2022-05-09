import React from 'react';
import {Grid, Paper, Typography} from "@mui/material";
import LanguageSkill from "./LanguageSkill";

function Language(props) {
    return (
        <div className='p-4 '>
            <Grid container spacing={2} >
                <Grid item xs={12}>

                    <Paper elevation={3} sx={{width:'80%',marginLeft:'10%',marginBottom:3 ,padding:1}}  className={'rounded-2-2'}>
                        <Typography  color={'white'} fontSize={24} textAlign={'center'} >
                            Language skills
                        </Typography>
                    </Paper>
                    <Grid container
                          spacing={2}
                          justifyContent="center"
                          alignItems="center"
                          sx={{marginTop:2}} >
                        <Grid item xs={4}>
                            <LanguageSkill language={'polish'} stars={6}/>
                        </Grid>
                        <Grid item xs={4}>
                            <LanguageSkill  language={'english'} stars={4}/>
                        </Grid>
                        <Grid item xs={4}>
                            <LanguageSkill  language={'german'} stars={4}/>
                        </Grid>
                    </Grid>
                </Grid>


            </Grid>
        </div>
    );
}

export default Language;