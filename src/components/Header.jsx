import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { searchProducts } from '../Redux/Slices/productSlice';



function Header() {

const {Wishlist}=useSelector((state=>state.wishlistReducer))//to set total number of items added into wishlist
const{cart}=useSelector((state=>state.cartReducer))
const dispatch=useDispatch()

  return (
    <>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand>
            <Link to={'/'} style={{ textDecoration: 'none' }}>
              <i className="fa-brands fa-shopify fa-lg"></i>
              {' '}
              <b className='text-dark'>Redux-Cart</b>
            </Link>
          </Navbar.Brand>
          <input type="search" className='form-control w-25' placeholder='Search' onChange={(e)=>dispatch(searchProducts(e.target.value))}/>
          <div>
            <Link className='btn btn-outline-dark me-3' to={'/wish'}>
            <i className="fa-solid fa-heart text-danger"></i>{' '}
              Wishlist{' '}
              <span className='badge bg-dark'>{Wishlist?.length}</span>{/* //to set total number of items added into wishlist */}
            </Link>
            <Link className='btn btn-outline-dark' to={'/cart'}>
              <i className="fa-solid fa-bag-shopping text-success"></i>{' '}
              Cart{' '}
              <span className='badge bg-dark'>{cart?.length}</span>
            </Link>
          </div>
        </Container>
      </Navbar>
    </>
  )
}

export default Header