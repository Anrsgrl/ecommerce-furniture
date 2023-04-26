import React from 'react';
import Connect from '../../components/Connect/Connect';
import Contact from '../../components/Contact/Contact';
import CartPayment from './components/CartPayment/CartPayment';

const Cart = () => {
    return (
        <div className="cart page-container ">
            <CartPayment />
            <Connect />
            <Contact />
        </div>
    )
}

export default Cart