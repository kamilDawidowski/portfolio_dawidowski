import React, {useEffect} from 'react';
import './welcome.css'
import {Box, Stack, Typography} from "@mui/material";
import WelcomeImage from "./WelcomeImage";

function Welcome(props) {

    //Welcome JAVA-SCRIPT
    useEffect(() => {
        let tabWelcome = ["Welcome, I'am", "Witaj, jestem", "Guten Tag, ich bin"]
        let index = 0;
        setTimeout(() => startCount(index), 500);

        function startCount(value) {
            if (value != tabWelcome.length) {
                setTimeout(() => changeWelcome(index), 500);
            }
        }

        function changeWelcome(value) {
            document.getElementById("welcome").innerText = tabWelcome[value]
            index++
            startCount(index)
        }


    }, [])


    return (
        <Box className='welcome'>
            <Stack spacing={2} >
                <Typography id={'welcome'} className={'text-center'} ></Typography>
                <Typography variant={"h4"} className={'text-center'}>Kamil Dawidowski </Typography>
                <Typography variant={"body2"} className={'text-center '}>Fullstack Developer </Typography>

            </Stack>
        </Box>
    );
}

export default Welcome;