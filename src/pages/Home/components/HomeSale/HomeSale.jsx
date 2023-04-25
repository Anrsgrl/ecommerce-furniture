import React from 'react';
import "./homeSale.scss";

const HomeSale = () => {
    return (
        <div className="home-sale page-container">
            <div className="sale-content">
                <div className="sale-title d-flex flex-column">
                    <h2>Sale!</h2>
                    <h3>10% Off On All Products!</h3>
                    <button className='general-button'>Shop Now</button>
                </div>
            </div>
        </div>
    )
}

export default HomeSale;