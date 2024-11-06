import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import { Button, Card } from 'react-bootstrap';

function Items() {
    const [items,setItems] = useState([])
    useEffect(()=>{
        fetch(' https://fakestoreapi.com/products').then((response)=>{
           response.json().then((res)=>{
            setItems(res)
            
           })
            
        })
    })
  return (
    <div className='container'>
         <Row className='me-5'>
              {
            items.length >0 ?
            items.map((list, index)=>(
              
               
                    <Col lg={4}  sm={12}>
                    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
                    </Col>
                
                
               
               
               
                        
            ))
            :
            " Nothing to show"
        }
        </Row>
    </div>
  )
}

export default Items