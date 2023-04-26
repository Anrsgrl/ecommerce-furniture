import React from 'react';
import { Link } from 'react-router-dom';
import "./productCard.scss";
import { HiShoppingCart } from "react-icons/hi";
import { FaEye } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/features/cartSlice';

const ProductCard = (props) => {
    const { image, title, category, price, oldPrice, item } = props;
    const dispatch = useDispatch();
    return (
        <div className="product-card pb-5 d-flex flex-column col-12 col-md-4 col-lg-3">
            <div className="product-image mb-1">
                <Link to="/"><img src={image} alt="product" /></Link>
            </div>
            <div className="product-info px-3 d-flex flex-column">
                <span className='product-category'>{category}</span>
                <h3><Link to="/">{title}</Link ></h3>
                <div className="product-prices d-flex">
                    {oldPrice ? (<><del className='product-price pe-2'>£{oldPrice}.00</del><span className='product-price'>£{price}.00</span></>) : (<span className='product-price'>£{price}.00</span>)}
                </div>
            </div>
            <div className="product-card-buttons d-flex flex-column">
                <button onClick={() => { dispatch(addToCart(item)) }} className='add-cart'><HiShoppingCart /><span>Add to cart</span></button>
                <button className='quick-view'><FaEye /><span>Quick View</span></button>
            </div>
            {oldPrice && <span className="product-sale">Sale!</span>}
        </div>
    )
}

export default ProductCard;