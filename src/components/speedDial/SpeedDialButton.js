import React from 'react';
import {Box} from "@mui/material";
import SpeedDial from "@mui/material/SpeedDial";
import EmailIcon from "@mui/icons-material/Email";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";
const actions = [
    { icon: <FileCopyIcon />, name: 'Copy' },
    { icon: <PrintIcon />, name: 'Save' },
    { icon: <PrintIcon />, name: 'Print' },
    { icon: <ShareIcon />, name: 'Share' },
];
function SpeedDialButton(props) {
    return (

        <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1}}>
            <SpeedDial
                ariaLabel="SpeedDial basic example"
                sx={{ position: 'absolute', bottom: 16, right: 16 }}
                icon={<EmailIcon sx={{color:"rgb(7,15,52)"}}/>}
                FabProps={{
                    sx: {
                        bgcolor: '#5ece87',
                        '&:hover': {
                            bgcolor: '#ffffff',
                        }
                    }
                }}
            >
                {actions.map((action) => (
                    <SpeedDialAction
                        key={action.name}
                        icon={action.icon}
                        tooltipTitle={action.name}
                    />
                ))}
            </SpeedDial>
        </Box>

    );
}

export default SpeedDialButton;