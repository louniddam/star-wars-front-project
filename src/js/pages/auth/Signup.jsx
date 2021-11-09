import React from 'react'
import {Stack, TextField, Grid, Typography, Button} from '@mui/material';
import axios from "axios"
import { useNavigate } from 'react-router';

const Signup = () => {

    let navigate = useNavigate();


    const [username, setUsername] = React.useState("")
    const [firstname, setFirstname] = React.useState("")
    const [lastname, setLastname] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")

    const HandleSubmit = (e) => {
        e.preventDefault()
        try {
            axios.post("https://api.pote.dev/users", {username, password, lastname, firstname, email})
            .then(res => {
                console.log(res);
                if(res)
                    navigate("/login")
            })
        } catch (error) {
            console.log(error);
        }
    }

    return (
      <Grid
        cotnainer
        item
        xs={12}
        display="flex"
        justifyContent="center"
        alignItems="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid item xs={6}>
          <Stack direction="column" spacing={2}>
            <Typography textAlign="center" variant="h3" color="#1976D2">
              Signup
            </Typography>
            <TextField
              id="Username"
              label="Username"
              variant="outlined"
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              id="Firstname"
              label="Firstname"
              variant="outlined"
              onChange={(e) => setFirstname(e.target.value)}
            />
            <TextField
              id="Lastname"
              label="Lastname"
              variant="outlined"
              onChange={(e) => setLastname(e.target.value)}
            />
            <TextField
              id="Email"
              label="Email"
              variant="outlined"
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              id="Password"
              label="Password"
              type="password"
              variant="outlined"
              onChange={(e) => setPassword(e.target.value)}
              inputProps={{
                autoComplete: 'new-password',
                form: {
                  autocomplete: 'off',
                }}}
            />
            <Button variant="outlined" onClick={(e) => HandleSubmit(e)}>Signup</Button>
              <Typography variant="body1" color="#1976D2" onClick={() => navigate("/login")} style={{ cursor: "pointer" }}>Already have an account?</Typography>
          </Stack>
        </Grid>
      </Grid>
    );
}

export default Signup