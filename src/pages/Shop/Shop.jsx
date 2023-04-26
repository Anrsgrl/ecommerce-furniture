import React from 'react';
import Connect from "../../components/Connect/Connect";
import Contact from "../../components/Contact/Contact";
import ShopProducts from './components/ShopProducts/ShopProducts';


const Shop = () => {
    return (
        <div className="shop page-container">
            <ShopProducts />
            <Connect />
            <Contact />
        </div>
    )
}

export default Shop;