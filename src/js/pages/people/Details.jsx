import { Button, Card, CardContent, Stack, Typography } from "@mui/material";
import React from 'react';
import { useNavigate } from 'react-router';
import { useParams } from 'react-router-dom';
import { useGetPoepleByIdQuery } from "../../../features/starwars/apiSlice";



const PeopleDetails = () => {

    const navigate = useNavigate()

    const {id} = useParams()

    const { data, error, isLoading } = useGetPoepleByIdQuery(id)

    return(
        <Stack spacing={3} justifyContent="center" alignItems="center" style={{ minHeight: "100vh" }}>
            {
                isLoading ? 
                    <Typography variant="h5" color="primary">Data is loading..</Typography>
                :
                    <Stack spacing={3} justifyContent="center" alignItems="center" style={{ marginTop: 13 }}>
                      <Button variant="outlined" color="primary" onClick={() => navigate("/characters")}>Go Back</Button>
                      <Typography variant="h6">Character details: </Typography>
                        <Stack spacing={2}>
                            {
                                data && 
                                        <Card sx={{ minWidth: 275 }} key={data.name}>
                                        <CardContent>
                                          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                            name: {data.name}
                                          </Typography>
                                          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                            height: {data.height}
                                          </Typography>
                                          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                            gender: {data.gender}
                                          </Typography>
                                        </CardContent>
                                      </Card>
                                    
                            }
                        </Stack>
                    </Stack>
            }
        </Stack>
    )
}

export default PeopleDetails