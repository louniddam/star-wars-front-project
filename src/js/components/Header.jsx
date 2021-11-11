import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Stack } from "@mui/material"
import { useNavigate } from 'react-router';
import { useSelector, useDispatch } from 'react-redux'



const Header = () => {

    let navigate = useNavigate();
    const username = useSelector(state => state.auth.userInfos.username)

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
            StarWars
          </Typography>
          {
            username ?
            <Stack spacing={1} direction="row" justifyContent="center" alignItems="center">
              <Typography onClick={() => navigate("/profil")} style={{ cursor: "pointer" }}>{username}</Typography>
              <Button color="inherit" onClick={() => navigate("/")}>Logout</Button>
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