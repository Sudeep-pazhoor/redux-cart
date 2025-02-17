import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { fetchProductThunk } from '../Redux/Slices/productSlice'
import { useDispatch, useSelector } from 'react-redux'
import { addToWishlist } from '../Redux/Slices/wishSlice'
import { addToCart } from '../Redux/Slices/cartSlice'
import { leftshift, rightshift } from '../Redux/Slices/productSlice'


function Landing() {


    const dispatch = useDispatch()
    const { products, pending, error, currentPage, productsPerPage } = useSelector((state) => state.productReducer)
    const { Wishlist } = useSelector((state) => state.wishlistReducer)

    //pagechange
    const totalPages = products.length / productsPerPage
    const lastProductIndex = (productsPerPage * currentPage)
    const firstProductIndex = lastProductIndex - (productsPerPage)

    const leftChange = () => {
        if (currentPage > 1) {
            dispatch(leftshift())
        }
    }

    const rightChange = () => {
        if (currentPage != totalPages) {
            dispatch(rightshift())

        }
    }


    useEffect(() => {
        dispatch(fetchProductThunk())
    }, [])

    const handleAddtoWish = (prod) => {
        const existingProduct = Wishlist.find(item => item.id == prod.id)

        if (existingProduct) {
            alert("product already added to wishlist")
        }
        else {
            dispatch(addToWishlist(prod))
            alert("Product added to Wishlist")
        }
    }

    return (

        <>
            <header className="bg-dark py-5">
                <div className="container px-4 px-lg-5 my-5">
                    <div className="text-center text-white">
                        <h1 className="display-4 fw-bolder">Shop in style</h1>
                        <p className="lead fw-normal text-white-50 mb-0">With this shop hompeage template</p>
                    </div>
                </div>
            </header>

            <section className="py-5">
                <div className="container px-4 px-lg-5 mt-5">
                    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                        {pending ? (
                            <h2>Loading...</h2>
                        ) : error ? (
                            <h1 className="text-center text-danger">{error}</h1>
                        ) : (
                            products.slice(firstProductIndex, lastProductIndex).map(item => (
                                <div className="col mb-5" key={item.id}>
                                    <div className="card h-100">
                                        <Link to={`/product/${item.id}`}>
                                            <img className="card-img-top" src={item.thumbnail} alt={item.title} />
                                        </Link>

                                        <div className="card-body p-4">
                                            <div className="text-center">
                                                <h5 className="fw-bolder">{item.title.slice(0, 10)}...</h5>
                                                ${item.price}
                                            </div>
                                        </div>

                                        <div className="card-footer d-flex justify-content-between p-4 pt-0 border-top-0 bg-transparent">
                                            <button className="btn" onClick={() => { dispatch(addToCart(item)) }}>
                                                <i className="fa-solid fa-cart-plus text-success fa-xl"></i>
                                            </button>
                                            <button className="btn" onClick={() => { handleAddtoWish(item) }}>
                                                <i className="fa-solid fa-heart-circle-plus text-danger fa-xl"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </section>
            <div className='container-fluid d-flex justify-content-center'>
                <div className=''>
                    <button className="btn" onClick={() => { leftChange() }}>
                        <i className="fa-solid fa-angles-left"></i>
                    </button>
                    <span>{currentPage}/{totalPages}</span>
                    <button className="btn" onClick={() => { rightChange() }}>
                        <i className="fa-solid fa-angles-right"></i>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Landing