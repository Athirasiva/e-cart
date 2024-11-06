import React from 'react'
import Badge from 'react-bootstrap/Badge';
import { Button } from 'react-bootstrap';

function Cart() {
  return (
    <div>
        
        <Button variant="primary">
      Cart <Badge bg="secondary">9</Badge>
    </Button>
    </div>
  )
}

export default Cart