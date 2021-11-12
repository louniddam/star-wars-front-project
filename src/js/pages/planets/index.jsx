import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Stack, Typography, Pagination, Box, Card, CardActions, CardContent, Button } from "@mui/material"
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom'
import { useGetPlanetsQuery } from "../../../features/starwars/apiSlice"



const PlanetList = () => {

    const navigate = useNavigate()
    const [page, setPage] = React.useState(1);
    const { data, error, isLoading } = useGetPlanetsQuery(page)

 
    const handleChange = (page) => {
      setPage(page)
    };


    return(
        <Stack spacing={3} justifyContent="center" alignItems="center" style={{ minHeight: "100vh" }}>
            {
                isLoading ? 
                    <Typography variant="h5" color="primary">Data is loading..</Typography>
                :
                    <Stack spacing={3} justifyContent="center" alignItems="center" style={{ marginTop: 13 }}>
                        <Stack spacing={2}>
                            {
                                data && data.results.map(item => {
                                    return(
                                        <Card sx={{ minWidth: 275 }} key={item?.name}>
                                        <CardContent>
                                          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                            name: {item?.name}
                                          </Typography>
                                          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                            diameter: {item?.diameter}
                                          </Typography>
                                          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                            climat: {item?.climat}
                                          </Typography>
                                        </CardContent>
                                        <CardActions>
                                          <Link to={`/planets/${item?.url.split("/")[5]}`} style={{ textDecoration: "none" }}>
                                            <Button size="small">Learn More</Button>
                                          </Link>
                                        </CardActions>
                                      </Card>
                                    )
                                })
                            }
                        </Stack>
                        <Stack>
                          <Pagination count={Math.ceil(data.count / 10)}  color="primary" page={page} onChange={(_, page) => handleChange(page)} />
                        </Stack>
                    </Stack>
            }
        </Stack>
    )
}

export default PlanetList