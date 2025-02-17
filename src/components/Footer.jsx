import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
    <div className='container-fluid bg-dark text-light p-3'>
      <Row>
        <Col>
            <h3>Redux Cart</h3>
            <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, obcaecati ipsum? Nisi, possimus? Sequi hic necessitatibus dolores culpa eos, corporis cupiditate ab, aut harum iste magni. Voluptatum eum necessitatibus provident.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam reiciendis id dolorem, delectus tempora accusantium, autem velit praesentium sequi recusandae, consectetur eos beatae iusto. Sit perferendis at impedit illum veritatis.
            </p>
        </Col>
        <Col className='d-flex align-items-center flex-column'>
          <h3 className='text-light'>Links</h3>
          <p><Link to={'/'} className='text-info'>Landing</Link></p>
          <p><Link to={'/cart'} className='text-info'>Cart</Link></p>
          <p><Link to={'/wish'} className='text-info'>Whishlist</Link></p>
        </Col>
        <Col>
          <h3 className='text-light mb-3'>Feedback</h3>
          <textarea name="" id="" className='form-control' placeholder='Enter Feedback'></textarea>
          <button className='btn btn-info mt-4'>Submit</button>
        </Col>
      </Row>
    </div>
    </>
  )
}

export default Footer