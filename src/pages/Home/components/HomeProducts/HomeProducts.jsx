import React from 'react'
import ProductCard from '../../../../components/ProductCard/ProductCard';
import "./homeProducts.scss";
const HomeProducts = () => {
    return (
        <div className="home-products page-container text-center">
            <h3>Our Latest Products</h3>
            <div className="divider-part">
                <div className="divider"></div>
            </div>
            <div className="row">
                <ProductCard />
            </div>
        </div>
    )
}

export default HomeProducts