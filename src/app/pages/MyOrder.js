import React from 'react'
import { Col, Table } from 'react-bootstrap'

const MyOrder = () => {
  return (
    <div>

     <h3 className='text-center mt-4 mb-5'>Your Orders</h3>
    <Col lg = {5} className='mx-auto mt-5'>
     <Table striped >
      <thead>
        <tr>
          <th>Product</th>
          <th>Price</th>
          <th>Total Price</th>
          <th>Ordered Date</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Gucci Bag X 3</td>
          <td>1000</td>
          <td>3000</td>
          <td>13-08-23</td>
        </tr>
        <tr>
          <td>Gucci Bag X 3</td>
          <td>1000</td>
          <td>3000</td>
          <td>13-08-23</td>
        </tr>
      </tbody>
    </Table>
    </Col>
    </div>
  )
}

export default MyOrder
