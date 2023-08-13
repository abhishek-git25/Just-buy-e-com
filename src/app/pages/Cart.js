import React from 'react'
import ProductCard from '../components/ProductCard'
import { Button, Card, Col } from 'react-bootstrap'

const Cart = () => {
  return (
    <div className='p-4'>
      <ProductCard/>
      {/* <Divider/> */}
      <hr className='mt-5 mb-4'/>
      <Col lg = {2} className='mx-auto'>
      <Card className='border-0 shadow-sm bg-light mx-auto p-2'>
      <Card.Body className='d-flex justify-content-center flex-column'>
        <h4>Total Price : 20000</h4>
          <Button variant='warning' className='mt-2'>Proceed To Buy</Button>
      </Card.Body>
      </Card>
      </Col>
    </div>
  )
}

export default Cart
