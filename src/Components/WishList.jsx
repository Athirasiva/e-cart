import React from 'react'
import { Button } from 'react-bootstrap';
import Grid from "@mui/material/Grid2";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from '../redux/slice/cartSlice';
import { removeFromWishList } from '../redux/slice/wishListSlice';

function WishList() {
  const WishListItems = useSelector((state)=>state.wishlistReducer);
  const dispatch = useDispatch()
  const handleCart  =(product)=>{
    dispatch(addToCart(product))
    dispatch(removeFromWishList(product.id))
  }
  return (
    <div className="container mt-5">
       <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {
          WishListItems.length > 0?
          WishListItems.map((list,index)=>(
<Grid item xs={2} sm={4} md={4}>
                <Card sx={{ width: 300, height: 350, boxSizing: 'border-box' }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={list.image}
                    alt=" "
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
                     {list.title}
                    </Typography>
                   
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary", textAlign:"center" }}
                    >
                      Price : {list.price}
                    </Typography>
                    <Button
                     variant="danger"
                     onClick={()=>handleCart(list)}
                    >Add To cart</Button>
                  </CardContent>
                </Card>
              </Grid>
          ))
          :"nothing in Wishlist"
        }
         
      </Grid>
        
  </div>
  )
}

export default WishList