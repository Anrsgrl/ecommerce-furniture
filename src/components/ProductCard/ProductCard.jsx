import React from 'react';
import { Link } from 'react-router-dom';
import "./productCard.scss";
import { HiShoppingCart } from "react-icons/hi";
import { FaEye } from "react-icons/fa";

const ProductCard = () => {
    const sale = true;
    return (
        <div className="product-card d-flex flex-column col-12 col-md-4 col-lg-3">
            <div className="product-image mb-1">
                <Link to="/"><img src="https://websitedemos.net/furniture-store-04/wp-content/uploads/sites/155/2018/01/wooden-rocking-chair-300x300.jpg" alt="product" /></Link>
            </div>
            <div className="product-info px-3 d-flex flex-column">
                <span className='product-category'>Armchair</span>
                <h3><Link to="/">Wooden Rocking Chair</Link ></h3>
                <div className="product-prices d-flex">
                    {sale ? (<><del className='product-price pe-2'>£169.00</del><span className='product-price'>£169.00</span></>) : (<span className='product-price'>£169.00</span>)}
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