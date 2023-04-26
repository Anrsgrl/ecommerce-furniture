import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { data } from "../../data/data";
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/features/cartSlice';
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';

const Product = () => {
    const { id } = useParams();
    const [product, setProduct] = useState()
    const dispatch = useDispatch();

    useEffect(() => {
        const productDetail = data.find((item) =>
            +item.id === +id
        );
        setProduct(productDetail)
    }, [id])
    return (
        <div className="product page-container">
            <div className="pt-5 back-shop">
                <h6 className="mb-0"><Link to="/shop"><HiOutlineArrowNarrowLeft />Back to Shop</Link></h6>
            </div>
            <div className="row">
                <div className="col-12 col-md-7 p-5">
                    <img src={product?.image} alt="product" className='w-100' />
                </div>
                <div className="col-12 col-md-5 p-5 product-info">
                    <h2>{product?.title}</h2>
                    <span className='product-category'>{product?.category}</span>
                    <p>{product?.content}</p>
                    <div className="product-prices d-flex pb-2">
                        {product?.oldPrice ? (<><del className='product-price pe-2'>£{product?.oldPrice}.00</del><span className='product-price'>£{product?.price}.00</span></>) : (<span className='product-price'>£{product?.price}.00</span>)}
                    </div>
                    <button className='general-button' onClick={() => dispatch(addToCart(product))}>Add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default Product;