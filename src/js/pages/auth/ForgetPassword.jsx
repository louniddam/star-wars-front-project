import React from 'react'
import {Stack, TextField, Grid, Typography, Button} from '@mui/material';
import { useNavigate } from 'react-router';
import axios from "axios"

const ForgetPassword = () => {

    let navigate = useNavigate();

    const [email, setEmail] = React.useState("")
    const [emailIsSent, setEmailIsSent] = React.useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        try {
            axios.post("https://api.pote.dev/auth/forgot_password", {email})
            .then(res => {
                console.log(res);
                if(res)
                    setEmailIsSent(true)
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
              Forgotten password
            </Typography>
            <TextField
              id="Email"
              label="Email"
              variant="outlined"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button variant="outlined" onClick={e => handleSubmit(e)}>Send email</Button>
              <Typography variant="body1" color="#1976D2" onClick={() => navigate("/login")} style={{ cursor: "pointer" }}>Back to Login</Typography>
              {emailIsSent && 
              <Typography variant="body1" color="green" style={{ cursor: "pointer" }}>An email have been sent!</Typography>
              }
          </Stack>
        </Grid>
      </Grid>
    );
}

export default ForgetPassword