import React from 'react';
import "./homeSale.scss";
import { useNavigate } from 'react-router-dom';

const HomeSale = () => {
    const navigate = useNavigate();
    return (
        <div className="home-sale page-container">
            <div className="sale-content">
                <div className="sale-title d-flex flex-column">
                    <h2>Sale!</h2>
                    <h3 className='text-center text-sm-start'>10% Off On All Products!</h3>
                    <button onClick={() => navigate("/shop")} className='general-button'>Shop Now</button>
                </div>
            </div>
        </div>
    )
}

export default HomeSale;