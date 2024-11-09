import React from 'react'
import { Button } from 'react-bootstrap';
import Grid from "@mui/material/Grid2";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
function WishList() {
  return (
    <div className="container mt-5">
       <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
         <Grid item xs={2} sm={4} md={4}>
                <Card sx={{ width: 300, height: 350, boxSizing: 'border-box' }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
                    alt="Paella dish"
                    // className="p-4"
                    sx={{
                      objectFit: "contain", // Ensures the entire image fits within the container
                      width: "100%",
                      height: 200,
                      marginTop: 3,
                      padding:2
                    }}
                  />
                  <CardContent>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.primary", textAlign:"center"}}
                    >
                     Fjallraven - Foldsack No…ckpack, Fits 15 Laptops
                    </Typography>
                   
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary", textAlign:"center" }}
                    >
                      
                    </Typography>
                    <Button
                     variant="danger"
                    >Add To cart</Button>
                  </CardContent>
                </Card>
              </Grid>
      </Grid>
        
  </div>
  )
}

export default WishList