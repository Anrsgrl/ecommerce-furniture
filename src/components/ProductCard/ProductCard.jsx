import React from 'react';
import { Link } from 'react-router-dom';
import "./productCard.scss";
import { HiShoppingCart } from "react-icons/hi";
import { FaEye } from "react-icons/fa";

const ProductCard = (props) => {
    const { image, title, category, price, newPrice, sale, id } = props;
    return (
        <div key={id} className="product-card pb-5 d-flex flex-column col-12 col-md-4 col-lg-3">
            <div className="product-image mb-1">
                <Link to="/"><img src={image} alt="product" /></Link>
            </div>
            <div className="product-info px-3 d-flex flex-column">
                <span className='product-category'>{category}</span>
                <h3><Link to="/">{title}</Link ></h3>
                <div className="product-prices d-flex">
                    {sale ? (<><del className='product-price pe-2'>£{price}.00</del><span className='product-price'>£{newPrice}.00</span></>) : (<span className='product-price'>£{price}.00</span>)}
                </div>
            </div>
            <div className="product-card-buttons d-flex flex-column">
                <button className='add-cart'><HiShoppingCart /><span>Add to cart</span></button>
                <button className='quick-view'><FaEye /><span>Quick View</span></button>
            </div>
            {sale && <span className="product-sale">Sale!</span>}
        </div>
    )
}

export default ProductCard;