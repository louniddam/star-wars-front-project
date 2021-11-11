import React from 'react'
import {Stack, TextField, Grid, Typography, Button} from '@mui/material';
import { useSelector, useDispatch } from 'react-redux'
import RobotIcon from "../../assets/robotIcon.png"

const Profil = () => {

    const username = useSelector(state => state.auth.userInfos.username)
    const firstname = useSelector(state => state.auth.userInfos.firstname)
    const lastname = useSelector(state => state.auth.userInfos.lastname)
    const email = useSelector(state => state.auth.userInfos.email)

    return (
        <Stack spacing={2} style={{ height: "100vh" }} justifyContent="space-around" alignItems="center">
            <Stack>
                <Typography variant="h3">Profil</Typography>
            </Stack>
            <Stack spacing={2} justifyContent="center" alignItems="center">
                <img src={RobotIcon} style={{ width: 150, height: 150 }} />
                <Typography variant="body1">{`Username: ${username} `}</Typography>
                <Typography variant="body1">{`Firstname: ${firstname} `}</Typography>
                <Typography variant="body1">{`Lastname: ${lastname} `}</Typography>
                <Typography variant="body1">{`Email: ${email} `}</Typography>
            </Stack>
        </Stack>
    );
}

export default Profil