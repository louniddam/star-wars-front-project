import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import HeaderIcon from "../../assets/headerIcon.png"
import { Stack } from "@mui/material"
import { useNavigate } from 'react-router';
import { useSelector, useDispatch } from 'react-redux'
import { xsrfToken, accessToken, refreshToken, userInfos } from '../../features/auth/authSlice'


const Header = () => {

    let navigate = useNavigate();
    const dispatch = useDispatch();
    const username = useSelector(state => state.auth.userInfos.username)

    const handleLogout = () => {
      dispatch(xsrfToken(""))
      dispatch(accessToken(""))
      dispatch(refreshToken(""))
      dispatch(userInfos({
        username: "",
        lastname: "",
        firstname: "",
        email: ""
      }))
      navigate("/")
    }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
            <img src={HeaderIcon} style={{ height: "auto", width: "100px" , marginBottom: 5, marginRight: 30 }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
            StarWars
          </Typography>
          {
            username ?
            <Stack spacing={1} direction="row" justifyContent="center" alignItems="center">
              <Typography onClick={() => navigate("/profil")} style={{ cursor: "pointer" }}>{username}</Typography>
              <Button color="inherit" onClick={() => handleLogout()}>Logout</Button>
            </Stack>
            :
            <Button color="inherit" onClick={() => navigate("/login")}>Login</Button>
          }
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header