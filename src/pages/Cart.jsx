import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { useSelector,useDispatch } from 'react-redux'
import { removeFromCart } from '../Redux/Slices/cartSlice'
import { increaseQty,decreaseQty,checkout } from '../Redux/Slices/cartSlice'


function Cart() {

  const { cart } = useSelector(state => state.cartReducer)
  const dispatch = useDispatch()
  
  return (
    <>
      <div className='container-fluid p-2'>
        <h2 className='mb-4'>Card Summary</h2>
        <Row>
          <Col lg={9}>
            {
              cart.length > 0 ?
                <table className='table table-bordered border-light'>
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Title</th>
                      <th>Image</th>
                      <th>Unit Price</th>
                      <th>Quantity</th>
                      <th>Total Price</th>
                      <th>...</th>
                    </tr>
                  </thead>
                  <tbody>
                  {
                    cart?.map(item=>(
                <tr>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td><img src={item.thumbnail} alt="" height={'390px'} width={'320px'} /></td>
                    <td>{item.price} </td>
                    <td>
                        <button className="btn" onClick={()=>{dispatch(increaseQty(item.id))}}>+</button>
                        <span className="border border-1 border-dark rounded p-3">{item.quantity}</span>
                        <button className="btn" onClick={()=>{dispatch(decreaseQty(item.id))}}>-</button>
                    </td>
                    <td>
                      {item.price * item.quantity}
                    </td>
                    <td>
                        <button className="btn" onClick={()=>(dispatch(removeFromCart(item.id)))}><i className="fa-solid fa-trash fa-xl text-danger"></i></button>
                    </td>

                </tr>))}
              

                  </tbody>
                </table>
                :
                <h1>No items in cart</h1>
          }
          </Col>
          <Col lg={3}>
            <div className='border border-3 rounded shadow bg-dark p-4'>
              <h4>Total Amount : { Math.ceil(cart?.reduce((prev,item)=>prev+(item.quantity*item.price),0))}</h4>
              <h4>Total Product : {cart?.length}</h4>
              <div className='d-grid'>
                <button className='btn btn-success' onClick={()=>{dispatch(checkout())}}>Checkout</button>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default Cart