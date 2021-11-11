import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Stack, Typography, IconButton } from "@mui/material"
import { useNavigate } from 'react-router';
import PlanetIcon from "../../assets/planetIcon.png"
import RobotIcon from '../../assets/robotIcon.png'
import StarshipIcon from '../../assets/starshipIcon.png'


const Home = () => {

    const navigate = useNavigate()

    const username = useSelector(state => state.auth.userInfos.username)

    return(
        <Stack spacing={3} justifyContent="center" alignItems="center" style={{ minHeight: "100vh" }}>
            {
                username ? 
                <Stack spacing={2}>
                    <Typography variant="h6">Welcome on our StarWars website!</Typography>
                    <Typography variant="body1">{`Hello ${username} , you can see you profil`} <span onClick={() => navigate("/profil")} style={{ color: "#1976D2", cursor: "pointer", textDecoration: "underline" }}>here!</span></Typography>
                </Stack>
                :
                <Stack spacing={2} alignSelf="center" justifySelf="center">
                    <Typography variant="h6">Welcome on our StarWars website!</Typography>
                    <Typography variant="body1">To have access to all feature, please <span onClick={() => navigate("/login")} style={{ color: "#1976D2", cursor: "pointer", textDecoration: "underline" }}>Login!</span></Typography>
                </Stack>
            }
            {
                username &&
                <Stack spacing={1}>
                    <Typography variant="h6">Here is a list of the different pages:</Typography>
                    <Stack spacing={2} direction="row">
                        <Stack spacing={1} alignItems="center">
                            <IconButton onClick={() => navigate("/planets")}>
                                <img src={PlanetIcon} style={{ height: "50px", width: "60px" }} />
                            </IconButton>
                            <Typography variant="body1">Planets</Typography>
                        </Stack>
                        <Stack spacing={1} alignItems="center">
                            <IconButton onClick={() => navigate("/characters")}>
                                <img src={RobotIcon} style={{ height: "50px", width: "70px" }} />
                            </IconButton>
                            <Typography variant="body1">Characters</Typography>
                        </Stack>
                        <Stack spacing={1} alignItems="center">
                            <IconButton onClick={() => navigate("/startships")}>
                                <img src={StarshipIcon} style={{ height: "50px", width: "70px" }} />
                            </IconButton>
                            <Typography variant="body1">Starships</Typography>
                        </Stack>
                    </Stack>
                </Stack>
            }
        </Stack>
    )
}

export default Home