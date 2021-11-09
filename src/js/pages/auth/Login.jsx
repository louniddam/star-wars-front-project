import React from 'react'
import {Stack, TextField, Grid, Typography, Button} from '@mui/material';
import { useNavigate } from 'react-router';


const Login = () => {

    let navigate = useNavigate();

    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")

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
              Login
            </Typography>
            <TextField
              id="Email"
              label="Email"
              variant="outlined"
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              id="Password"
              label="Password"
              variant="outlined"
              type="password"
              inputProps={{
                autoComplete: 'new-password',
                form: {
                  autocomplete: 'off',
                }}}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button variant="outlined">Login</Button>
              <Typography variant="body1" color="#1976D2" onClick={() => navigate("/forget-password")} style={{ cursor: "pointer" }}>Forgot password?</Typography>
              <Typography variant="body1" color="#1976D2" onClick={() => navigate("/signup")} style={{ cursor: "pointer" }}>
                You don't have an account? Sign-up
              </Typography>
          </Stack>
        </Grid>
      </Grid>
    );
}

export default Login