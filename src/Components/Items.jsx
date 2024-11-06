import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Grid from '@mui/material/Grid2';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
function Items() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products").then((response) => {
      response.json().then((res) => {
        setItems(res);
      });
    });
  });
  return (
    <div className="container mt-5">
<Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>      
  {items.length > 0
          ? items.map((list, index) => (
              // <Col lg={3} >
              //   <Card style={{ width: "18rem"  }} className="me-3">
              //     <Card.Img variant="top" src={list.image} style={{height:"120px"}} />
              //     <Card.Body>
              //       <Card.Title>{list.title}</Card.Title>
              //       <Card.Text>{list.description.slice(1, 50)}...</Card.Text>
              //       <Button variant="primary">Go somewhere</Button>
              //     </Card.Body>
              //   </Card>
              // </Col>
              <Grid  item xs={2} sm={4} md={4}>
                  <Card sx={{ maxWidth: 340 }}>
                  <CardMedia
                  component="img"
                  // height="350px"
                  image={list.image}
                  alt="Paella dish"
                  className="p-4"
                  height="250px"
                />
                <CardContent>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        {list.title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        {list.description.slice(1, 50)}...
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        Price : ${list.price}
        </Typography>
      </CardContent>
                  </Card>
            </Grid>
            ))
          : " Nothing to show"}
</Grid>    </div>
  );
}

export default Items;
