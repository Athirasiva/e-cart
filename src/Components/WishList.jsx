import React from 'react'
import Badge from 'react-bootstrap/Badge';
import { Button } from 'react-bootstrap';
function WishList() {
  return (
    <div>
        <Button variant="primary" className='me-3'>
    WishList <Badge bg="secondary">9</Badge>
  </Button>
  </div>
  )
}

export default WishList