import React, { useEffect, useState } from 'react'
import Badge from 'react-bootstrap/Badge';
import { Button } from 'react-bootstrap';
import Grid from "@mui/material/Grid2";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../redux/slice/cartSlice';
import { useNavigate } from 'react-router-dom';

function Cart() {
  const cart = useSelector((state)=>state.cartReducer)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [sum, setSum] = useState("")
  useEffect(()=>{
    if(cart.length>0){
      setSum(cart.map(item=>item.price).reduce((p1,p2)=>p1+p2))
    }
  },[])
  const handleCheckout =() =>{
    alert("Order Placed Successfully");
    navigate('/')
  }
  return (
    <div className="container mt-5">
    <Grid
     container
     spacing={{ xs: 2, md: 3 }}
     columns={{ xs: 4, sm: 8, md: 12 }}
   >
    {
      cart.length > 0 ?
      cart.map((elem,index)=>(
      

        <Grid item xs={2} sm={4} md={4}>
             <Card sx={{ width: 300, height: 350, boxSizing: 'border-box' }}>
               <CardMedia
                 component="img"
                 height="200"
                 image={elem.image}
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
                  {elem.title}
                 </Typography>
                
                 <Typography
                   variant="body2"
                   sx={{ color: "text.secondary", textAlign:"center" }}
                 >
                   Price : {elem.price}
                 </Typography>
                 <Button
                  variant="danger"
                  onClick={()=>dispatch(removeFromCart(elem.id))}
                 >Remove from cart</Button>
               </CardContent>
             </Card>
           </Grid>
           
      )
    )
      
      
      :
      "Nothing in cart"
    }
     
      
   </Grid>

   <div className='mt-3'>
    <h3>Cart Summary</h3>
    <p>Total No Of Product : {cart.length}</p>
    <p>Total Price: {sum}</p>
    <Button
       variant="success"
       onClick={handleCheckout}
    >Checkout</Button>
   </div>
     
</div>
  )
}

export default Cart