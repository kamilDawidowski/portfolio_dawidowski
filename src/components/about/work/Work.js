import React from 'react';
import {Paper, Typography} from "@mui/material";
import '../about.css'

function Work(props) {
    return (

      <div className='p-4'>

          <Paper elevation={3} sx={{width:'80%',marginLeft:'10%',marginBottom:3 ,padding:1}}  className={'rounded-2-2'}>
              <Typography  color={'white'} fontSize={24} textAlign={'center'} >
                  My Begins
              </Typography>

          </Paper>

          <Typography  color={'white'} fontSize={20}>
              Hi ! I am <strong>Kamil</strong>  and I am a Full Stack developer at Goldenore.
              I have been working here since mid-2021. I am constantly developing and taking up new challenges.
          </Typography>
      </div>




    );
}

export default Work;